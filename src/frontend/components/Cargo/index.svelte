<script lang="ts">
	import SlideShow from '$vendor/mase/SlideShow';
	import Banner from '$components/Banner/index.svelte';
	import Description from '$components/Description/index.svelte';
	import { t } from '$vendor/i18n/state';
	import { onDestroy } from 'svelte';

	const sliderData = [
		{
			description: 'fdsffffff',
			image: '/designs/palet_1.webp',
			selected: true
		},
		{
			description: 'aaaaaaa',
			image: '/designs/cargo_2.webp',
			selected: false
		}
	];

	let cargoEl: HTMLElement;

	onDestroy(() => {
		if (cargoEl) cargoEl.innerHTML = '';
	});
</script>

<div class="cargo" bind:this={cargoEl}>
	<SlideShow data={sliderData} auto />
	<Banner image="/designs/palet_1.webp" rotation />
	<Description title={$t('cargo.title')} description={$t('cargo.description')} />
</div>
