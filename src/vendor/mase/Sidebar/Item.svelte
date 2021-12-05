<script lang="ts">
	export let selected = false,
		link = false,
		to = '';
</script>

<div class="item" class:selected class:link on:click>
	{#if link && to}
		<a href={to} alt="link">
			<slot />
		</a>
	{:else}
		<slot />
	{/if}
</div>

<style lang="scss">
	@import '../globals.scss';

	.item {
		padding: 0.8rem 0.4rem;
		background: lighten($color: $background, $amount: 2);
		border: 1px solid lighten($color: $background, $amount: 20);
		border-radius: 6px;
		width: calc(100% - 0.9rem);
		transition: all 0.3s linear;
		cursor: pointer;

		&.link {
			cursor: pointer;
		}

		a {
			color: $font-color;
			height: 100%;
			padding: 0.2rem 0.4rem;
			text-decoration: none;
			cursor: pointer;
		}

		&.selected {
			background: darken($color: $background, $amount: 2);
		}

		&:hover {
			background: darken($color: $background, $amount: 2);
		}

		&:active {
			transition: none;
			background: darken($color: $background, $amount: 5);
		}
	}
</style>
