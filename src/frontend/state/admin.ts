import { select, storex } from '$vendor/sedux';
import type { State } from '$frontend/types/admin';
import type { Contact } from '$backend/models/contact';
import type { Offer } from '$backend/models/offer';

export const initialState = {
	offers: {
		message: {
			result: {} as Offer,
			state: 'idle',
			error: ''
		},
		messages: {
			results: [],
			state: 'idle',
			error: ''
		}
	},
	contact: {
		messages: {
			results: [],
			state: 'idle',
			error: ''
		},
		message: {
			state: 'idle',
			error: '',
			result: {} as Contact
		}
	}
} as State;

export const adminStore = storex(initialState);
export const selectOfferMessage = select(adminStore, (value) => value.offers.message);
export const selectOfferMessages = select(adminStore, (value) => value.offers.messages);
export const selectContactMessages = select(adminStore, (value) => value.contact.messages);
export const selectContactMessage = select(adminStore, (value) => value.contact.message);
