<script>
	export let selected;
</script>

<div on:click class="item" class:selected><slot /></div>

<style lang="scss">
	@import '../globals.scss';
	.item {
		color: $font-color;
		margin: 0;
		margin-right: 0.5rem;
		padding: 0.4rem 0.8rem;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
		transition: all 0.3s linear;
		border-bottom: 2px solid $primary-color;
		margin-bottom: -2px;
		font-weight: 500;
		//border: 1px solid lighten($color: $background-darker, $amount: 15);
		cursor: pointer;

		&:hover {
			background: lighten($color: $background, $amount: 10);
		}

		&:active {
			background: $background;
		}

		&.selected {
			z-index: 2;
			color: $primary-color;
		}
	}
</style>
