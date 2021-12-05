import { SEND_OFFER } from '$constants/offers';
import { sentOffer, sendOfferFailed } from '$actions/offers';
import { addInterceptor, createSmartInterceptor } from '$vendor/sedux/interceptor';
import { OffersRequest } from '$frontend/requests/offers';

export const sendOffer = createSmartInterceptor(async ({ data }) => {
	return await OffersRequest.sendOffer(data);
});

sendOffer.fulfilled = (_, { dispatch }) => {
	return dispatch(() => sentOffer());
};

sendOffer.rejected = (error, { dispatch }) => {
	return dispatch(() => sendOfferFailed({ status: 500, message: error.message }));
};

export function offersInterceptor(): void {
	addInterceptor(SEND_OFFER, sendOffer);
}
