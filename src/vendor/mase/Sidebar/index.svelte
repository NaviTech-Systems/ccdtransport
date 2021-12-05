<script lang="ts">
	export let title: string,
		opened = true,
		width = 400;
</script>

<sidebar class:opened style="--width: {width}px">
	<span class="header"> {title} </span>
	<slot />
</sidebar>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	sidebar {
		min-width: var(--width);
		background: $background-secondary;
		display: flex;
		flex-flow: column;
		height: calc(100vh - 50px - 2rem);
		position: -webkit-sticky;
		position: sticky;
		top: 50px;
		z-index: 2;
		max-height: 0px;
		overflow: hidden visible;

		@media screen and (max-width: 860px) {
			position: initial;
			width: calc(100% - 4rem);
			background: $background-secondary;
			border-radius: 10px;
			height: fit-content;
			padding-right: 0;
			max-height: 0px;
		}

		&.opened {
			max-height: 9999px;
			padding: 1rem;

			@media screen and (max-width: 860px) {
				margin-left: 1rem;
				margin-top: 1rem;
			}
		}

		.header {
			font-weight: 700;
			font-size: 1.7rem;
			margin-block-start: calc(0.67em - 1rem);
			margin-block-end: 0.67em;
			margin-inline-start: 0px;
			margin-inline-end: 0px;
			font-weight: bold;

			@media screen and (max-width: 860px) {
				display: none;
			}
		}
	}
</style>
