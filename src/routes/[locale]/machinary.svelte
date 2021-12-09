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
		url: `https://${$page.host}${$page.path}`,
		image: '',
		title: 'CDD Euro Services - ' + $t('machinary.title'),
		keywords: $t('machinary.keywords')
	}}
/>
<Machinary />
