<script lang="ts">
	import { I18n } from '$vendor/i18n';
	import Sedux from '$vendor/sedux/Sedux.svelte';
	import translations from './translations.json';
</script>

<Sedux>
	<I18n {translations}>
		<slot />
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
