export interface LoadLanguages {
	locales: string[];
	locale: null | string = null;
}

export interface ChangeLanguage {
	locale: string;
}
