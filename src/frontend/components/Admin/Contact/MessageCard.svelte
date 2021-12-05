<script lang="ts">
	import type { Contact } from '$backend/models/contact';

	export let message: Contact;
</script>

<div class="card" on:click>
	<div class="header">
		<span class="name">{message.name}</span>
		<span class="email">{message.email}</span>
	</div>
	<div class="message">
		{message.message.slice(0, 20)}{#if message.message.length > 20}...{/if}
	</div>
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	.card {
		background: $background-secondary;
		border-radius: 10px;
		padding: 1rem;
		margin-bottom: 1rem;
		display: flex;
		flex-flow: column;
		cursor: pointer;

		.header {
			display: flex;
			flex-flow: row;
			margin-bottom: 1rem;

			.name {
				font-weight: 700;
				margin-right: 0.7rem;
			}

			.email {
				font-size: 0.7rem;
				margin: auto 0;
			}
		}
	}
</style>
