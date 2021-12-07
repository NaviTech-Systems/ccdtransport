<script>
	import SlideShow from '$vendor/mase/SlideShow';
	import Banner from '$components/Banner/index.svelte';
	import Description from '$components/Description/index.svelte';
	import { t } from '$vendor/i18n/state';

	const sliderData = [
		{
			description: 'fdsffffff',
			image: '/designs/utilaj_1.webp',
			selected: true
		},
		{
			description: 'aaaaaaa',
			image: 'designs/utilaj_2.webp',
			selected: false
		},
		{
			description: 'bbbb',
			image: 'designs/utilaj_3.webp',
			selected: false
		}
	];
</script>

<SlideShow data={sliderData} auto rotation />
<Banner image="designs/utilaj_2.webp" />
<Description title={$t('machinary.title')} description={$t('machinary.description')} />
