<script lang="ts">
	import { page } from '$app/stores';

	import Contact from '$components/Contact/index.svelte';
	import SEO from '$vendor/mase/SEO';
</script>

<SEO
	data={{
		name: 'CDD Euro Services - Contact',
		description: 'lorem ipsum',
		url: `https://${$page.host}${$page.path}`,
		image: '',
		title: 'CDD Euro Services - Contact'
	}}
/>
<Contact />
