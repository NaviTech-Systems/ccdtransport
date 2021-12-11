<script>
	import { page } from '$app/stores';

	import Cargo from '$components/Cargo/index.svelte';
	import { t } from '$vendor/i18n/state';
	import SEO from '$vendor/mase/SEO';
</script>

<SEO
	data={{
		name: 'CDD Euro Services - ' + $t('cargo.title'),
		description: `${$t('cargo.description')}`.substr(0, 150) + '...',
		url: `https://${$page.host}${$page.path}`,
		image: `https://${$page.host}/links/cargo.png`,
		title: 'CDD Euro Services - ' + $t('cargo.title'),
		keywords: $t('cargo.keywords')
	}}
/>
<Cargo />
