import { writable, derived } from 'svelte/store';
import { Queue } from './helpers/queue';
import type { Calls } from './types/calls';
import type { Listener } from './types/listener';
import type { Store } from './types/logic';
import type { Selector, Storex, Writable } from './types/storex';
import type { Store as InterceptorsStore } from './types/interceptor';
import type { Store as InternalStore } from './types/internal';

const callsStore = writable<Calls>({
	prevCalled: null,
	called: null,
	nextCalled: null
});

const interceptors = writable<InterceptorsStore>({});

const listenersStore = writable<Listener[]>([]);

const mainStore = writable<Store>({});

const internalStore = writable<InternalStore>({
	current: '',
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	currentResolve: () => {},
	currentIsAsync: false,
	destination: null
});

const queue = writable<Queue>(new Queue());

/**
 * @param  {Value} initialState
 * @returns Storex
 */
const storex = <Value>(initialState: Value): Storex<Value> => {
	const initial = JSON.stringify(initialState);
	const { subscribe, set, update }: Writable<Value> = writable<Value>(initialState);

	const reset = (): void => {
		set(JSON.parse(initial));
	};

	const newSet = (newState: Value): void => {
		set({ ...initialState, ...newState });
	};

	//return a derived store based on the string param passed with the format "key.key.key" anc return the value of the last key as derived store

	return {
		subscribe,
		reset,
		set: newSet,
		update
	};
};

const select: Selector = (store, callback) => {
	return derived(store, (value) => {
		return callback(value);

		// set(newState);
	});
};

export {
	mainStore,
	listenersStore,
	callsStore,
	queue,
	storex,
	interceptors,
	select,
	internalStore
};
