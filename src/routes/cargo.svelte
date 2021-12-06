<script>
	import Cargo from '$components/Cargo/index.svelte';
	import { t } from '$vendor/i18n/state';
	import SEO from '$vendor/mase/SEO';
</script>

<SEO
	data={{
		name: 'CDD Euro Services - ' + $t('cargo.title'),
		description: `${$t('cargo.description')}`.substr(0, 150) + '...',
		url: 'https://ccdeuroservices.ro/cargo',
		image: '',
		title: 'CDD Euro Services - ' + $t('cargo.title')
	}}
/>
<Cargo />
