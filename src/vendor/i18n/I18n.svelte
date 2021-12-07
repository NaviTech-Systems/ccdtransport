<script lang="ts">
	import { createSlicer } from '../sedux';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { i18nReducer } from './reducer';
	import { languages } from './state';
	import { loadLanguages } from './actions';
	import { CHANGE_LANGUAGE } from './constants';
	import { addListener } from '../sedux/listener';
	import type { Translations } from './types/translantions';
	import type { Languages } from './types/state';
	import type { ChangeLanguage } from './types/actions';
	import type { ActionWithPayload } from '$vendor/sedux/types/slicer';
	import { page, session } from '$app/stores';
	import { composeUrl } from './utils';

	export let translations: Translations, url: string;

	const handleChangeLocale = ({ payload: { locale } }: ActionWithPayload<ChangeLanguage>): void => {
		const rootElement = document.documentElement;
		rootElement.setAttribute('lang', locale);
		const regex = new RegExp(`^/${$languages.prevLocale}`);
		const path = window.location.pathname;
		const match = path.match(regex);
		let newPath = path;

		if ((typeof match !== 'undefined' && match !== null) || path === '/') {
			if (path.split('/').length === 2) newPath = path.replace(regex, `/${locale}`);
			else newPath = path.replace(regex, `${locale}`);

			if (path === '/') newPath = `/${locale}`;

			window.history.pushState({ page: '' }, '', newPath);
		}
	};

	const slicer = createSlicer(null, i18nReducer, 'i18n', languages);

	slicer.dispatch(() => loadLanguages(translations, $session.lang || 'en'));

	onMount(() => {
		if (typeof window !== 'undefined') {
			const locale =
				(navigator.languages && navigator.languages[0]) || // Chrome / Firefox
				navigator.language;

			const rootElement = document.documentElement;

			slicer.subscribe(({ i18n }) => {
				const state = get<Languages>(i18n.state);

				if (typeof state !== 'undefined' && state.locale) {
					rootElement.setAttribute(`lang`, `${state.locale}`);
				}
			});

			languages.subscribe((value) => {
				if (value.locale) localStorage.setItem('i18n', value.locale);
			});

			if (localStorage.getItem('i18n') || $session.lang) {
				let lang = localStorage.getItem('i18n') || $session.lang;
				slicer.dispatch(() => loadLanguages(translations, lang));
				rootElement.setAttribute(`lang`, `${lang}`);
			} else {
				rootElement.setAttribute(`lang`, `${locale.slice(0, 2)}`);
				slicer.dispatch(() => loadLanguages(translations, locale.slice(0, 2)));
			}

			addListener(CHANGE_LANGUAGE, handleChangeLocale);
		}
	});
</script>

<svelte:head>
	{#if Object.keys(translations).length > 0}
		{#each Object.keys(translations) as lang}
			<link rel="alternate" href={`${url}${$composeUrl($page.path)}`} hreflang={lang} />
		{/each}
	{/if}
</svelte:head>

<!-- {#if completeLoad === true} -->
<slot />
<!-- {/if} -->
