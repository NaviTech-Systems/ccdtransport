import { createOffer, getOffers } from '$backend/controllers/offers';

export const get = getOffers;
export const put = createOffer;
