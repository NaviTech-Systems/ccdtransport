<script lang="ts">
	import { selectContactMessages } from '$state/admin';
	import MessageCard from './MessageCard.svelte';

	export let handleSelectMessage: (id: string) => void;

	const messages = selectContactMessages;
</script>

<div class="list">
	{#if $messages.state === 'completed'}
		{#each $messages.results as message}
			<MessageCard {message} on:click={() => handleSelectMessage(message.id)} />
		{/each}
	{/if}
</div>

<style lang="scss">
	.list {
		width: 100%;
		max-height: calc(100vh - 50px - 2rem);
		overflow: hidden visible;
		display: flex;
		flex-flow: column;
	}
</style>
