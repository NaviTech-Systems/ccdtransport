<script lang="ts">
	import { createSlicer } from "../sedux";
	import { onMount } from "svelte";
	import { get } from "svelte/store";
	import { i18nReducer } from "./reducer";
	import { languages } from "./state";
	import { loadLanguages } from "./actions";
	import { CHANGE_LANGUAGE } from "./constants";
	import { addListener } from "../sedux/listener";
	import type { Translations } from "./types/translantions";
	import type { Languages } from "./types/state";
	import type { ChangeLanguage } from "./types/actions";
	import type { ActionWithPayload } from "$vendor/sedux/types/slicer";

	export let translations: Translations, url: string;

	let loaded = false,
		completeLoad = false;

	const handleChangeLocale = ({
		payload: { locale },
	}: ActionWithPayload<ChangeLanguage>): void => {
		const rootElement = document.documentElement;
		rootElement.setAttribute("lang", locale);
	};

	const slicer = createSlicer(null, i18nReducer, "i18n", languages);

	slicer.dispatch(() =>
		loadLanguages(
			Object.entries(translations).map(([key]) => key),
			"en"
		)
	);

	onMount(() => {
		if (typeof window !== "undefined") {
			const locale =
				(navigator.languages && navigator.languages[0]) || // Chrome / Firefox
				navigator.language;

			const rootElement = document.documentElement;
			rootElement.setAttribute(`lang`, `${locale.slice(0, 2)}`);

			slicer.subscribe(({ i18n }) => {
				const state = get<Languages>(i18n.state);

				loaded = i18n._persistLoaded;

				if (typeof state !== "undefined" && state.locale) {
					rootElement.setAttribute(`lang`, `${state.locale}`);
				}
			});

			languages.subscribe((value) => {
				completeLoad = loaded && value.locales !== null;
			});

			slicer.dispatch(() =>
				loadLanguages(
					Object.entries(translations).map(([key]) => key),
					locale.slice(0, 2)
				)
			);

			addListener(CHANGE_LANGUAGE, handleChangeLocale);
		}
	});
</script>

<svelte:head>
	{#if completeLoad}
		{#each Object.keys($languages.locales) as lang}
			<link rel="alternate" href={url} hreflang={lang} />
		{/each}
	{/if}
</svelte:head>

<!-- {#if completeLoad === true} -->
<slot />
<!-- {/if} -->
