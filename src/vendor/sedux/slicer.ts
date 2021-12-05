import { callsStore, mainStore } from './store';
import { syncMainState, syncPersist } from './persist';
import { get } from 'svelte/store';
import type { GeneralAction, Slicer, SlicerFactory, SlicerFactoryAsync } from './types/slicer';
import type { Storex, Value } from './types/storex';
import type { Calls } from './types/calls';
import { dispatch as dispatchToSlicer, timedDispatch as timedDispatchToSlicer } from './dispatcher';
import type { Reducer } from './types/reducer';
import { resetInterceptors } from './interceptor';
import { setCurrent } from './internal';

/**
 * @param  {(action:PureAction)=>void|null} interceptor
 * @param  {(nextCalled:PureAction,state:Value)=>Value} reducer
 * @param  {string} name
 * @param  {Storex<Value>} state
 * @param  {boolean|string=false} persist
 * @returns Slicer
 */
export const createSlicerAsync: SlicerFactoryAsync = async (
	interceptor: () => void | null,
	reducer: Reducer,
	name: string,
	state: Storex<Value>,
	persist: boolean | string = false
) => {
	return new Promise<Slicer>((resolve, reject) => {
		if (!reducer || !state || !name) return;

		mainStore.update((prevState) => ({
			...prevState,
			[name]: {
				reducer,
				state,
				persist,
				_persistLoaded: !persist
			}
		}));

		setCurrent(name);
		resetInterceptors(name);
		interceptor ? interceptor() : null;

		if (persist) syncMainState(name);

		const store = get(mainStore);

		const destroy = () => {
			store[name].state.reset();
			delete store[name];
			mainStore.set(store);
		};

		const dispatch = (action: GeneralAction): void => dispatchToSlicer(action, name);

		const timedDispatch = (action: GeneralAction, time: number): void =>
			timedDispatchToSlicer(action, time, name);

		state.subscribe((value) => {
			if (persist) syncPersist(name, value);

			callsStore.update((prevState: Calls) => ({
				...prevState,
				called: prevState.nextCalled,
				nextCalled: null
			}));

			resolve({
				reset: store[name].state.reset,
				subscribe: mainStore.subscribe,
				destroy,
				dispatch,
				timedDispatch
			});
		});
	});
};

export const createSlicer: SlicerFactory = (
	interceptor: () => void | null,
	reducer: Reducer,
	name: string,
	state: Storex<Value>,
	persist: boolean | string = false
) => {
	if (!reducer || !state || !name) return;

	mainStore.update((prevState) => ({
		...prevState,
		[name]: {
			reducer,
			state,
			persist,
			_persistLoaded: !persist
		}
	}));

	setCurrent(name);
	resetInterceptors(name);
	interceptor ? interceptor() : null;

	if (persist) syncMainState(name);

	state.subscribe((value) => {
		if (persist) syncPersist(name, value);

		callsStore.update((prevState: Calls) => ({
			...prevState,
			called: prevState.nextCalled,
			nextCalled: null
		}));
	});

	const store = get(mainStore);

	const destroy = () => {
		store[name].state.reset();
		delete store[name];
		mainStore.set(store);
	};

	const dispatch = (action: GeneralAction): void => dispatchToSlicer(action, name);

	const timedDispatch = (action: GeneralAction, time: number): void =>
		timedDispatchToSlicer(action, time, name);

	return {
		reset: store[name].state.reset,
		subscribe: mainStore.subscribe,
		destroy,
		dispatch,
		timedDispatch
	};
};
