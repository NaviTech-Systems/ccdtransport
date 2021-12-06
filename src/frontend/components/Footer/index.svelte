<script>
	import Facebook from '$components/Icons/Facebook.svelte';
	import Mail from '$components/Icons/Mail.svelte';
	import Phone from '$components/Icons/Phone.svelte';
	import { t } from '$vendor/i18n/state';
	import Section from './helpers/Section.svelte';
</script>

<footer>
	<div class="content">
		<div class="facebook">
			<iframe
				src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCCD-EUROSERVICES-1460103047451764&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2698479670406435"
				width="340"
				height="130"
				style="border:none;overflow:hidden"
				scrolling="no"
				frameborder="0"
				lazy="true"
				title="Facebook"
				allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
			/>
		</div>
		<Section title={$t('footer.importantLinks')}>
			<a
				target="_blank"
				href="https://www.facebook.com/CCD-EUROSERVICES-1460103047451764"
				class="entry effect"><Facebook /> <span>Facebook</span></a
			>
		</Section>
		<Section title={$t('footer.informations')}>
			<span class="entry ">CCD EuroServices</span>
			<span class="entry ">Reg. Com.: J33/668/2015</span>
			<span class="entry ">Cod fiscal: RO34822880</span>
		</Section>
		<Section title={$t('footer.contact')}>
			<span class="entry"><Phone /><a href="tel:00447989459160">UK +447989459160</a></span>
			<span class="entry"><Phone /><a href="tel:0040740482509">RO +40740482509</a></span>
			<a class="entry effect" href="mailto:ccdtransport@yahoo.com"
				><Mail /><span>ccdtransport@yahoo.com</span></a
			>
		</Section>
	</div>
	<div class="trademark">
		<div class="content">
			@CCD EuroServices 2015 - {new Date().getFullYear()}
		</div>
	</div>
</footer>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	footer {
		width: 100%;
		min-height: 100px;
		display: flex;
		flex-flow: column;
		background: $background;
		margin-block-start: auto;

		.content {
			display: flex;
			flex-flow: row;
			padding: 2rem 0rem;
			width: $width-small;

			.facebook {
				padding-right: 2rem;
				overflow: hidden;

				@media screen and (max-width: $breakpoint-phone) {
					width: 100%;
				}
			}

			@media screen and (max-width: $breakpoint-phone) {
				flex-flow: column;
			}

			.entry {
				text-decoration: none;
				color: initial;
				line-height: 1.2;
				display: flex;
				flex-flow: row;
				margin-bottom: 0.8rem;

				span,
				a {
					/* vertical-align: top; */
					margin: auto 0;
					margin-left: 0.3rem;
					text-decoration: underline;
					color: $font-color;
				}

				&.effect:hover {
					color: $primary-color;
				}
			}
		}

		.trademark {
			width: 100%;
			.content {
				padding: 1rem 0rem;
				width: $width-small;
				font-size: 0.9rem;
			}
			background: $background;
		}

		@media screen and (max-width: $width-small) {
			.content,
			.trademark .content {
				width: calc(100% - 4rem);
				padding: 2rem;
			}
		}

		@media screen and (min-width: $width-small) {
			.content,
			.trademark .content {
				margin: 0 auto;
			}
		}
	}
</style>
