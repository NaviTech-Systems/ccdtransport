<script>
	import Section from './helpers/Section.svelte';
	import ServiceCard from './helpers/ServiceCard.svelte';
</script>

<Section divided={false} id="services">
	<div class="main" slot="content">
		<span>SERVICES</span>
		<h3>How can we help?</h3>

		<div class="services">
			<div class="col">
				<ServiceCard
					icon="designs/phone.svg"
					title="Mobile Development"
					description="Mobile app developers have been creating iOS and Android apps for so many years that it’s not just their passion "
				/>
				<ServiceCard
					icon="designs/terminal.svg"
					title="Web Development"
					description="We’ve built mobile backend systems as well as web applications across numerous industry verticals. Whether it’s PHP."
				/>
				<ServiceCard
					icon="designs/uix.svg"
					title="UI/UIX Design"
					description="Design is always a fundamental contributor to the experience of digital products. Even when you don’t have one."
				/>
			</div>
			<div class="col">
				<ServiceCard
					icon="designs/testing.svg"
					title="Software Testing"
					description="Software testing is a crucial of each software development project. As a software outsourcing company with more than 5 years"
				/>
				<ServiceCard
					icon="designs/maintenance.svg"
					title="Managed Maintenance Services"
					description="As mature problems-solvers, we have over a five year's of experience in tackling challenging business-critical projects"
				/>
				<ServiceCard
					icon="designs/terminal.svg"
					title="Mobile Development"
					description="fdjsflksd"
				/>
			</div>
		</div>
	</div>
</Section>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	.main {
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 100%;

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

		.services {
			display: grid;
			grid-auto-flow: row;
			grid-gap: 1rem;
			width: 100%;
			margin-top: 2em;

			.col {
				display: grid;
				grid-auto-flow: column;
				grid-template-columns: 1fr 1fr 1fr;
				grid-gap: 1rem;

				@media screen and (max-width: $breakpoint-phone) {
					grid-auto-flow: row;
					grid-template-columns: none;
				}
			}
		}
	}
</style>
