<script lang="ts">
	import { createEventDispatcher, setContext } from 'svelte';
	import { fade } from 'svelte/transition';
	import Item from './item.svelte';
	import { key } from './menu.js';

	export let x: number;
	export let y: number;
	export let items: { value: string; text: string }[];
	let menuEl: HTMLElement;

	// whenever x and y is changed, restrict box to be within bounds
	$: {
		if (menuEl) {
			const rect = menuEl.getBoundingClientRect();
			x = Math.min(window.innerWidth - rect.width, x);
			if (y > window.innerHeight - rect.height) y -= rect.height;
		}
	}

	const dispatch = createEventDispatcher();

	setContext(key, {
		dispatchClick: () => dispatch('click')
	});

	function onPageClick({ target }: MouseEvent) {
		if (target === menuEl || menuEl.contains(target as HTMLElement)) return;
		dispatch('clickoutside');
	}
</script>

<svelte:body on:click={onPageClick} />

<div transition:fade={{ duration: 100 }} bind:this={menuEl} style="top: {y}px; left: {x}px;">
	{#if 'options' in $$slots}
		<slot />
	{:else}
		{#each items as item}
			<Item option={item} on:click />
		{/each}
	{/if}
</div>

<style lang="scss">
	@import '../globals.scss';
	div {
		position: fixed;
		display: grid;
		border: 1px solid lighten($color: $background, $amount: 5);
		border-radius: 6px;
		box-shadow: 2px 2px 5px 0px #0002;
		color: $font-color;
		background: lighten($color: $background-darker, $amount: 10);
	}
</style>
