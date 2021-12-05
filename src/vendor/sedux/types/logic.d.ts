import type { Reducer } from './reducer';
import type { Storex } from './storex';

export interface Logic {
	// reducer: (nextCalled: Action, state: Record<string, unknown>) => Record<string, unknown>;
	// interceptor: (action: Action, api: InterceptorApi) => void;
	reducer: Reducer;
	state: Storex;
	persist: string | null | boolean;
	_persistLoaded?: boolean = false;
}

export type Store = Record<string, Logic>;
