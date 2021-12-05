import type { ActionWithPayload } from '$vendor/sedux/types/slicer';
import { LOAD_LANGUAGES, CHANGE_LANGUAGE } from './constants';
import type { ChangeLanguage, LoadLanguages } from './types/actions';

export const loadLanguages = (
	locales: string[],
	locale = null
): ActionWithPayload<LoadLanguages> => {
	return {
		type: LOAD_LANGUAGES,
		payload: {
			locale,
			locales
		}
	};
};

export const changeLanguage = (locale: string): ActionWithPayload<ChangeLanguage> => {
	return {
		type: CHANGE_LANGUAGE,
		payload: {
			locale
		}
	};
};
