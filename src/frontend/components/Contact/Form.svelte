<script lang="ts">
	import Input from '$vendor/mase/Input.svelte';
	import TextArea from '$vendor/mase/TextArea.svelte';
	import Captcha from '$components/Captcha/index.svelte';
	import Button from '$vendor/mase/Button.svelte';
	import { createSlicer } from '$vendor/sedux';
	import { contactReducer } from '$reducers/contact';
	import { contactStore, selectContactState } from '$state/contact';
	import { contactInterceptor } from '$interceptors/contact';
	import { sendMessage } from '$actions/contact';
	import { onDestroy } from 'svelte';
	import { t } from '$vendor/i18n/state';

	const slicer = createSlicer(contactInterceptor, contactReducer, 'contact', contactStore);
	const state = selectContactState;

	let doRecaptcha;

	const errors = {
		email: false,
		name: false
	};

	const message = {
		name: '',
		email: '',
		message: ''
	};

	const handleOnSuccessCaptcha = () => {
		// slicer.dispatch(sendMessage(message));
	};

	const handleSubmit = () => {
		slicer.dispatch(sendMessage(message));
		if (Object.entries(errors).some(([_, item]) => item)) return;
		doRecaptcha();
	};

	onDestroy(() => {
		slicer.destroy();
	});
</script>

<div class="form">
	<Input
		label={$t('contact.name')}
		bigLabel
		bind:value={message.name}
		notEmpty
		bind:error={errors.name}
	/>
	<Input
		label={$t('contact.email')}
		bigLabel
		bind:value={message.email}
		notEmpty
		pattern={new RegExp(
			/([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/
		)}
		bind:error={errors.email}
	/>
	<TextArea label={$t('contact.message')} bigLabel rows={8} bind:value={message.message} />
	<div class="actions">
		<Button
			color="primary"
			on:click={handleSubmit}
			loading={$state.state === 'loading'}
			error={$state.state === 'failed'}>{$t('contact.submit')}</Button
		>
	</div>
</div>
<Captcha onSuccess={handleOnSuccessCaptcha} bind:doRecaptcha />

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	.form {
		width: calc(100% - 4rem);
		background: $background-secondary;
		padding: 2rem;
		border-radius: 10px;
		display: flex;
		flex-flow: column;

		.actions {
			margin-top: 1rem;
			margin-inline-start: auto;
		}
	}
</style>
