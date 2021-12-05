<script>
	import MediaQuery from '$vendor/mase/utils/MediaQuery.svelte';

	import Attribute from './helpers/Attribute.svelte';
	import Section from './helpers/Section.svelte';
</script>

<Section inverse>
	<svelte:fragment slot="image">
		<MediaQuery query="(min-width: 1200px)" let:matches>
			{#if matches}
				<img src="designs/why-us.png" alt="why-us" class="image" />
			{/if}
		</MediaQuery>
	</svelte:fragment>
	<div class="content" slot="text">
		<span>WHY CHOOSE US?</span>
		<h3>Outstanding Digital Experience</h3>

		<p class="description">
			We believe that our transparency with our clients is what sets us apart from our
			competition.If you are looking for a trusted IT partner and your company shares similar
			standards to our company we would really like to hear from you
		</p>

		<div class="attributes">
			<Attribute
				title="CUSTOMER FOCUSED"
				description="We simply listen to our clients. Our dedicated account management team is in constant contact with our customers to ensure that we deliver in every aspect of our dealings."
			/>
			<Attribute
				title="PROCESS ORIENTED"
				description="We are a process oriented organization. This ensures prompt and high quality delivery from simple helpdesk tasks to complex multi vendor projects with strict timeframes."
			/>
			<Attribute
				title="CUTTING EDGE TOOLS"
				description="We believe in investing in our “tools of the trade”. Our company has made some significant investments in the most advanced tools that enable us to deliver in the most demanding environments."
			/>
		</div>
	</div>
</Section>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';
	.image {
		width: 100%;
		height: auto;
		max-width: 100%;
		max-height: 100%;
		margin: 0 auto;
	}

	.content {
		text-align: start;
		display: flex;
		flex-flow: column;

		@media screen and (max-width: $breakpoint-phone) {
			padding: 0 2rem;
		}

		span {
			font-size: 0.8rem;
			font-weight: 500;
			color: $secondary-color;
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
