<script>
	import { page } from '$app/stores';

	import Home from '$components/Home/index.svelte';
	import { t } from '$vendor/i18n/state';
	import SEO from '$vendor/mase/SEO/SEO.svelte';
</script>

<SEO
	data={{
		name: `CDD Euro Services - ${$t('homepage.subtitle')}`,
		description: `${$t('aboutus.description')}`.substr(0, 150) + '...',
		url: `https://${$page.host}${$page.path}`,
		image: '',
		title: `CDD Euro Services - ${$t('homepage.subtitle')}`,
		keywords: $t('homepage.keywords')
	}}
/>

<Home />

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	.main {
		height: 100%;
	}

	@keyframes animateZ {
		from {
			transform: translateZ(0px);
		}
		to {
			transform: translateZ(1px);
		}
	}
</style>
