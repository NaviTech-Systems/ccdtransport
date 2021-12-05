<script lang="ts">
	import type { Contact } from '$backend/models/contact';
	import Circle from '$vendor/mase/Spinners/Circle.svelte';
	import { fly } from 'svelte/transition';

	export let message: Contact,
		loading = false;
</script>

<div
	class="sidebar"
	class:loading
	in:fly={{ x: 900, duration: 200 }}
	out:fly={{ x: 0, duration: 200 }}
>
	{#if loading}
		<Circle color="#258cf4" size={40} />
	{:else}
		<div class="content">
			<div class="header">
				<div class="name">{message.name}</div>
			</div>
			<div class="info">
				<span class="email">{message.email}</span>
			</div>
			<div class="body">
				{message.message}
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	.sidebar {
		width: calc(900px - 2rem);
		height: calc(100vh - 50px - 4rem);
		padding: 1rem;
		background: $background-secondary;
		margin-left: 1rem;
		border-radius: 10px;

		&.loading {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.content {
			.header {
				margin-bottom: 0.4rem;
				.name {
					font-size: 1.5rem;
					font-weight: bold;
				}
			}

			.info {
				.email {
					font-size: 1rem;
				}
			}

			.body {
				margin-top: 1rem;
				font-size: 1rem;
			}
		}
	}
</style>
