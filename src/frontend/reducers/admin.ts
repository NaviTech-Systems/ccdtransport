import type { Contact } from '$backend/models/contact';
import type { Offer } from '$backend/models/offer';
import {
	GET_CONTACT_MESSAGES,
	GOT_CONTACT_MESSAGES,
	GET_CONTACT_MESSAGES_FAILED,
	GET_CONTACT_MESSAGE,
	GET_CONTACT_MESSAGE_FAILED,
	GOT_CONTACT_MESSAGE,
	GET_OFFER_MESSAGES,
	GOT_OFFER_MESSAGES,
	GET_OFFER_MESSAGES_FAILED,
	GET_OFFER_MESSAGE,
	GOT_OFFER_MESSAGE,
	GET_OFFER_MESSAGE_FAILED
} from '$constants/admin';
import type { State } from '$frontend/types/admin';
import type { Reducer } from '$vendor/sedux/types/reducer';

export const adminReducer: Reducer<State> = (action, state): State => {
	const draft = state;
	switch (action.type) {
		case GET_OFFER_MESSAGES:
			draft.offers.messages.state = 'loading';
			draft.offers.messages.error = null;
			draft.offers.messages.results = [];
			break;
		case GOT_OFFER_MESSAGES:
			draft.offers.messages.state = 'completed';
			draft.offers.messages.results = action.payload.results;
			break;
		case GET_OFFER_MESSAGES_FAILED:
			draft.offers.messages.state = 'failed';
			draft.offers.messages.error = action.payload.error;
			break;
		case GET_OFFER_MESSAGE:
			draft.offers.message.state = 'loading';
			draft.offers.message.error = null;
			draft.offers.message.result = {} as Offer;
			break;
		case GOT_OFFER_MESSAGE:
			draft.offers.message.state = 'completed';
			draft.offers.message.result = action.payload.result;
			break;
		case GET_OFFER_MESSAGE_FAILED:
			draft.offers.message.state = 'failed';
			draft.offers.message.error = action.payload.error;
			break;
		case GET_CONTACT_MESSAGES:
			draft.contact.messages.state = 'loading';
			draft.contact.messages.results = [];
			draft.contact.messages.error = '';
			break;
		case GOT_CONTACT_MESSAGES:
			draft.contact.messages.state = 'completed';
			draft.contact.messages.results = action.payload.results;
			break;
		case GET_CONTACT_MESSAGES_FAILED:
			draft.contact.messages.state = 'failed';
			draft.contact.messages.error = action.payload.error;
			break;
		case GET_CONTACT_MESSAGE:
			draft.contact.message.state = 'loading';
			draft.contact.message.error = '';
			draft.contact.message.result = {} as Contact;
			break;
		case GOT_CONTACT_MESSAGE:
			draft.contact.message.state = 'completed';
			draft.contact.message.result = action.payload.result;
			break;
		case GET_CONTACT_MESSAGE_FAILED:
			draft.contact.message.state = 'failed';
			draft.contact.message.error = action.payload.error;
			break;
		default:
			break;
	}
	return draft;
};
