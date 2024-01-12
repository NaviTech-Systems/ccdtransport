<script>
	import { page } from '$app/stores';

	import Houses from '$components/Houses/index.svelte';
	import { t } from '$vendor/i18n/state';
	import SEO from '$vendor/mase/SEO';
</script>

<SEO
	data={{
		name: 'CDD Euro Services - ' + $t('houses.title'),
		description: `${$t('houses.description')}`.substr(0, 150) + '...',
		url: `https://${$page.host}${$page.path}`,
		image: `https://${$page.host}/links/houses.png`,
		title: 'CDD Euro Services  - ' + $t('houses.title'),
		keywords: $t('houses.keywords')
	}}
/>
<Houses />
