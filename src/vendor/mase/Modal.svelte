<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	export let opened = false;

	const dispatch = createEventDispatcher();
	let modalInnerElement: HTMLElement;

	const handleClick = ({ target, detail }: MouseEvent) => {
		if (!modalInnerElement.contains(target as HTMLElement)) {
			dispatch('close', detail);
		}
	};
</script>

{#if opened}
	<overlay transition:fade on:mouseup={handleClick}>
		<modal bind:this={modalInnerElement}>
			<slot />
		</modal>
	</overlay>
{/if}

<style lang="scss">
	@import './globals.scss';

	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: transparent;
		border-radius: 6px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: $background-darker;
		border-radius: 6px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: lighten($color: $background-darker, $amount: 10);
	}

	overlay {
		display: block;
		background: rgba($color: #0000, $alpha: 0.6);
		z-index: 1000;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		modal {
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 1001;
			border: 1px solid lighten($color: $background-secondary, $amount: 10);
			background: $background-secondary;
			border-radius: 6px;
			padding: 1rem;
			display: flex;
			overflow: revert;

			@media screen and (max-width: 680px) {
				flex-flow: column;
				width: 85vw;
				max-height: 70vh;
				overflow: hidden scroll;
			}
		}
	}
</style>
