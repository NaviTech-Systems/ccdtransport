import { storex, select } from '$vendor/sedux';
import type { State } from '$frontend/types/app';

export const initialState = {
	app: { results: [], state: 'idle', error: '' }
} as State;

export const appStore = storex(initialState);

export const selectAppState = select(appStore, (state) => state.app);
