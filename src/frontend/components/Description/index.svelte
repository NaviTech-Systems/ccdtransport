<script lang="ts">
	export let title: any = '',
		description: any = '';
</script>

<div class="description">
	<h1>{title}</h1>
	{@html description}
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';
	.description {
		max-width: 1000px;
		margin: 1rem auto;
		padding: 1rem;
		background: $background-darker;
		border-radius: 9px;
		border: 2px solid $border-color;
		color: $font-color;

		@media screen and (max-width: 1000px) {
			max-width: 100%;
			margin: 0 1rem;
		}

		h1 {
			text-align: center;
			color: $font-color-full;
			margin: 0;
			margin-bottom: 1rem;
			font-size: 1.2rem;
		}
	}
</style>
