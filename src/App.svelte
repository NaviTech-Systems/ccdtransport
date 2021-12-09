<script lang="ts">
	import { I18n } from '$vendor/i18n';
	import PageLoader from '$vendor/mase/Spinners/PageLoader.svelte';
	import Sedux from '$vendor/sedux/Sedux.svelte';
	import translations from './translations.json';
	import { navigating } from '$app/stores';
</script>

<Sedux>
	<I18n {translations}>
		{#if !$navigating}
			<slot />
		{:else}
			<PageLoader />
		{/if}
	</I18n>
</Sedux>

<style lang="scss">
	@import './app.scss';

	:global(body) {
		margin: 0;
		padding: 0;
		background: $background;
		height: 100%;
	}
</style>
