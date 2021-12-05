// import type { Writable } from 'svelte/store';

export declare type Subscriber<T> = (value: T) => void;
/** Unsubscribes from value updates. */
export declare type Unsubscriber = () => void;
/** Callback to update a value. */
export declare type Updater<T> = (value: T) => T;
/** Cleanup logic callback. */
declare type Invalidator<T> = (value?: T) => void;
/** Start and stop notification callbacks. */
export declare type StartStopNotifier<T> = (set: Subscriber<T>) => Unsubscriber | void;
/** Readable interface for subscribing. */
export interface Readable<T> {
	/**
	 * Subscribe on value changes.
	 * @param run subscription callback
	 * @param invalidate cleanup callback
	 */
	subscribe(this: void, run: Subscriber<T>, invalidate?: Invalidator<T>): Unsubscriber;
}
/** Writable interface for both updating and subscribing. */
export interface Writable<T> extends Readable<T> {
	/**
	 * Set value and inform subscribers.
	 * @param value to set
	 */
	set(this: void, value: T): void;
	/**
	 * Update value using callback and inform subscribers.
	 * @param updater callback
	 */
	update(this: void, updater: Updater<T>): void;
}

export interface Storex<T> extends Writable<T> {
	reset: () => void;
	// select: (key: string) => Readable<Storex<T>>;
}

export type Selector = <T, K>(state: Storex<T>, callback: (value: T) => K) => Readable<K>;

export type Value = T;
/**
 * @param  {T} initialState
 * @returns Storex
 */
export declare function storex(initialState: T): Storex<typeof T>;
