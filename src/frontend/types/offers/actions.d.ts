import type { Create } from '$backend/models/offer';

export interface SendOffer {
	data: Create;
}

export interface SentOffer {}

export interface SendOfferFailed {
	error: Error;
}

export interface Error {
	status: number;
	message: string;
}
