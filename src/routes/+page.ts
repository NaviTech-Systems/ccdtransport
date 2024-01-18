import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
export const load: PageLoad = ({ request }) => {
	//get browser language en-GB,en-US;q=0.9,en;q=0.8,ro;q=0.7

	throw redirect(307, '/en');
};
