import type { Contact } from '$backend/models/contact';
import type { Offer } from '$backend/models/offer';

import {
	GET_CONTACT_MESSAGES,
	GOT_CONTACT_MESSAGES,
	GET_CONTACT_MESSAGES_FAILED,
	GET_CONTACT_MESSAGE,
	GOT_CONTACT_MESSAGE,
	GET_CONTACT_MESSAGE_FAILED,
	GET_OFFER_MESSAGES,
	GOT_OFFER_MESSAGES,
	GET_OFFER_MESSAGES_FAILED,
	GET_OFFER_MESSAGE,
	GOT_OFFER_MESSAGE,
	GET_OFFER_MESSAGE_FAILED
} from '$constants/admin';
import type {
	Error,
	GetContactMessages,
	GotContactMessages,
	GetContactMessagesFailed,
	GetContactMessage,
	GotContactMessage,
	GetContactMessageFailed,
	GotOffers,
	GetOffersFailed,
	GetOffer,
	GotOffer,
	GetOfferFailed
} from '$frontend/types/admin/actions';
import type { Action, ActionWithPayload } from '$vendor/sedux/types/slicer';

export const getOffers = (): Action => ({
	type: GET_OFFER_MESSAGES
});

export const gotOffers = (results: Offer[]): ActionWithPayload<GotOffers> => ({
	type: GOT_OFFER_MESSAGES,
	payload: {
		results
	}
});

export const getOffersFailed = (error: Error): ActionWithPayload<GetOffersFailed> => ({
	type: GET_OFFER_MESSAGES_FAILED,
	payload: { error }
});

export const getOffer = (id: string): ActionWithPayload<GetOffer> => ({
	type: GET_OFFER_MESSAGE,
	payload: {
		id
	}
});

export const gotOffer = (result: Offer): ActionWithPayload<GotOffer> => ({
	type: GOT_OFFER_MESSAGE,
	payload: {
		result
	}
});

export const getOfferFailed = (error: Error): ActionWithPayload<GetOfferFailed> => ({
	type: GET_OFFER_MESSAGE_FAILED,
	payload: { error }
});

export const getContactMessages = (): ActionWithPayload<GetContactMessages> => ({
	type: GET_CONTACT_MESSAGES,
	payload: {}
});

export const gotContactMessages = (results: Contact[]): ActionWithPayload<GotContactMessages> => ({
	type: GOT_CONTACT_MESSAGES,
	payload: {
		results
	}
});

export const getContactMessagesFailed = (
	error: Error
): ActionWithPayload<GetContactMessagesFailed> => ({
	type: GET_CONTACT_MESSAGES_FAILED,
	payload: {
		error
	}
});

export const getContactMessage = (id: string): ActionWithPayload<GetContactMessage> => ({
	type: GET_CONTACT_MESSAGE,
	payload: {
		id
	}
});

export const gotContactMessage = (result: Contact): ActionWithPayload<GotContactMessage> => ({
	type: GOT_CONTACT_MESSAGE,
	payload: {
		result
	}
});

export const getContactMessageFailed = (
	error: Error
): ActionWithPayload<GetContactMessageFailed> => ({
	type: GET_CONTACT_MESSAGE_FAILED,
	payload: {
		error
	}
});
