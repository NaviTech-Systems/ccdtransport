<script>
	import Form from './Form.svelte';
	import Header from './Header.svelte';
</script>

<div class="main">
	<Header />
	<Form />
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	.main {
		width: $width-small;
		margin: 0 auto 2rem auto;

		@media screen and (max-width: $breakpoint-phone) {
			padding: 0 1rem;
			width: calc(100% - 2rem);
		}
	}
</style>
