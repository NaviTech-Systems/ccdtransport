<script lang="ts">
	import Check from '$components/Icons/Check.svelte';

	export let title: string, description: string;
</script>

<div class="main">
	<div class="icon">
		<Check />
	</div>
	<div class="content">
		<h3 class="title">
			{title}
		</h3>
		<p class="description">
			{description}
		</p>
	</div>
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';
	.main {
		display: grid;
		grid-auto-flow: column;
		grid-gap: 0.5rem;
		width: 100%;

		.content {
			display: flex;
			flex-flow: column;
			width: 100%;

			.title {
				margin: 0;
			}

			.description {
				color: $font-color;
			}
		}

		.icon {
			margin-top: 0.2rem;
		}
	}
</style>
