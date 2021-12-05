import { mainStore, listenersStore, callsStore, queue, internalStore } from './store';
import { get } from 'svelte/store';
import type { GeneralAction } from './types/slicer';
import type { Queue } from './helpers/queue';
import type { Calls } from './types/calls';
import type { Value } from './types/storex';
import type { Listener } from './types/listener';
import type { Logic } from './types/logic';
import { postIntercept, preIntercept } from './interceptor';

/**
 * @param  {GeneralAction} action
 * @returns void
 */
const dispatch = (action: GeneralAction, name: string): void => {
	const action_: GeneralAction = typeof action === 'function' ? action() : action;

	if (!(name in get(mainStore))) {
		console.error('Logic name not valid.', name);
		return;
	}

	if (get(callsStore).nextCalled === null) {
		callsStore.update((prevState) => ({
			...prevState,
			nextCalled: { ...action_, name }
		}));
		return;
	}

	addQueue({ ...action_, name });
};

const dispatchAsync = async (
	action: GeneralAction,
	name: string,
	destination: symbol
): Promise<void> => {
	const action_: GeneralAction = typeof action === 'function' ? action() : action;

	if (!(name in get(mainStore))) {
		console.error('Logic name not valid.', name);
		return Promise.reject();
	}

	if (get(callsStore).nextCalled === null) {
		return new Promise((resolve) => {
			internalStore.update((prevState) => ({
				...prevState,
				currentResolve: resolve,
				currentIsAsync: true,
				destination
			}));
			callsStore.update((prevState) => ({
				...prevState,
				nextCalled: { ...action_, name }
			}));
		});
	}

	return new Promise((resolve) => {
		internalStore.update((prevState) => ({
			...prevState,
			currentResolve: resolve,
			currentIsAsync: true,
			destination
		}));
		addQueue({ ...action_, name });
	});
};

/**
 * @param  {GeneralAction} action
 * @param  {number} time
 * @returns void
 */
const timedDispatch = (action: GeneralAction, time: number, name: string): void => {
	setTimeout(() => dispatch(action, name), time * 60 * 1000);
};
/**
 * @param  {GeneralAction} action
 */
const addQueue = (action: GeneralAction) => {
	const q: Queue = get(queue);

	q.enqueue(action);

	queue.set(q);
};

/**
 * @returns GeneralAction
 */
const removeQueue = (): GeneralAction => {
	const q: Queue = get(queue);

	const res: GeneralAction = q.dequeue();

	queue.set(q);

	return res;
};
/**
 * @returns void
 */
const updateQueue = (): void => {
	if (get(queue).isEmpty()) return;
	if (get(callsStore).nextCalled !== null) return;

	const action: GeneralAction = removeQueue();
	callsStore.update((prevState) => ({
		...prevState,
		nextCalled: action
	}));
};
/**
 * @param  {} {nextCalled
 * @param  {Calls} called}
 * @returns void
 */
const reducerCatcher = ({ nextCalled, called }: Calls): void => {
	if (nextCalled === null) return;
	if (called !== null || (called && called.type === nextCalled.type)) return;
	const app = get(mainStore)[nextCalled.name];

	const state: Value = { ...get(app.state) };

	const result = app.reducer(nextCalled, state);

	const newState = Object.assign({}, state, result);

	const internal = get(internalStore);

	if (internal.destination === nextCalled.type) {
		internal.currentResolve(null);
		internalStore.update((prevState) => ({
			...prevState,
			currentIsAsync: false,
			currentResolve: null,
			destination: null
		}));
	}

	app.state.update(() => newState);
};
/**
 * @param  {} {nextCalled
 * @param  {Calls} called}
 * @returns void
 */
const interceptorCatcher = ({ nextCalled, called }: Calls): void => {
	if (called === null) return;
	if (nextCalled !== null && nextCalled.type === called.type) return;

	const api = {
		dispatch: (action: GeneralAction, name?: string) => dispatch(action, name ? name : called.name),
		getState: () => get(get(mainStore)[called.name].state)
	};

	preIntercept(called.type, called, api);

	callsStore.update((prevState: Calls) => {
		return {
			...prevState,
			prevCalled: prevState.called,
			called: null
		};
	});

	postIntercept(called.type, called, api);
};
/**
 * @param  {{called:GeneralAction}} {called}
 * @returns void
 */
const listenerCatcher = ({ called }: { called: GeneralAction }): void => {
	if (called === null) return;
	const listeners = get(listenersStore);
	const deletetion = [];

	listeners.map((item: Listener) => {
		if (typeof item.actionType === 'object') {
			if (item.actionType.includes(called.type)) {
				item.callback(called);
				if (item.type === 'once') deletetion.push(item);
			}
		} else {
			if (item.actionType === called.type) {
				item.callback(called);
				if (item.type === 'once') deletetion.push(item);
			}
		}
		return;
	});

	deletetion.map((item: Listener) => {
		console.log(item, 'deletion');

		listenersStore.update((prevState: Listener[]) => {
			return prevState.filter((listener: Listener) => listener.id !== item.id);
		});
		return;
	});
};

export {
	reducerCatcher,
	interceptorCatcher,
	listenerCatcher,
	dispatch,
	timedDispatch,
	updateQueue,
	dispatchAsync
};
