import { start } from '$backend/index';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ request, resolve }) {
	// console.log(path);
	// if (path.includes("/api")) {
	console.log('init', start);
	await start();
	// }

	const { path } = request;
	const response = await resolve(request);

	return {
		...response,
		headers: {
			...response.headers,
			'x-custom-header': 'potato'
		}
	};
}

// export const prepare = async () => {
// 	await start();
// };
