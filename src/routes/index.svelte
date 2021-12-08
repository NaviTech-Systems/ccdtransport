<script>
	import Home from '$components/Home/index.svelte';
	import { t } from '$vendor/i18n/state';
	import SEO from '$vendor/mase/SEO/SEO.svelte';
</script>

<SEO
	data={{
		name: 'CDD Euro Services',
		description: `${$t('aboutus.description')}`.substr(0, 150) + '...',
		url: 'https://ccdeuroservices.ro/',
		image: '',
		title: 'CDD Euro Services',
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
