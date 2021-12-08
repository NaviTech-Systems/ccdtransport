import { derived } from 'svelte/store';
import { languages } from './state';

const createUrlFormatter = (languages) => (url: string) => {
	if (url === '/') {
		return `/${languages.locale}`;
	}
	return `/${languages.locale}${url}`;
};

export const formatUrl = (url: string, locale = null): string => {
	if (url === '/') {
		return `/${locale}`;
	}
	return `/${locale}${url}`;
};

export const composeUrl = derived([languages], ([$languages]) => {
	console.log($languages);

	return createUrlFormatter($languages);
});
