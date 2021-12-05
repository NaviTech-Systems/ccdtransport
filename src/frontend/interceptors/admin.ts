import {
	getContactMessageFailed,
	getContactMessagesFailed,
	getOfferFailed,
	getOffersFailed,
	gotContactMessage,
	gotContactMessages,
	gotOffer,
	gotOffers
} from '$actions/admin';
import {
	GET_CONTACT_MESSAGE,
	GET_CONTACT_MESSAGES,
	GET_OFFER_MESSAGE,
	GET_OFFER_MESSAGES
} from '$constants/admin';
import { OffersRequest } from '$frontend/requests/offers';
import { ContactRequest } from '$frontend/requests/contact';
import { addInterceptor, createSmartInterceptor } from '$vendor/sedux/interceptor';

export const getOffers = createSmartInterceptor(async () => {
	return await OffersRequest.getOffers();
});

getOffers.fulfilled = (results, { dispatch }) => {
	return dispatch(() => gotOffers(results));
};

getOffers.rejected = (error, { dispatch }) => {
	return dispatch(() => getOffersFailed({ status: 500, message: error.message }));
};

export const getOffer = createSmartInterceptor(async ({ id }) => {
	return await OffersRequest.getOffer(id);
});

getOffer.fulfilled = (result, { dispatch }) => {
	return dispatch(() => gotOffer(result));
};

getOffer.rejected = (error, { dispatch }) => {
	return dispatch(() => getOfferFailed({ status: 500, message: error.message }));
};

export const getContactMessages = createSmartInterceptor(async () => {
	return await ContactRequest.getContacts();
});

getContactMessages.fulfilled = (results, { dispatch }) => {
	return dispatch(() => gotContactMessages(results));
};

getContactMessages.rejected = (error, { dispatch }) => {
	return dispatch(() => getContactMessagesFailed(error));
};

export const getContactMessage = createSmartInterceptor(async ({ id }) => {
	return await ContactRequest.getContact(id);
});

getContactMessage.fulfilled = (result, { dispatch }) => {
	return dispatch(() => gotContactMessage(result));
};

getContactMessage.rejected = (error, { dispatch }) => {
	return dispatch(() => getContactMessageFailed({ status: 500, message: error.message }));
};

export function adminInterceptor(): void {
	addInterceptor(GET_CONTACT_MESSAGES, getContactMessages);
	addInterceptor(GET_CONTACT_MESSAGE, getContactMessage);
	addInterceptor(GET_OFFER_MESSAGES, getOffers);
	addInterceptor(GET_OFFER_MESSAGE, getOffer);
}
