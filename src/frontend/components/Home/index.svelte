<script lang="ts">
	import { onDestroy } from 'svelte';

	import AboutUs from './about-us.svelte';
	import Categories from './categories.svelte';
	import Header from './header.svelte';

	let homeEl: HTMLElement;

	onDestroy(() => {
		if (homeEl) homeEl.innerHTML = '';
	});
</script>

<div class="home" bind:this={homeEl}>
	<Header />
	<Categories />
	<AboutUs />
</div>
