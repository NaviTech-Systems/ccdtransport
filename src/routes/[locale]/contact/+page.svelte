<script lang="ts">
	import { page } from '$app/stores';

	import Contact from '$components/Contact/index.svelte';
	import SEO from '$vendor/mase/SEO';
</script>

<SEO
	data={{
		name: 'CDD Euro Services - Contact',
		description: 'lorem ipsum',
		url: `https://${$page.url.host}${$page.url.pathname}`,
		image: '',
		title: 'CDD Euro Services - Contact'
	}}
/>
<Contact />
