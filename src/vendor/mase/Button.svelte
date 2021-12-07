<script lang="ts">
	import Circle from './Spinners/Circle.svelte';
	export let color: 'primary' | 'secondary' | 'default' = 'default',
		effect = false,
		style = '',
		borderless = false,
		loading = false,
		error = false,
		fluid = false,
		id: null | string = null,
		disabled = false,
		centered = false,
		clientWidth = 0,
		textStyle = '',
		trasparent = false,
		link = '';
</script>

<div
	class="button {color || 'default'}"
	{style}
	class:borderless
	class:effect
	class:fluid
	class:disabled
	class:centered
	class:trasparent
	class:error
	{id}
	bind:clientHeight={clientWidth}
	on:click
>
	{#if loading === true}
		<Circle size={15} color="white" style="margin: 0 auto;" />
	{:else if $$slots.element}
		<slot name="element" />
	{:else if link !== ''}
		<a href={link} style={textStyle} rel="external">
			<slot />
		</a>
	{:else}
		<span style={textStyle}>
			<slot />
		</span>
	{/if}
</div>

<style lang="scss">
	@import './globals.scss';
	.button {
		padding: 0rem 1rem;
		border-radius: 4px;
		cursor: pointer;
		padding: 0.3rem 0.8rem;
		line-height: 1.2;
		/* width: min-content; */
		display: block;
		height: fit-content;
		width: fit-content;

		span {
			font-weight: 700;
			font-size: 0.8rem;
			color: $font-color;
			line-height: 1.4;
		}

		a {
			text-decoration: none;
			color: $font-color;
			line-height: 1.55;
		}

		&.centered {
			text-align: center;
			place-content: center;
			text-align: -webkit-center;
		}

		&.fluid {
			display: flex;
			width: max-content;
		}

		&.effect {
			transition: all 0.3s linear;
		}

		&.primary {
			background: $primary-color;
			color: $font-color-on-color;

			span,
			a {
				color: $font-color-on-color;
			}

			&:hover {
				background: darken($color: $primary-color, $amount: 8);
			}

			&:focus {
				background: darken($color: $primary-color, $amount: 8);
			}

			&:active {
				background: darken($color: $primary-color, $amount: 12);
			}

			&.disabled {
				background: darken($color: $primary-color, $amount: 18);
				pointer-events: none;
			}
		}

		&.default {
			background: $background-secondary;

			span,
			a {
				color: $primary-color;
				font-family: 'Roboto';
			}

			&:hover {
				background: lighten($color: $background, $amount: 10);
			}

			&:focus {
				background: lighten($color: $background, $amount: 10);
			}

			&:active {
				background: lighten($color: $background, $amount: 15);
			}

			&.disabled {
				background: darken($color: $background, $amount: 20);
				pointer-events: none;
			}
		}

		&.secondary {
			background: $secondary-color;
			border: 1px solid lighten($color: $secondary-color, $amount: 10);

			span {
				color: $font-color-on-color;
			}

			&:hover {
				background: lighten($color: $secondary-color, $amount: 10);
			}

			&:focus {
				background: lighten($color: $secondary-color, $amount: 10);
			}

			&:active {
				background: lighten($color: $secondary-color, $amount: 15);
			}

			&.disabled {
				background: darken($color: $secondary-color, $amount: 20);
				pointer-events: none;
			}
		}

		&.error {
			background: red;
			border: 1px solid lighten($color: red, $amount: 10);

			span {
				color: $font-color-on-color;
			}

			&:hover {
				background: lighten($color: red, $amount: 10);
			}

			&:focus {
				background: lighten($color: red, $amount: 10);
			}

			&:active {
				background: lighten($color: red, $amount: 15);
			}

			&.disabled {
				background: darken($color: red, $amount: 20);
				pointer-events: none;
			}
		}

		&.borderless {
			border: none;

			&:hover {
				background: none;
			}

			&:focus {
				background: none;
			}

			&:active {
				background: none;
			}
		}

		&.trasparent {
			background: transparent;

			border-width: 2px;

			span {
				color: $font-color-full;
			}

			&:hover {
				span {
					color: $font-color-on-color;
				}
			}
		}
	}
</style>
