import type { Action, ActionWithPayload, GeneralAction, PureAction } from './slicer';

export type Reducer<S = any, A extends AnyAction = ActionWithPayload<any>> = (
	action: A,
	state: S | undefined
) => S;
