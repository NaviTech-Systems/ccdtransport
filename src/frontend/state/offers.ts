import { select, storex } from '$vendor/sedux';
import type { State } from '$frontend/types/offers';

export const initialState = {
	offer: {
		state: 'idle',
		error: ''
	}
} as State;

export const offersStore = storex(initialState);
export const selectOffer = select(offersStore, (state) => state.offer);
