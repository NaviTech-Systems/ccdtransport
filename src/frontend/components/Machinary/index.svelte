<script>
	import SlideShow from '$vendor/mase/SlideShow';
	import Banner from '$components/Banner/index.svelte';
	import Description from '$components/Description/index.svelte';
	import { t } from '$vendor/i18n/state';

	const sliderData = [
		{
			description: 'fdsffffff',
			image: 'designs/map.png',
			selected: true
		},
		{
			description: 'aaaaaaa',
			image: 'designs/map.png',
			selected: false
		},
		{
			description: 'bbbb',
			image: 'designs/map.png',
			selected: false
		}
	];
</script>

<SlideShow data={sliderData} auto />
<Banner />
<Description title={$t('machinary.title')} description={$t('machinary.description')} />
