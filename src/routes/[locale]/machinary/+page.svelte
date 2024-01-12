<script>
	import { page } from '$app/stores';

	import Machinary from '$components/Machinary/index.svelte';
	import { t } from '$vendor/i18n/state';
	import SEO from '$vendor/mase/SEO';
</script>

<SEO
	data={{
		name: 'CDD Euro Services - ' + $t('machinary.title'),
		description: `${$t('machinary.description')}`.substr(0, 150) + '...',
		url: `https://${$page.url.host}${$page.url.pathname}`,
		image: `https://${$page.url.host}/links/machinary.png`,
		title: 'CDD Euro Services - ' + $t('machinary.title'),
		keywords: $t('machinary.keywords')
	}}
/>
<Machinary />
