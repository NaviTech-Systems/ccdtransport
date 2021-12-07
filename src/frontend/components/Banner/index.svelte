<script lang="ts">
	import { t } from '$vendor/i18n/state';

	import Button from '$vendor/mase/Button.svelte';

	export let image: string = '/designs/casa_1.webp';
</script>

<div class="banner">
	<div class="text">
		<h2>{$t('offer.title')}</h2>
		<p>
			{$t('offer.description')}
		</p>
		<Button color="default" link="/offer">{$t('offer.button')}</Button>
	</div>
	<div class="image" style="--img: url({image})" />
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	@mixin angle($pseudo, $flip: false, $angle: 1.5deg) {
		// Possible values for $pseudo are: before, after, both
		@if $pseudo == 'before' or $pseudo == 'after' or $pseudo == 'both' {
			position: relative;
			z-index: 1;
			$selector: if($pseudo == 'both', '&:before,&:after', '&:#{$pseudo}');

			#{$selector} {
				background: inherit;
				content: '';
				display: block;
				height: 200px;
				left: 0;
				position: absolute;
				right: 0;
				z-index: -1;
				-webkit-backface-visibility: hidden; // for Chrome Windows
				background: white;
			}

			@if $pseudo == 'before' {
				#{$selector} {
					top: 0;
					background: white;

					@if $flip {
						transform: skewY($angle * -1);
						transform-origin: 0 0;
					} @else {
						transform: skewY($angle);
						transform-origin: 100% 0;
					}
				}
			}

			@if $pseudo == 'after' {
				#{$selector} {
					bottom: 0;
					background: white;

					@if $flip {
						transform: skewY($angle);
						transform-origin: 0 100%;
					} @else {
						transform: skewY($angle * -1);
						transform-origin: 100%;
					}
				}
			}

			@if $pseudo == 'both' {
				&:before {
					top: 0;
					background: white;

					@if $flip {
						transform: skewY($angle * -1);
						transform-origin: 0 0;
					} @else {
						transform: skewY($angle);
						transform-origin: 100% 0;
					}
				}

				&:after {
					bottom: 0;
					background: white;

					@if $flip {
						transform: skewY($angle);
						transform-origin: 0 0;
					} @else {
						transform: skewY($angle * -1);
						transform-origin: 100%;
					}
				}
			}
		}
	}

	.banner {
		background: $background-secondary;
		display: flex;
		flex-flow: row;
		overflow: hidden;
		height: 200px;
		margin: 1rem 0;
		@media screen and (max-width: 675px) {
			flex-flow: column-reverse;
			height: auto;
		}

		.text {
			@media screen and (min-width: 675px) {
				@include angle(after, false, 65.5deg);
			}

			padding: 1.5rem;
			color: $font-color-on-color;
			background: $primary-color;
			display: flex;
			flex-flow: column;
			padding-right: 5rem;

			h2 {
				margin: 0;
			}
		}

		.image {
			@media screen and (min-width: 675px) {
				@include angle(before, true, 65.5deg);
			}
			background: var(--img);
			background-size: cover;
			background-repeat: no-repeat;
			width: 500px;
			height: 200px;

			@media screen and (max-width: 675px) {
				width: 100%;
			}
		}
	}
</style>
