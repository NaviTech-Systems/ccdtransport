<script lang="ts">
	export let effect: boolean = false,
		logo = false,
		link = false,
		to = '',
		selected = false,
		el: HTMLElement = null;
</script>

<item class:effect class:logo class:link class:selected on:click bind:this={el}>
	{#if link && to}
		<a href={to} alt="link">
			<slot />
		</a>
	{:else}
		<slot />
	{/if}
</item>

<style lang="scss">
	@import '../globals.scss';
	item {
		height: calc(100% - 0.4rem);
		padding: 0.2rem 0.5rem;
		color: $font-color;
		line-height: 1.8;
		border-radius: 6px;
		transition: all 0.3s linear;

		display: flex;
		justify-content: center;
		align-items: center;

		&.link {
			cursor: pointer;
		}

		&.selected {
			font-weight: 700;

			span,
			a {
				color: darken($color: $primary-color, $amount: 5);
			}
		}

		a {
			color: $font-color;
			height: 100%;
			padding: 0.2rem 0.4rem;
			text-decoration: none;
			cursor: pointer;
			transition: all 0.3s linear;
		}

		:global(.button) {
			display: initial;
		}

		&.effect:hover {
			color: darken($color: $primary-color, $amount: 5);

			a {
				color: darken($color: $primary-color, $amount: 5);
			}
		}

		&:hover {
			color: darken($color: $primary-color, $amount: 5);

			a {
				color: darken($color: $primary-color, $amount: 5);
			}
		}
	}
</style>
