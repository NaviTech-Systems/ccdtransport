<script lang="ts">
	import { page } from '$app/stores';

	import Offer from '$components/Offer/index.svelte';
	import SEO from '$vendor/mase/SEO';
</script>

<SEO
	data={{
		name: 'CDD Euro Services - Offer',
		description: 'lorem ipsum',
		url: `https://${$page.host}${$page.path}`,
		image: '',
		title: 'CDD Euro Services - Offer'
	}}
/>
<Offer />
