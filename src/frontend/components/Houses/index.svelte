<script lang="ts">
	import SlideShow from '$vendor/mase/SlideShow';
	import Banner from '$components/Banner/index.svelte';
	import Description from '$components/Description/index.svelte';
	import { t } from '$vendor/i18n/state';
	import { onDestroy } from 'svelte';

	const sliderData = [
		{
			description: 'fdsffffff',
			image: '/designs/casa_1.webp',
			selected: true
		},
		{
			description: 'aaaaaaa',
			image: '/designs/casa_3.webp',
			selected: false
		}
	];

	let housesEl: HTMLElement;

	onDestroy(() => {
		if (housesEl) housesEl.innerHTML = '';
	});
</script>

<div class="houses" bind:this={housesEl}>
	<SlideShow data={sliderData} auto rotation />
	<Banner />
	<Description title={$t('houses.title')} description={$t('houses.description')} />
</div>
