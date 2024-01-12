import { notifyOffer } from '$backend/modules/mail';
import type { RequestHandler } from '@sveltejs/kit';

export const createOffer: RequestHandler = async (data) => {
	const { request } = data;
	const body = await request.json();

	notifyOffer(body);

	return {
		status: 200,
		body: body
	};
};
