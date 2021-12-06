<script lang="ts">
	export let rows = 2,
		value = '',
		placeholder = '',
		style = '',
		label: any = '',
		bigLabel = false;
</script>

<div class="text">
	{#if label}
		<label class:bigLabel>{label}</label>
	{/if}
	<textarea bind:value {rows} {placeholder} {style} />
</div>

<style lang="scss">
	@import './globals.scss';

	.text {
		display: flex;
		flex-flow: column;
		label {
			color: darken($color: $font-color, $amount: 20);
			font-size: 11px;
			margin-bottom: 0.2rem;

			&.bigLabel {
				font-size: 1rem;
			}
		}
		textarea {
			background: lighten($color: $background, $amount: 0);
			border: 1px solid lighten($color: $background, $amount: 5);
			color: $font-color;
			border-radius: 6px;
			padding: 0.9rem 0.8rem;
			font-size: 15px;
			resize: vertical;

			&:focus {
				outline: none;
			}
		}
	}
</style>
