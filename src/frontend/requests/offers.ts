import type { Create, Offer } from '$backend/models/offer';
import { request } from '$utils/request';
import BaseRequest from './base';

export class OffersRequest extends BaseRequest {
	static getOffers = async (): Promise<Offer[]> => {
		const res = await request.get(`/api/offers/`);

		return await OffersRequest.parseResponse<Offer[]>(res);
	};

	static getOffer = async (id: string): Promise<Offer> => {
		const res = await request.get(`/api/offers/${id}`);

		return await OffersRequest.parseResponse<Offer>(res);
	};

	static sendOffer = async (data: Create): Promise<Offer> => {
		const res = await request.put(`/api/offers/`, data);

		return await OffersRequest.parseResponse<Offer>(res);
	};
}
