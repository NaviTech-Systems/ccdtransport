<script lang="ts">
	export let shadow = false,
		style: string;
</script>

<div class="segment" class:shadow {style}>
	<slot />
</div>

<style lang="scss">
	@import './globals.scss';

	.segment {
		background: $background-secondary;
		border-radius: 10px;
		border: 1px solid darken($color: $background, $amount: 5);
		padding: 1.5rem;
		display: flex;
		flex: 0 1 auto;
		min-width: 0;
		max-width: 100%;
		box-sizing: border-box;

		&.shadow {
			box-shadow: 4px 4px 4px 0px rgb(0 0 0 / 20%);
		}
	}
</style>
