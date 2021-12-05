import type { GlobalLogger } from './types/track';

/* eslint-disable no-prototype-builtins */
const Logger = {} as GlobalLogger;

// For those that are at home that are keeping score.
Logger['VERSION'] = '1.6.1';

// Function which handles all incoming log messages.
let logHandler;

// Map of ContextualLogger instances by name; used by Logger.get() to return the same named instance.
const contextualLoggersByNameMap = {};

// Polyfill for ES5's Function.bind.
// const bind = (scope, func) => {
// 	// eslint-disable-next-line no-undef
// 	return () => func.apply(scope, arguments);
// };

// Super exciting object merger-matron 9000 adding another 100 bytes to your download.
const merge = (...args) => {
	// eslint-disable-next-line no-undef
	const target = args[0];
	for (let i = 1; i < args.length; i++) {
		for (const key in args[i]) {
			if (!(key in target) && args[i].hasOwnProperty(key)) {
				target[key] = args[i][key];
			}
		}
	}
	return target;
};

// Helper to define a logging level object; helps with optimisation.
const defineLogLevel = (value, name) => {
	return { value: value, name: name };
};

// Predefined logging levels.
Logger['TRACE'] = defineLogLevel(1, 'TRACE');
Logger['DEBUG'] = defineLogLevel(2, 'DEBUG');
Logger['INFO'] = defineLogLevel(3, 'INFO');
Logger['TIME'] = defineLogLevel(4, 'TIME');
Logger['WARN'] = defineLogLevel(5, 'WARN');
Logger['ERROR'] = defineLogLevel(8, 'ERROR');
Logger['OFF'] = defineLogLevel(99, 'OFF');

// Inner class which performs the bulk of the work; ContextualLogger instances can be configured independently
// of each other.

class ContextualLogger {
	context;
	log;

	constructor(defaultContext) {
		this.context = defaultContext;
		this.setLevel(defaultContext.filterLevel);
		this.log = this.info; // Convenience alias.
	}

	public setLevel(newLevel) {
		// Ensure the supplied Level object looks valid.
		if (newLevel && 'value' in newLevel) {
			this.context.filterLevel = newLevel;
		}
	}

	// Gets the current logging level for the logging instance
	public getLevel() {
		return this.context.filterLevel;
	}

	// Is the logger configured to output messages at the supplied level?
	public enabledFor(lvl) {
		const filterLevel = this.context.filterLevel;
		return lvl.value >= filterLevel.value;
	}

	public trace() {
		// eslint-disable-next-line no-undef
		this.invoke(Logger['TRACE'], arguments);
	}

	public debug() {
		// eslint-disable-next-line no-undef
		this.invoke(Logger['DEBUG'], arguments);
	}

	public info() {
		// eslint-disable-next-line no-undef
		this.invoke(Logger['INFO'], arguments);
	}

	public warn() {
		// eslint-disable-next-line no-undef
		this.invoke(Logger['WARN'], arguments);
	}

	public error() {
		// eslint-disable-next-line no-undef
		this.invoke(Logger['ERROR'], arguments);
	}

	public time(label) {
		if (typeof label === 'string' && label.length > 0) {
			this.invoke(Logger['TIME'], [label, 'start']);
		}
	}

	public timeEnd(label) {
		if (typeof label === 'string' && label.length > 0) {
			this.invoke(Logger['TIME'], [label, 'end']);
		}
	}

	// Invokes the logger callback if it's not being filtered.
	public invoke(level, msgArgs) {
		if (logHandler && this.enabledFor(level)) {
			logHandler(msgArgs, merge({ level: level }, this.context));
		}
	}
}

// Protected instance which all calls to the to level `Logger` module will be routed through.
const globalLogger = new ContextualLogger({ filterLevel: Logger.OFF });

// Configure the global Logger instance.
(function () {
	// Shortcut for optimisers.
	const L = Logger;

	L['enabledFor'] = globalLogger.enabledFor.bind(globalLogger);
	L['trace'] = globalLogger.trace.bind(globalLogger);
	L['debug'] = globalLogger.debug.bind(globalLogger);
	L['time'] = globalLogger.time.bind(globalLogger);
	L['timeEnd'] = globalLogger.timeEnd.bind(globalLogger);
	L['info'] = globalLogger.info.bind(globalLogger);
	L['warn'] = globalLogger.warn.bind(globalLogger);
	L['error'] = globalLogger.error.bind(globalLogger);

	// Don't forget the convenience alias!
	L['log'] = L['info'];
})();

