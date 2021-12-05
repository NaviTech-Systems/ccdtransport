import { listenersStore } from './store';
import type { AddListener } from './types/listener';
/**
 * @param  {symbol|symbol[]} actionType
 * @param  {(action:ActionWithPayload<any>)=>void} callback
 * @returns void
 */

export const addListener: AddListener = (actionType, callback) => {
	const now = new Date();
	const id = btoa(now.toISOString());
	listenersStore.update((prevState) => [...prevState, { actionType, callback, id }]);
};

export const addOnceListener: AddListener = (actionType, callback) => {
	const now = new Date();
	const id = btoa(now.toISOString());
	listenersStore.update((prevState) => [...prevState, { actionType, callback, type: 'once', id }]);
};
