<script lang="ts">
	import { fly } from 'svelte/transition';
	let show = false,
		popupElement: HTMLElement;

	// $: if (popupElement && false) {
	//   const rect = popupElement.getBoundingClientRect();
	//   popupElement.style.transform = `translateX(-${
	//     rect.x + rect.width > window.innerWidth
	//       ? window.innerWidth - rect.x + rect.width
	//       : 0
	//   }px)`;
	//   console.log(
	//     rect,
	//     window.innerWidth - (window.innerWidth - rect.x + rect.width),
	//   );
	// }

	const handlePupupOpen = (): void => {
		show = true;
	};
	const handlePupupClose = (): void => {
		show = false;
	};
</script>

<div
	class="popup"
	on:pointerover={handlePupupOpen}
	on:pointerleave={handlePupupClose}
	on:mouseover={handlePupupOpen}
	on:mouseleave={handlePupupClose}
>
	<slot name="trigger" />
	{#if show}
		<div class="content" transition:fly bind:this={popupElement}>
			<slot name="content" />
		</div>
	{/if}
</div>

<style lang="scss">
	@import './globals.scss';
	.popup {
		position: relative;
		display: inline-block;
		cursor: pointer;

		.content {
			background-color: $background-darker;
			border-radius: 6px;
			position: absolute;
			z-index: 1;
			bottom: 125%;
			color: $font-color;
			border: 1px solid lighten($color: $background, $amount: 5);
			width: max-content;

			&::after {
				content: '';
				position: absolute;
				top: 100%;
				left: 50%;
				margin-left: -5px;
				border-width: 5px;
				border-style: solid;
				border-color: lighten($color: $background, $amount: 5) transparent transparent transparent;
			}
		}
	}
</style>