// Set the global logging handler.  The supplied function should expect two arguments, the first being an arguments
// object with the supplied log messages and the second being a context object which contains a hash of stateful
// parameters which the logging function can consume.
Logger.setHandler = (func) => {
	logHandler = func;
};

// Sets the global logging filter level which applies to *all* previously registered, and future Logger instances.
// (note that named loggers (retrieved via `Logger.get`) can be configured independently if required).
Logger.setLevel = (level) => {
	// Set the globalLogger's level.
	globalLogger.setLevel(level);

	// Apply this level to all registered contextual loggers.
	for (const key in contextualLoggersByNameMap) {
		if (contextualLoggersByNameMap.hasOwnProperty(key)) {
			contextualLoggersByNameMap[key].setLevel(level);
		}
	}
};

// Gets the global logging filter level
Logger.getLevel = () => {
	return globalLogger.getLevel();
};

// Retrieve a ContextualLogger instance.  Note that named loggers automatically inherit the global logger's level,
// default context and log handler.
Logger.get = (name) => {
	// All logger instances are cached so they can be configured ahead of use.
	return (
		contextualLoggersByNameMap[name] ||
		(contextualLoggersByNameMap[name] = new ContextualLogger(
			merge({ name: name }, globalLogger.context)
		))
	);
};

// CreateDefaultHandler returns a handler function which can be passed to `Logger.setHandler()` which will
// write to the window's console object (if present); the optional options object can be used to customise the
// formatter used to format each log message.
Logger.createDefaultHandler = (options) => {
	options = options || {};

	options.formatter =
		options.formatter ||
		function defaultMessageFormatter(messages, context) {
			// Prepend the logger's name to the log message for easy identification.
			if (context.name) {
				messages.unshift('[' + context.name + ']');
			}
		};

	// Map of timestamps by timer labels used to track `#time` and `#timeEnd()` invocations in environments
	// that don't offer a native console method.
	const timerStartTimeByLabelMap = {};

	// Support for IE8+ (and other, slightly more sane environments)
	const invokeConsoleMethod = (hdlr, messages) => {
		Function.prototype.apply.call(hdlr, console, messages);
	};

	// Check for the presence of a logger.
	if (typeof console === 'undefined') {
		return function () {
			/* no console */
		};
	}

	return (messages, context) => {
		// Convert arguments object to Array.
		messages = Array.prototype.slice.call(messages);

		let hdlr = console.log;
		let timerLabel;

		options.formatter(messages, context);

		if (context.level === Logger.TIME) {
			timerLabel = (context.name ? '[' + context.name + '] ' : '') + messages[0];

			if (messages[1] === 'start') {
				if (console.time) {
					console.time(timerLabel);
				} else {
					timerStartTimeByLabelMap[timerLabel] = new Date().getTime();
				}
			} else {
				if (console.timeEnd) {
					console.timeEnd(timerLabel);
				} else {
					invokeConsoleMethod(hdlr, [
						timerLabel + ': ' + (new Date().getTime() - timerStartTimeByLabelMap[timerLabel]) + 'ms'
					]);
				}
			}
		} else {
			// Delegate through to custom warn/error loggers if present on the console.
			if (context.level === Logger.WARN && console.warn) {
				hdlr = console.warn;
			} else if (context.level === Logger.ERROR && console.error) {
				hdlr = console.error;
				fetch('/api/log', {
					method: 'POST',
					body: JSON.stringify({
						message: messages[1].reason,
						level: context.level.name,
						...messages[1]
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				});
			} else if (context.level === Logger.INFO && console.info) {
				hdlr = console.info;
			} else if (context.level === Logger.DEBUG && console.debug) {
				hdlr = console.debug;
			} else if (context.level === Logger.TRACE && console.trace) {
				hdlr = console.trace;
			}

			invokeConsoleMethod(hdlr, messages);
		}
	};
};

// Configure and example a Default implementation which writes to the `window.console` (if present).  The
// `options` hash can be used to configure the default logLevel and provide a custom message formatter.
Logger.useDefaults = (options) => {
	Logger.setLevel((options && options.defaultLevel) || Logger.DEBUG);
	Logger.setHandler(Logger.createDefaultHandler(options));

	window['logger'] = Logger;

	window.onunhandledrejection = (e) => {
		const error = {
			reason: e.reason.message,
			fileName: e.reason.fileName,
			lineNumber: e.reason.lineNumber
		};

		Logger.error(e, error);
	};
	const originalOnError = window.onerror;
	window.onerror = (...e) => {
		Logger.error(e);
		originalOnError(e);
	};
};

// Createa an alias to useDefaults to avoid reaking a react-hooks rule.

export { Logger };
