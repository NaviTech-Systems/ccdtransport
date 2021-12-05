import { derived } from 'svelte/store';
import { storex } from '../sedux';
import type { Languages } from './types/state';

const initialState = {
	locale: null,
	locales: null,
	default: 'en'
} as Languages;

export const languages = storex(initialState);

const localizedDict = derived([languages], ([$languages]) => {
	if (!$languages.locales) return;
	return $languages.locales[$languages.locale || $languages.default];
});

const getMessageFromLocalizedDict = (id: string, localized: typeof localizedDict) => {
	const splitId = id.split('.');
	let message = { ...localized };
	splitId.forEach((partialId: string) => {
		message = message[partialId];
	});
	return message;
};

const createMessageFormatter = (localized: typeof localizedDict) => (id: string) =>
	getMessageFromLocalizedDict(id, localized);

export const t = derived(localizedDict, ($localizedDict) => {
	return createMessageFormatter($localizedDict);
});
