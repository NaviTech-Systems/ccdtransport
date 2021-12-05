<script lang="ts">
	import Icon from './Icon.svelte';
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';

	export let opened = false,
		height = 350,
		pulsating = false,
		closable = false,
		id: null | string = null;

	let headerHeight: number;

	const dispatch = createEventDispatcher();

	const handleClose = (): void => {
		opened = false;
		dispatch('close');
	};

	const handleOpenCloseDraw = (): void => {
		opened = !opened;
		dispatch('onCloseOpen');
	};
</script>

<div
	class="draw"
	style={`transform: translateY(${opened ? 0 : height - headerHeight}px); height: ${height}px;`}
	in:slide={{ duration: 300 }}
	out:slide={{ duration: 300 }}
	{id}
>
	<div class="header" bind:clientHeight={headerHeight} class:pulsating>
		<div on:click={handleOpenCloseDraw} style="width: 100%">
			<slot name="header" />
		</div>
		{#if closable}
			<div class="close" on:click={handleClose}>
				<Icon name="x" size="16px" />
			</div>
		{/if}
	</div>
	<div class="body" on:click style={`height: ${height - headerHeight}px`}>
		<slot name="body" />
	</div>
</div>

<style lang="scss">
	@import './globals.scss';
	.draw {
		min-width: 250px;
		max-width: 250px;
		background: $background-darker;
		margin: 0 1rem;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		display: flex;
		flex-flow: column;
		transition: 0.1s linear all;
		box-shadow: 5px 4px 5px 1px #00000057;

		.header {
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			width: 100%;
			background: $primary-color;
			cursor: pointer;
			display: flex;

			&.pulsating {
				animation-name: color;
				animation-duration: 0.5s;
				animation-iteration-count: infinite;
			}

			.close {
				margin-inline-start: auto;
				padding: 0.2rem;
				pointer-events: all;
			}
		}

		.body {
			height: 100%;
		}
	}

	@keyframes color {
		0% {
			background-color: darken($color: $primary-color, $amount: 10);
		}
		100% {
			background-color: lighten($color: $primary-color, $amount: 10);
		}
	}
</style>
