<script>
	import Section from './helpers/Section.svelte';
</script>

<Section inverted>
	<img src="designs/truck.svg" slot="image" height="600px" />
	<div class="text" slot="text">
		<span>ABOUT US</span>
		<h3>We Provide Quality Computor & Mobile Repair Services</h3>
		<p>
			Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim,
			pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit
			amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum
			vestibulum. Suspendisse fermentum sem sagittis ante venenatis. Lorem Ipsum is simply dummy
			text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
			dummy text ever since the 1500s, when an unknown printer took a galley
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

		span {
			font-size: 0.8rem;
			font-weight: 500;
			color: $primary-color;
		}

		h3 {
			margin: 0;
			font-size: 2rem;
		}

		p {
			line-height: 1.7;
		}
	}
</style>
