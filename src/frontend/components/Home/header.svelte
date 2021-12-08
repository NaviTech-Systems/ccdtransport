<script lang="ts">
	import { t } from '$vendor/i18n/state';
</script>

<div class="main">
	<div class="content">
		<h1 class="min">{$t('homepage.title')}</h1>
		<span class="title">{$t('homepage.subtitle')}</span>
	</div>
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	.main {
		display: flex;
		height: calc(100vh - 50px);

		&::after {
			background: url('/designs/map.webp') no-repeat center;
			background-size: cover;
			content: '';
			position: absolute;
			height: calc(100vh - 50px);
			width: 100%;
			pointer-events: none;
		}

		.content {
			z-index: 3;
			width: calc(650px - 4rem);
			display: flex;
			flex-flow: column;
			background-color: transparentize($color: #000000, $amount: 0.45);
			justify-content: center;
			padding: 2rem;

			.min {
				font-size: 1rem;
				font-weight: 500;
				color: #e9e9e9;
				font-family: 'Roboto';
				text-transform: uppercase;
			}

			.title {
				font-size: 5.5rem;
				color: #e9e9e9;
				font-family: 'RobotoThin';
				line-height: 1;
				text-transform: uppercase;
			}
			@media screen and (max-width: 665px) {
				width: calc(450px - 4rem);
				.min {
					font-size: 0.9rem;
				}
				.title {
					font-size: 3.2rem;
					width: 380px;
				}
			}

			@media screen and (max-width: 465px) {
				width: calc(300px - 4rem);
				.title {
					font-size: 3.2rem;
					width: 250px;
				}
			}

			@media screen and (max-width: 433px) {
				.title {
					font-size: 2.8rem;
					width: 100%;
				}
			}

			@media screen and (max-width: 310px) {
				width: calc(100% - 4rem);
				.title {
					font-size: 3.2rem;
					width: 100%;
				}
			}
		}
	}
</style>
