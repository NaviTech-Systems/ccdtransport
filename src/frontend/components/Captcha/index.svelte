<script>
	import { onDestroy } from 'svelte';

	export let onSuccess = () => {},
		doRecaptcha = () => {};

	const key = '6Lfv7uQcAAAAABMj162U8_ab8deoUO_gmytC0D01';

	let captchaLoaded = false;

	doRecaptcha = () => {
		if (!captchaLoaded) return;
		grecaptcha.ready(() => {
			grecaptcha.execute(key, { action: 'submit' }).then(() => {
				onSuccess();
			});
		});
	};

	onDestroy(() => {
		try {
			document.querySelector('.grecaptcha-badge').parentElement.innerHTML = '';
		} catch (error) {}
	});

	const loadCaptcha = () => {
		captchaLoaded = true;
	};
</script>

<div>
	<script
		src="https://www.google.com/recaptcha/api.js?render={key}"
		async
		defer
		on:load={loadCaptcha}></script>
</div>
