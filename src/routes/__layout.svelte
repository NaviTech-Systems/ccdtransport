<script>
	import App from '$src/App.svelte';
	import Navbar from '$components/Navbar/index.svelte';
	import Footer from '$components/Footer/index.svelte';
	import { page } from '$app/stores';
</script>

<App>
	{#if !$page.path.includes('/admin')}
		<Navbar />
		<slot />
		<Footer />
	{:else}
		<slot />
	{/if}
</App>

<style lang="scss">
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
