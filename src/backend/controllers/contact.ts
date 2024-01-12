import { notifyContact } from '$backend/modules/mail';
import type { RequestHandler } from '@sveltejs/kit';

export const createContact: RequestHandler = async (data) => {
	const { request } = data;
	const { name, email, message } = await request.json();

	notifyContact({
		name,
		email,
		message
	});

	return {
		status: 200,
		body: { name, email, message }
	};
};
