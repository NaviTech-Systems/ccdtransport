import type { Create } from '$backend/models/offer';
import { SEND_OFFER, SEND_OFFER_FAILED, SENT_OFFER } from '$constants/offers';
import type { Error, SendOffer, SendOfferFailed, SentOffer } from '$frontend/types/offers/actions';
import type { ActionWithPayload } from '$vendor/sedux/types/slicer';

export const sendOffer = (data: Create): ActionWithPayload<SendOffer> => ({
	type: SEND_OFFER,
	payload: { data }
});

export const sentOffer = (): ActionWithPayload<SentOffer> => ({
	type: SENT_OFFER,
	payload: {}
});

export const sendOfferFailed = (error: Error): ActionWithPayload<SendOfferFailed> => ({
	type: SEND_OFFER_FAILED,
	payload: { error }
});
