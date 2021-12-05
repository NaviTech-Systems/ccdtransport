import { storex, select } from '$vendor/sedux';
import type { State } from '$frontend/types/contact';

export const initialState = {
	contact: {
		error: '',
		state: 'idle'
	}
} as State;

export const contactStore = storex(initialState);

export const selectContactState = select(contactStore, (state) => state.contact);
