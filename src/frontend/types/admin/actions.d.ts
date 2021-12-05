import type { Contact } from '$backend/models/contact';
import type { Offer } from '$backend/models/offer';

export interface GetOffers {}

export interface GotOffers {
	results: Offer[];
}

export interface GetOffersFailed {
	error: Error;
}

export interface GetOffer {
	id: string;
}

export interface GotOffer {
	result: Offer;
}

export interface GetOfferFailed {
	error: Error;
}

export interface GetContactMessages {}

export interface GotContactMessages {
	results: Contact[];
}

export interface GetContactMessagesFailed {
	error: Error;
}

export interface GetContactMessage {
	id: string;
}

export interface GotContactMessage {
	result: Contact;
}

export interface GetContactMessageFailed {
	error: Error;
}

export interface Error {
	status: number;
	message: string;
}
