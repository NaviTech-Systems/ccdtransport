<script lang="ts">
	import SlideShow from '$vendor/mase/SlideShow';
	import Banner from '$components/Banner/index.svelte';
	import Description from '$components/Description/index.svelte';
	import { t } from '$vendor/i18n/state';
	import { onDestroy } from 'svelte';

	const sliderData = [
		{
			description: null,
			image: '/designs/palet_1.webp',
			selected: true
		}
	];

	let cargoEl: HTMLElement;

	onDestroy(() => {
		if (cargoEl) cargoEl.innerHTML = '';
	});
</script>

<div class="cargo" bind:this={cargoEl}>
	<SlideShow data={sliderData} auto rotation />
	<Banner image="/designs/palet_1.webp" />
	<Description title={$t('cargo.title')} description={$t('cargo.description')} />
</div>
