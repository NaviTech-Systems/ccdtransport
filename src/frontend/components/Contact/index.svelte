<script lang="ts">
	import { onDestroy } from 'svelte';

	import Form from './Form.svelte';
	import Header from './Header.svelte';

	let contactEl: HTMLElement;

	onDestroy(() => {
		if (contactEl) contactEl.innerHTML = '';
	});
</script>

<div class="main" bind:this={contactEl}>
	<Header />
	<Form />
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	.main {
		width: $width-small;
		margin: 0 auto 2rem auto;

		@media screen and (max-width: $breakpoint-phone) {
			padding: 0 1rem;
			width: calc(100% - 2rem);
		}
	}
</style>
