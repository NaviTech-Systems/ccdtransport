<script>
	import Houses from '$components/Houses/index.svelte';
	import { t } from '$vendor/i18n/state';
	import SEO from '$vendor/mase/SEO';
</script>

<SEO
	data={{
		name: 'CDD Euro Services - ' + $t('houses.title'),
		description: `${$t('houses.description')}`.substr(0, 150) + '...',
		url: 'https://ccdeuroservices.ro/houses',
		image: '',
		title: 'CDD Euro Services  - ' + $t('houses.title'),
		keywords: $t('houses.keywords')
	}}
/>
<Houses />
