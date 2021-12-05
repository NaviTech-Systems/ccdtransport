<script lang="ts">
	export let selected = false,
		link = null,
		to = null;
</script>

{#if link}
	<a href={to}>
		<div class="option" class:selected on:click>
			<slot />
		</div>
	</a>
{:else}
	<div class="option border" class:selected on:click>
		<slot />
	</div>
{/if}

<style lang="scss">
	@import '../globals.scss';
	a {
		color: $font-color;
		text-decoration: none;

		&:active {
			text-decoration: none;
		}

		&:first-child {
			border-top-left-radius: 6px;
			border-top-right-radius: 6px;
		}

		&:last-child {
			border-bottom-left-radius: 6px;
			border-bottom-right-radius: 6px;
		}
	}
	.option {
		padding: 0.6rem 1rem;
		color: $font-color;
		font-size: 12px;
		cursor: pointer;
		transition: all 0.3s linear;
		border-radius: 0;

		&.selected {
			background: lighten($color: $background-darker, $amount: 9);
		}

		&:hover {
			background: $background;
		}

		&.border:first-child {
			border-top-left-radius: 6px;
			border-top-right-radius: 6px;
		}

		&.border:last-child {
			border-bottom-left-radius: 6px;
			border-bottom-right-radius: 6px;
		}
	}
</style>
