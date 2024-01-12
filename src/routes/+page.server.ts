import { ServerLoad, redirect } from '@sveltejs/kit';

export const load: ServerLoad = ({ request }) => {
	//get browser language en-GB,en-US;q=0.9,en;q=0.8,ro;q=0.7
	const lang = request.headers['accept-language'].split(',')[0].split('-')[0];
	//redirect to the language page

	throw redirect(307, lang === 'ro' ? '/ro' : '/en');
};
