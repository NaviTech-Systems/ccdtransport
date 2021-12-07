import type { Reducer } from '$vendor/sedux/types/reducer';
import { LOAD_LANGUAGES, CHANGE_LANGUAGE } from './constants';
import type { Languages } from './types/state';

export const i18nReducer: Reducer<Languages> = (action, state) => {
	const draft = state;
	switch (action.type) {
		case LOAD_LANGUAGES:
			draft.locales = action.payload.locales;
			if (action.payload.locale) {
				state.default = action.payload.locale;
				state.locale = action.payload.locale;
			}
			break;
		case CHANGE_LANGUAGE:
			draft.locale = action.payload.locale;
			break;
	}
	return state;
};
