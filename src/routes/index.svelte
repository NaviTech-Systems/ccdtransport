<script>
	import Home from '$components/Home/index.svelte';
	import SEO from '$vendor/mase/SEO/SEO.svelte';
</script>

<SEO
	data={{
		name: 'NaviTech Systems',
		description: 'lorem ipsum',
		url: 'https://navitech.systems',
		image: '',
		title: 'NaviTech Systems'
	}}
/>

<Home />

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	.main {
		height: 100%;
	}

	@keyframes animateZ {
		from {
			transform: translateZ(0px);
		}
		to {
			transform: translateZ(1px);
		}
	}
</style>
