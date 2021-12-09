import { start } from '$backend/index';

const i18n = {
	locales: ['en', 'ro'],
	defaultLocale: 'en'
};

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ request, resolve }): Promise<() => any> => {
	await start();

	let lang = i18n.defaultLocale;
	const path = request.path;

	i18n.locales.forEach((locale) => {
		const regex = new RegExp(`^/${locale}`);
		const match = path.match(regex);

		if (typeof match !== 'undefined' && match !== null) {
			lang = locale;
		}
	});
	request.locals.lang = lang;

	const response = await resolve(request);
	return response;
};

export const getSession = (request) => {
	return {
		lang: request.locals.lang || i18n.defaultLocale,
		path: request.path
	};
};
