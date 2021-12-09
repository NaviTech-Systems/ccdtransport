<script>
	import App from '$src/App.svelte';
	import Navbar from '$components/Navbar/index.svelte';
	import Footer from '$components/Footer/index.svelte';
	import { navigating, session } from '$app/stores';
</script>

<App>
	<Navbar />
	{#key $navigating}
		<slot />
	{/key}
	<Footer />
</App>

<style lang="scss">
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
