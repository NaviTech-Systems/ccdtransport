import { getCookie, setCookie } from './cookie';

export const initAnalytics = (): void => {
	if (getCookie('session') !== '') return;
	const now = new Date();
	const id = btoa(now.toISOString());
	setCookie('session', id, 99999);
};
