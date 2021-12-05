import { get } from 'svelte/store';
import { mainStore } from '../store';
import type { Calls } from '../types/calls';
import { browser } from '$app/env';

let devTools = null;
/**
 * @returns void
 */
export const initDevTools = (): void => {
	devTools =
		window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__'].connect();
};
/**
 * @param  {Calls} state
 * @returns void
 */
export const actionsLogger = (state: Calls): void => {
	// if (!browser) return;
	const store = get(mainStore);

	const parsed = {};

	Object.keys(store).forEach((key) => {
		parsed[key] = {
			...store[key],
			state: get(store[key].state)
		};
	});

	if (state.nextCalled && devTools) devTools.send(state.nextCalled.type.toString(), parsed);

	console.group(`%c Action ${state.nextCalled.type.toString()}`, 'color: grey');
	console.log(`%c prev call`, 'color: #9E9E9E', state.prevCalled);
	console.log(
		`%c current state`,
		'color: #03A9F4',
		state.nextCalled ? get(store[state.nextCalled.name].state) : null
	);
	console.log(`%c next call`, 'color: #4CAF50', state.nextCalled);
	console.groupEnd();
};
