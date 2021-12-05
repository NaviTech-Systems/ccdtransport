<script lang="ts">
	import Item from './Item.svelte';
	import { page } from '$app/stores';

	interface ItemValue {
		value: string;
		link: string | undefined | null;
		text: string;
	}

	export let items: Array<ItemValue>, value: ItemValue;

	const handleClick = (item: ItemValue): void => {
		value = item;
	};
</script>

<tab>
	<div class="items">
		{#each items as item}
			{#if item.value}
				<Item on:click={() => handleClick(item)} selected={item.value === value.value}
					>{item.text}</Item
				>
			{:else if item.link}
				<a
					href={item.link}
					class:selected={item.link === $page.path.split('/')[$page.path.split('/').length - 1]}
				>
					<Item selected={item.link === $page.path.split('/')[$page.path.split('/').length - 1]}
						>{item.text}</Item
					>
				</a>
			{/if}
		{/each}
	</div>
	<hr class="main" />
</tab>

<style lang="scss">
	@import '../globals.scss';
	tab {
		width: 100%;
		display: flex;
		flex-flow: column;

		.items {
			display: flex;
			flex-flow: row;

			a {
				text-decoration: none;

				&.selected {
					z-index: 2;
				}
			}
		}

		hr {
			border-width: 1px;
			border-style: solid;
			width: 100%;
			margin: 0;

			&.main {
				border-color: lighten($color: $background-darker, $amount: 15);
			}
		}
	}
</style>
