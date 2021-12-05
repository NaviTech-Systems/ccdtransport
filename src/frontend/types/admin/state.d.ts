import type { Contact } from '$backend/models/contact';
import type { Offer } from '$backend/models/offer';

interface TemplateState {
	state: 'idle' | 'loading' | 'failed' | 'completed';
	error: '';
}

export interface OfferMessages extends TemplateState {
	results: Offer[];
}

export interface OfferMessage extends TemplateState {
	result: Offer;
}

export interface ContactMessages extends TemplateState {
	results: Contact[];
}

export interface ContactMessage extends TemplateState {
	result: Contact;
}

export interface OffersState {
	message: OfferMessage;
	messages: OfferMessages;
}

export interface ContactState {
	messages: ContactMessages;
	message: ContactMessage;
}

export interface State {
	offers: OffersState;
	contact: ContactState;
}
