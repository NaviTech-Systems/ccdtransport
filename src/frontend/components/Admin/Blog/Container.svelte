<script lang="ts">
	export let loading = false,
		error = false;
</script>

<div class="container" class:loading class:error>
	<div class="inner">
		<slot />
	</div>
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	.container {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 1fr repeat(1, minmax(200px, 100%)) 1fr;

		@media screen and (max-width: $width-small) {
			margin: 2rem auto;
			width: calc(100% - 2rem);
			gap: 0;
		}

		.inner {
			grid-column: 2;
			display: grid;
			gap: 1rem 1rem;
			grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		}

		&.error,
		&.loading {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
