<script lang="ts">
	export let size = 60;
	export let unit = 'px';
	export let duration = '0.75s';
	export let style = '';
	export let color: string | null = null;
</script>

<div
	class="circle"
	style="--size: {size}{unit}; --duration: {duration}; {color
		? `border-color: ${color} transparent ${color} ${color};`
		: ''} {style}"
/>

<style lang="scss">
	@import '../globals.scss';
	.circle {
		height: var(--size);
		width: var(--size);
		border-color: $spinner-color transparent $spinner-color $spinner-color;
		border-width: calc(var(--size) / 12);
		border-style: solid;
		border-image: initial;
		border-radius: 50%;
		animation: var(--duration) linear 0s infinite normal none running rotate;
	}
	@keyframes rotate {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
