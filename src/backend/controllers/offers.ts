import { db } from '$backend/index';
import type { Offer, Create } from '$backend/models/offer';
import { notifyOffer } from '$backend/modules/mail';
import type { RequestHandler } from '$backend/types/request';

export const getOffers: RequestHandler = async () => {
	const results: Offer[] = await db.offer.findMany();

	return {
		status: 200,
		body: results
	};
};

export const getOffer: RequestHandler = async (data) => {
	const {
		params: { id }
	} = data;
	const result: Offer = await db.offer.findMany({ where: { id } }).then((_) => _[0]);

	return {
		status: 200,
		body: result
	};
};

export const createOffer: RequestHandler<Create> = async (data) => {
	const { body } = data;

	const result: Offer = await db.offer.create({
		data: body
	});

	const offer: Offer = await db.offer
		.findMany({
			where: {
				id: result.id
			}
		})
		.then((_) => _[0]);

	notifyOffer(offer);

	return {
		status: 200,
		body: offer
	};
};
