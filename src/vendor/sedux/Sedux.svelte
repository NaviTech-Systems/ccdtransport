<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { callsStore, queue } from './store';
	import { reducerCatcher, interceptorCatcher, listenerCatcher, updateQueue } from './dispatcher';
	import { actionsLogger, initDevTools } from './helpers/logger';
	import { dev } from '$app/environment';
	import type { Unsubscriber } from 'svelte/store';

	let unsubscribeCalls: Unsubscriber | null = null;

	unsubscribeCalls = callsStore.subscribe((value) => {
		updateQueue();
		reducerCatcher(value);
		interceptorCatcher(value);
		listenerCatcher(value);
		if (dev && value.nextCalled) actionsLogger(value);
	});

	queue.subscribe(() => {
		updateQueue();
	});

	onMount(() => {
		if (dev) initDevTools();
	});

	onDestroy(() => {
		if (unsubscribeCalls) unsubscribeCalls();
	});
</script>

<slot />
