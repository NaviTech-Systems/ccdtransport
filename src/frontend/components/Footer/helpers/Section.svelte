<script lang="ts">
	export let title: string;
</script>

<div class="main">
	<h4 class="title">{title}</h4>
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';
	.main {
		display: flex;
		flex-flow: column;
		margin-right: 3rem;

		@media screen and (max-width: $breakpoint-phone) {
			margin-right: 0;
			margin-bottom: 2rem;
		}

		.title {
			margin: 0;
		}

		.content {
			margin-top: 1rem;
			display: flex;
			flex-flow: column;
			max-width: 400px;
			font-size: 0.9rem;
		}
	}
</style>
