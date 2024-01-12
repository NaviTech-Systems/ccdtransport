import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async (data) => {
	const { headers, locals, host } = data;

	//return json response
	return {
		status: 200,
		headers,
		body: {
			message: 'Hello World!',
			locals,
			host,
			headers
		}
	};
};
