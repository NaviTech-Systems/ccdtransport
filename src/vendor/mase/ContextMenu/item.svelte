<script lang="ts">
	import { getContext } from 'svelte';
	import { key } from './menu.js';

	export let isDisabled = false;
	export let option = {} as { text: string; value: string };

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	const { dispatchClick } = getContext(key);

	const handleClick = () => {
		if (isDisabled) return;

		dispatch('click', { ...option });
		dispatchClick();
	};
</script>

<div class="option" class:disabled={isDisabled} on:click={handleClick}>
	{#if option}
		{option.text}
	{:else}
		<slot />
	{/if}
</div>

<style lang="scss">
	@import '../globals.scss';

	.option {
		padding: 0.6rem 1rem;
		color: $font-color;
		font-size: 13px;
		cursor: pointer;
		transition: all 0.3s linear;
		border-radius: 0;

		&:hover {
			background: lighten($color: $background, $amount: 20);
		}

		&:first-child {
			border-top-left-radius: 6px;
			border-top-right-radius: 6px;
		}

		&:last-child {
			border-bottom-left-radius: 6px;
			border-bottom-right-radius: 6px;
		}
	}
</style>
