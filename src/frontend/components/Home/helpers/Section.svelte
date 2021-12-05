<script lang="ts">
	export let inverse = false,
		inverted = false,
		divided = true,
		id = '';
</script>

<div class="main" style={inverted ? 'background: #ffffff' : ''} {id}>
	<div class="content">
		{#if divided}
			{#if inverse}
				<div class="first text"><slot name="text" /></div>
				<div class="second"><slot name="image" /></div>
			{:else}
				<div class="first"><slot name="image" /></div>
				<div class="second text"><slot name="text" /></div>
			{/if}
		{:else}
			<slot name="content" />
		{/if}
	</div>
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';
	.main {
		width: 100%;
		display: flex;
		flex-flow: row;
		justify-content: center;
		align-items: center;
		background: $background;

		.content {
			display: flex;
			flex-flow: row;
			width: $width-small;
			padding: 4rem 0;

			@media screen and (max-width: $breakpoint-phone) {
				flex-flow: column;
				justify-content: flex-end;
				padding: 1rem 0;
			}

			.first {
				max-width: 50%;
				text-align: center;

				@media screen and (max-width: $breakpoint-phone) {
					max-width: 100%;
					width: 100%;
					height: 100%;
					margin: 0 auto;

					& > :global(svg) {
						width: 100%;
						height: 100%;
					}

					& > :global(img) {
						width: 100%;
						height: 100%;
					}
				}

				&.text {
					margin-top: auto;
					margin-bottom: auto;
				}
			}

			.second {
				margin-inline-start: auto;
				justify-content: end;
				text-align: end;
				text-align: center;
				max-width: 50%;

				@media screen and (max-width: $breakpoint-phone) {
					max-width: 100%;
					width: 100%;
					height: 100%;
					margin: 0 auto;

					& > :global(svg) {
						width: 100%;
						height: 100%;
					}
				}

				&.text {
					margin-top: auto;
					margin-bottom: auto;
				}
			}

			@media screen and (max-width: $width-small) {
				width: 100%;
				padding: 4rem 2rem;
			}
		}
	}
</style>
