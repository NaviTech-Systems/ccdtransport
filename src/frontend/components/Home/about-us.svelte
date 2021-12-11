<script>
	import { t } from '$vendor/i18n/state';

	import Section from './helpers/Section.svelte';
</script>

<Section inverted>
	<img src="designs/truck.svg" slot="image" height="600px" alt="desc_iomage" />
	<div class="text" slot="text">
		<h3>{$t('aboutus.title')}</h3>
		<p>
			{@html $t('aboutus.description')}
		</p>
	</div>
</Section>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	.text {
		display: flex;
		flex-flow: column;
		justify-content: start;
		align-items: baseline;
		text-align: start;

		h3 {
			margin: 0;
			font-size: 2rem;
			color: $primary-color;
		}

		p {
			line-height: 1.7;
		}
	}
</style>
