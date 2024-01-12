<script lang="ts">
	import { page } from '$app/stores';

	import Offer from '$components/Offer/index.svelte';
	import SEO from '$vendor/mase/SEO';
</script>

<SEO
	data={{
		name: 'CDD Euro Services - Offer',
		description: 'lorem ipsum',
		url: `https://${$page.url.host}${$page.url.pathname}`,
		image: '',
		title: 'CDD Euro Services - Offer'
	}}
/>
<Offer />
