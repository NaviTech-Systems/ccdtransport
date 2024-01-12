<script context="module">
	export const load = ({ page: { params } }) => {
		if (!['en', 'ro'].includes(params.locale)) {
			return {
				status: 404,
				message: 'Page not found'
			};
		}

		return {};
	};
</script>

<script>
	import App from '$src/App.svelte';
	import Navbar from '$components/Navbar/index.svelte';
	import Footer from '$components/Footer/index.svelte';
</script>

<App>
	<Navbar />
	<slot />
	<Footer />
</App>

<style lang="scss">
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
