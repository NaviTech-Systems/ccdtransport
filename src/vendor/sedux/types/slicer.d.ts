import type { Store } from './logic';

export interface Action {
	type: symbol;
}

export interface PureAction extends Action {
	name: string;
}

export interface ActionWithPayload<T> extends Action {
	payload: T;
}

export type ActionVoid = () => Action;

export type StaticAction = Action | ActionWithPayload<typeof GeneralAction['payload']> | PureAction;

//type for general action and action void
export type GeneralAction = A extends StaticAction ? A : ActionVoid;

export type SlicerFactory = (
	interceptor: () => void | null,
	reducer: Reducer,
	name: string,
	state: Storex<T>,
	persist: boolean | string = false
) => Slicer;

export type SlicerFactoryAsync = (
	interceptor: () => void | null,
	reducer: Reducer,
	name: string,
	state: Storex<T>,
	persist: boolean | string = false
) => Promise<Slicer>;

export interface Slicer {
	reset: void;
	subscribe: Storex<Store>['subscribe'];
	destroy: () => void;
	dispatch: (action: ActionVoid | Action) => void;
	timedDispatch: (action: ActionVoid | Action, time: number) => void;
}
