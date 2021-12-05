<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { Option } from '../types/option';

	export let option: Option;

	const dispatch = createEventDispatcher();

	const handleDelete = (): void => dispatch('close');
</script>

<div class="tag">
	<span class="option">{option.text}</span>
	<span class="close" on:click={handleDelete}>&times;</span>
</div>

<style lang="scss">
	@import '../../globals.scss';

	.tag {
		display: flex;
		flex-flow: row;

		background: darken($color: $background-darker, $amount: 35);
		border: 1px solid darken($color: $background, $amount: 38);
		padding: 0.1rem 0.2rem;
		border-radius: 6px;
		margin-right: 0.2rem;

		span {
			font-size: 0.8rem;
			font-weight: 700;
			color: $font-color-on-color;

			&.option {
				margin-right: 0.5rem;
			}

			&.close {
				margin-inline-start: auto;
			}
		}
	}
</style>
