import { interceptors } from './store';
import { get } from 'svelte/store';
import type {
	AddInterceptor,
	GetInterceptors,
	ResetInterceptors,
	CallInterceptors,
	PreIntercept,
	PostIntercept,
	CreateSmartInterceptor,
	SmartInterceptor
} from './types/interceptor';
import { getCurrent } from './internal';
/**
 * @param  {string} name
 * @param  {symbol} constant
 * @param  {Interceptor} callback
 * @param  {Mode='pre'} mode
 * @param  {} handled=false
 * @param  {(result:any,api:InterceptorApi)=>void} fulfilled?
 * @param  {(error:any,api:InterceptorApi)=>void} rejected?
 * @returns void
 */
export const addInterceptor: AddInterceptor = (
	constant,
	callback,
	mode = 'pre',
	handled = false,
	fulfilled?,
	rejected?
) => {
	const interceptor = {
		mode,
		handled,
		callback,
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		fulfilled: fulfilled || (() => {}),
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		rejected: rejected || (() => {})
	};

	const name = getCurrent();

	if ('handled' in callback) {
		interceptor.handled = callback.handled;
		interceptor.fulfilled = callback.fulfilled;
		interceptor.rejected = callback.rejected;
	}

	interceptors.update((prevState) => ({
		...prevState,
		[name]: {
			...(prevState[name] || {}),
			[constant]: [
				...(prevState[name] && prevState[name][constant] ? prevState[name][constant] : []),
				interceptor
			]
		}
	}));
};
/**
 * @param  {symbol} constant
 * @returns InterceptorMap
 */
export const getInterceptors: GetInterceptors = (name, constant) => {
	return get(interceptors)[name] ? get(interceptors)[name][constant] || [] : [];
};

/**
 * @param  {string} name
 * @param  {symbol} constant
 * @param  {Action['payload']} payload
 * @param  {InterceptorApi} api
 * @param  {Mode} mode
 * @returns void
 */
export const callInterceptors: CallInterceptors = async (name, constant, payload, api, mode) => {
	const interceptors = getInterceptors(name, constant);

	await interceptors.forEach(async (interceptor) => {
		if (interceptor.mode !== mode) return;
		console.log(interceptor);

		if (interceptor.handled) {
			try {
				const res = await interceptor.callback(payload, api);
				interceptor?.fulfilled(res, api);
			} catch (error) {
				interceptor?.rejected(error, api);
			}
		} else {
			interceptor.callback(payload, api);
		}
	});
};
/**
 * @param  {symbol} constant
 * @param  {Action} action
 * @param  {InterceptorApi} api
 * @returns void
 */
export const preIntercept: PreIntercept = (constant, action, api) => {
	callInterceptors(action.name, constant, action.payload, api, 'pre');
};
/**
 * @param  {symbol} constant
 * @param  {Action} action
 * @param  {InterceptorApi} api
 * @returns void
 */
export const postIntercept: PostIntercept = (constant, action, api) => {
	callInterceptors(action.name, constant, action.payload, api, 'post');
};
/**
 * @returns void
 */
export const resetInterceptors: ResetInterceptors = (name) => {
	interceptors.update((prevState) => ({ ...prevState, [name]: {} }));
};

export const createSmartInterceptor: CreateSmartInterceptor = (callback) => {
	const interceptor: SmartInterceptor = callback;
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	interceptor.fulfilled = () => {};
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	interceptor.rejected = () => {};
	interceptor.handled = true;
	interceptor.clone = (prev: SmartInterceptor) => {
		const prevClone = prev || interceptor;
		const clone = prevClone.bind({});
		clone.fulfilled = prevClone.fulfilled;
		clone.rejected = prevClone.rejected;
		clone.handled = prevClone.handled;
		clone.clone = prevClone.clone.bind(null, clone);
		return clone;
	};

	return interceptor;
};
