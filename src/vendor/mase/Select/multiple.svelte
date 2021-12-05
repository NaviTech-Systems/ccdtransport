<script lang="ts">
	import Input from '$vendor/mase/Input.svelte';
	import { createEventDispatcher } from 'svelte';
	import Circle from '../Spinners/Circle.svelte';
	import type { Option } from './types/option';
	import Tag from './utils/Tag.svelte';

	export let loading = false,
		options: Option[] = [],
		opened = false,
		dir: 'left' | 'right' = 'right',
		placeholder = 'default',
		value: Option[] = [],
		style = '',
		name: string | 'select',
		defaultValue: Array<Option> = [];

	let tempOptions = options || [];
	let searchValue = '';
	let maxWidth = 0;
	let selectElement: HTMLElement;
	let selectedValue: Array<Option> = [];
	let triggerElement: HTMLElement;
	let defaultOnce = false;

	const dispatch = createEventDispatcher();

	$: {
		if (defaultValue?.length > 0 && !defaultOnce) {
			value = [...defaultValue];
			selectedValue = [
				...options.filter(
					(item) => defaultValue.findIndex((selected) => selected === item.value) !== -1
				)
			];
			defaultOnce = true;
		}
	}

	$: {
		tempOptions = options || [];
	}

	$: {
		if (selectedValue?.length > 0)
			tempOptions = [
				...options.filter(
					(item) =>
						selectedValue.findIndex((selected) => selected.value === item.value) === -1 &&
						item.text.toLowerCase().includes(searchValue)
				)
			];
		else tempOptions = [...options.filter((item) => item.text.toLowerCase().includes(searchValue))];
	}

	const handleOpenOptions = (): void => {
		opened = !opened && !loading;
	};

	const handleSelect = (option: Option): void => {
		value = value ? [...value, option.value] : [option.value];
		selectedValue = selectedValue ? [...selectedValue, option] : [option];
		dispatch('select', value);
		handleOpenOptions();
	};

	const handleGeneralClick = (e: MouseEvent) => {
		if (!selectElement.contains(e.target as HTMLElement)) {
			opened = false;
		}
	};

	const handleReset = (): void => {
		selectedValue = [];
		value = [];
		dispatch('select', []);
	};

	const handleSearch = (e: CustomEvent<InputEvent>) => {
		const { target } = e;
		if (!target) return;
		dispatch('search', (target as HTMLInputElement).value);
	};

	const handleDeleteOption = (option: Option): void => {
		selectedValue =
			selectedValue.length === 1 ? [] : selectedValue.filter((item) => item.value != option.value);
		value =
			selectedValue.length === 1
				? []
				: selectedValue.filter((item) => item.value != option.value).map((item) => item.value);
	};
</script>

<svelte:window on:click={handleGeneralClick} />

<dropdown bind:offsetWidth={maxWidth} bind:this={selectElement}>
	<div class="trigger" on:click={handleOpenOptions} {style}>
		{#if !loading}<span class="value" bind:this={triggerElement}>
				{#if selectedValue?.length > 0}
					<div class="tags">
						{#each selectedValue as option}
							<Tag {option} on:close={() => handleDeleteOption(option)} />
						{/each}
					</div>
				{:else}
					{placeholder}
				{/if}
			</span>
		{:else}
			<Circle size={15} style="margin-inline-start: auto;" color="#258cf4" />
		{/if}
		{#if value?.length > 0 && selectedValue?.length > 0}
			<span class="reset" on:click={handleReset}>&times</span>
		{/if}
	</div>
	<div class="options {dir}" class:opened style="max-width: calc({maxWidth}px - 1rem);">
		<div class="search">
			<Input
				{name}
				fluid
				{placeholder}
				style="width: calc(100% - 0.9rem);"
				bind:value={searchValue}
				on:input={handleSearch}
				autofocus={opened}
			/>
		</div>
		<div class="list">
			{#if !loading}
				{#each tempOptions as option}
					<div class="item" on:click={() => handleSelect(option)}>
						{option.text}
					</div>
				{/each}
			{/if}
		</div>
	</div>
</dropdown>

<style lang="scss">
	@import '../globals.scss';

	dropdown {
		display: block;
		color: $font-color;

		.trigger {
			border-radius: 6px;
			font-size: 15px;
			background: lighten($color: $background, $amount: 0);
			border: 1px solid lighten($color: $background, $amount: 5);
			cursor: pointer;
			padding: 0.3rem 0.4rem;
			transition: all 0.3s linear;
			display: flex;
			flex-flow: row;

			.value {
				width: 100%;
				line-height: 1.2;

				.tags {
					display: flex;
					flex-flow: row;
				}
			}

			.reset {
				border-radius: 20px;
				margin-inline-start: auto;
				padding: 0.15rem 0.3rem;
				font-weight: 700;
				line-height: 0.9;

				&:hover {
					background: darken($color: $background, $amount: 10);
				}
			}

			&:hover {
				background: darken($color: $background, $amount: 4);
			}
		}

		.options {
			display: none;
			position: absolute;
			margin-top: 0.2rem;
			padding: 0.4rem;
			background: lighten($color: $background, $amount: 10);
			border: 1px solid lighten($color: $background, $amount: 20);
			box-shadow: 0px 3px 6px 2px rgb(0 0 0 / 20%);
			border-radius: 6px;
			width: 100%;
			z-index: 2;

			&.opened {
				display: flex;
				flex-flow: column;
			}

			&.left {
				transform: translateX(-50%);
			}

			.list {
				.item {
					padding: 0.3rem 0.6rem;
					font-size: 16px;
					transition: all 0.3s linear;
					cursor: pointer;
					border-radius: 6px;

					&:hover {
						background: $background;
					}
				}
			}
		}
	}
</style>
