<script lang="ts">
	import Icon from '../Icon.svelte';

	export let value = 'general',
		items = [],
		title = '',
		effect = false,
		fluid = false;

	const handleChangeItem = (id: string) => {
		value = id;
	};
</script>

<div class="sidebar" class:effect class:fluid>
	<div class="header">{title}</div>
	<hr />
	{#each items as item}
		<div
			class="item"
			class:effect
			class:active={value === item.value}
			on:click={() => handleChangeItem(item.value)}
		>
			{#if item.icon}
				<Icon name="briefcase" size="17px" />
			{/if}
			<span>{item.text}</span>
		</div>
	{/each}
</div>

<style lang="scss">
	@import '../globals.scss';
	.sidebar {
		width: 300px;
		display: flex;
		flex-flow: column;
		margin: 0 1rem;
		padding: 1rem;
		background: $background-darker;
		border-radius: 6px;
		transition: all 0.3s linear;
		border: 1px solid lighten($color: $background, $amount: 5);
		height: fit-content;

		&.fluid {
			width: calc(100% - 2rem);
			margin: 0;
		}

		&.effect {
			transition: all 0.3s linear;
		}

		hr {
			width: 100%;
			border: 1px solid lighten($color: $background, $amount: 5);
			margin-bottom: 1rem;
		}

		.header {
			font-weight: 800;
			font-size: 20px;
			color: $font-color;
		}

		.item {
			display: flex;
			flex-flow: row;
			margin: 0;
			margin-bottom: 0.2rem;
			padding: 0.4rem;
			border-radius: 6px;
			cursor: pointer;

			&.effect {
				transition: all 0.3s linear;
			}
			&:hover {
				background: lighten($color: $background, $amount: 10);
			}

			&.active {
				background: lighten($color: $background, $amount: 2);
			}

			span {
				line-height: 1.2;
				margin-left: 0.8rem;
				color: $font-color;
				font-size: 17px;
			}
		}

		@media screen and (max-width: 700px) {
			width: calc(100% - 2rem);
			margin: 0;
		}
	}
</style>
