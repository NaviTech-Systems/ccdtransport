import { get } from 'svelte/store';
import { mainStore } from './store';
import type { Value } from './types/storex';
import type { SyncPersist, SyncMainState } from './types/persist';
/**
 * @param  {string} name
 * @param  {Value} value
 * @returns void
 */
export const syncPersist: SyncPersist = (name, value) => {
	const { persist } = get(mainStore)[name];

	if (!persist) return;

	let persisted = {};

	if (typeof persist === 'string') {
		persisted = value[persist];
		persisted = {
			value: persisted,
			_derived: persist
		};
	} else persisted = value;

	localStorage.setItem(name, JSON.stringify(persisted));
};
/**
 * @param  {string} name
 * @returns void
 */
export const syncMainState: SyncMainState = (name) => {
	const store = localStorage.getItem(name);
	if (!store) {
		mainStore.update((prevState) => ({
			...prevState,
			[name]: { ...prevState[name], _persistLoaded: true }
		}));
		return;
	}

	if (typeof get(mainStore)[name].persist === 'string') {
		const json = JSON.parse(localStorage.getItem(name));

		get(mainStore)[name].state.update((prevState: Value) => ({
			...prevState,
			[json._derived]: json.value
		}));
	} else {
		get(mainStore)[name].state.update(() => ({
			...JSON.parse(localStorage.getItem(name))
		}));
	}
	mainStore.update((prevState) => ({
		...prevState,
		[name]: { _persistLoaded: true, ...prevState[name] }
	}));
};
