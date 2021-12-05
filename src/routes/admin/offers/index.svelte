<script lang="ts">
	import { getContactMessage, getContactMessages } from '$actions/admin';
	import MessageList from '$components/Admin/Contact/MessageList.svelte';
	import MessageSidebar from '$components/Admin/Contact/MessageSidebar.svelte';
	import { selectContactMessage } from '$state/admin';
	import { dispatch } from '$vendor/sedux';

	const message = selectContactMessage;

	dispatch(getContactMessages(), 'admin');

	const handleSelectMessage = (id: string) => {
		dispatch(() => getContactMessage(id), 'admin');
	};

	$: opened = $message.state === 'completed' || opened;
</script>

<div class="main">
	<MessageList {handleSelectMessage} />
	{#if opened}
		<MessageSidebar message={$message.result} loading={$message.state === 'loading'} />
	{/if}
</div>

<style lang="scss">
	.main {
		display: flex;
		flex-flow: row;
		width: 100%;
		overflow: hidden;
	}
</style>
