import type { Translations } from './translantions';

export interface LoadLanguages {
	locales: Translations;
	locale: null | string = null;
}

export interface ChangeLanguage {
	locale: string;
}
