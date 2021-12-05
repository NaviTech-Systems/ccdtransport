<script lang="ts">
	import MediaQuery from '../utils/MediaQuery.svelte';
	import Group from './Group.svelte';
	import Item from './Item.svelte';
	import { slide } from 'svelte/transition';

	export let mini = false;

	let opened = false;

	let dropdownEl: HTMLElement, openEl: HTMLElement;

	const handleToggleOpen = () => (opened = !opened);

	const handleWindowClick = (event: MouseEvent) => {
		if (
			opened &&
			!dropdownEl.contains(event.target as Node) &&
			!openEl.contains(event.target as Node)
		) {
			handleToggleOpen();
		}
	};
</script>

<svelte:window on:click={handleWindowClick} />

<nav>
	<container class:mini>
		<MediaQuery query="(min-width: 1200px)" let:matches>
			{#if matches}
				<slot name="desktop" />
			{:else}
				<MediaQuery query="(max-width: 800px)" let:matches>
					{#if matches}
						<slot name="logo" />
						{#if opened}
							<div class="dropdown" bind:this={dropdownEl} transition:slide>
								<slot name="mobile" />
							</div>
						{/if}
						<Group dir="right">
							<Item effect on:click={handleToggleOpen} bind:el={openEl}>
								<div class="opener" class:opened>
									<span />
									<span />
									<span />
									<span />
								</div>
							</Item>
						</Group>
					{:else}
						<slot name="tablet" />
					{/if}
				</MediaQuery>
			{/if}
		</MediaQuery>
	</container>
</nav>

<style lang="scss">
	@import '../globals.scss';
	nav {
		position: sticky;
		position: -webkit-sticky;
		top: 0;
		display: flex;
		flex-flow: row;
		padding: 0.5rem;
		height: calc(50px - 1rem);
		background: $navbar-background;
		box-shadow: 0px 2px 5px #19191948;
		z-index: 10;

		container {
			position: relative;
			display: flex;
			flex-flow: row;
			width: 100%;

			&.mini {
				width: $width-small;
				justify-self: center;
				margin: 0 auto;

				@media screen and (max-width: $width-small) {
					width: 100%;
				}
			}

			.opener {
				width: 30px;
				height: 100%;
				position: relative;
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				transform: rotate(0deg);
				-webkit-transition: 0.5s ease-in-out;
				-moz-transition: 0.5s ease-in-out;
				-o-transition: 0.5s ease-in-out;
				transition: 0.5s ease-in-out;
				cursor: pointer;

				span {
					display: block;
					position: absolute;
					height: 4px;
					width: 100%;
					background: $primary-color;
					border-radius: 9px;
					opacity: 1;
					left: 0;
					-webkit-transform: rotate(0deg);
					-moz-transform: rotate(0deg);
					-o-transform: rotate(0deg);
					transform: rotate(0deg);
					-webkit-transition: 0.25s ease-in-out;
					-moz-transition: 0.25s ease-in-out;
					-o-transition: 0.25s ease-in-out;
					transition: 0.25s ease-in-out;
				}

				span:nth-child(1) {
					top: 3px;
				}

				span:nth-child(2),
				span:nth-child(3) {
					top: 11px;
				}

				span:nth-child(4) {
					top: 19px;
				}

				&.opened span:nth-child(1) {
					top: 18px;
					width: 0%;
					left: 50%;
				}

				&.opened span:nth-child(2) {
					-webkit-transform: rotate(45deg);
					-moz-transform: rotate(45deg);
					-o-transform: rotate(45deg);
					transform: rotate(45deg);
				}

				&.opened span:nth-child(3) {
					-webkit-transform: rotate(-45deg);
					-moz-transform: rotate(-45deg);
					-o-transform: rotate(-45deg);
					transform: rotate(-45deg);
				}

				&.opened span:nth-child(4) {
					top: 18px;
					width: 0%;
					left: 50%;
				}
			}

			.dropdown {
				position: absolute;
				overflow: hidden;
				display: flex;
				flex-flow: column;
				width: calc(100% + 1rem);
				margin-left: -0.5rem;
				background-color: $navbar-background;
				z-index: 4;
				top: 40px;
				transition: all 0.5s ease-in-out;
			}
		}
	}
</style>
