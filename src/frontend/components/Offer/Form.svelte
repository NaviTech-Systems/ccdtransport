<script lang="ts">
	import Input from '$vendor/mase/Input.svelte';
	import TextArea from '$vendor/mase/TextArea.svelte';
	import Captcha from '$components/Captcha/index.svelte';
	import Button from '$vendor/mase/Button.svelte';
	import { createSlicer } from '$vendor/sedux';
	import { offersInterceptor } from '$interceptors/offers';
	import { offersReducer } from '$reducers/offers';
	import { offersStore, selectOffer } from '$state/offers';
	import { sendOffer } from '$actions/offers';
	import { onDestroy } from 'svelte';

	const slicer = createSlicer(offersInterceptor, offersReducer, 'offers', offersStore);
	const state = selectOffer;

	let doRecaptcha;

	const errors = {
		email: false,
		company: false,
		address: false,
		contactPerson: false,
		phone: false,
		message: false,
		function: false,
		cargoDescription: false,
		startAdress: false,
		endAdress: false,
		transportTimeEstimated: false,
		lentgh: false,
		width: false,
		height: false,
		startDate: false
	};

	const message = {
		company: '',
		address: '',
		contactPerson: '',
		phone: '',
		email: '',
		message: '',
		function: '',
		cargoDescription: '',
		startAdress: '',
		endAdress: '',
		transportTimeEstimated: '',
		lentgh: '',
		width: '',
		height: '',
		startDate: new Date()
	};

	const handleOnSuccessCaptcha = () => {
		// slicer.dispatch(sendOffer(message));
	};

	const handleSubmit = () => {
		slicer.dispatch(sendOffer(message));
		if (Object.entries(errors).some(([_, item]) => item)) return;
		doRecaptcha();
	};

	onDestroy(() => {
		slicer.destroy();
	});
</script>

<div class="form">
	<div class="col">
		<h2>Dettali Companie</h2>
		<Input
			label="Company"
			bigLabel
			bind:value={message.company}
			notEmpty
			bind:error={errors.company}
		/>

		<Input
			label="Address"
			bigLabel
			bind:value={message.address}
			notEmpty
			bind:error={errors.address}
		/>
		<Input
			label="Contact Person"
			bigLabel
			bind:value={message.contactPerson}
			notEmpty
			bind:error={errors.contactPerson}
		/>
		<Input
			label="Function"
			bigLabel
			bind:value={message.function}
			notEmpty
			bind:error={errors.function}
		/>
		<Input
			label="Phone"
			bigLabel
			bind:value={message.phone}
			notEmpty
			bind:error={errors.phone}
			pattern={new RegExp(/([0-9])+/)}
		/>
		<Input
			label="Email"
			bigLabel
			bind:value={message.email}
			notEmpty
			pattern={new RegExp(
				/([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/
			)}
			bind:error={errors.email}
		/>
		<TextArea label="Message" bigLabel rows={8} bind:value={message.message} />
	</div>
	<div class="col">
		<h2>Dettali Transport</h2>

		<Input
			label="Cargo Description"
			bigLabel
			bind:value={message.cargoDescription}
			notEmpty
			bind:error={errors.cargoDescription}
		/>
		<Input
			label="Start Address"
			bigLabel
			bind:value={message.startAdress}
			notEmpty
			bind:error={errors.startAdress}
		/>
		<Input
			label="End Address"
			bigLabel
			bind:value={message.endAdress}
			notEmpty
			bind:error={errors.endAdress}
		/>
		<Input
			label="Transport Time Estimated"
			bigLabel
			bind:value={message.transportTimeEstimated}
			notEmpty
			bind:error={errors.transportTimeEstimated}
		/>
		<Input
			label="Length"
			bigLabel
			bind:value={message.lentgh}
			notEmpty
			bind:error={errors.lentgh}
		/>
		<Input label="Width" bigLabel bind:value={message.width} notEmpty bind:error={errors.width} />
		<Input
			label="Height"
			bigLabel
			bind:value={message.height}
			notEmpty
			bind:error={errors.height}
		/>
		<Input
			label="Date"
			type="date"
			bigLabel
			bind:value={message.startDate}
			notEmpty
			bind:error={errors.startDate}
		/>
		<div class="actions">
			<Button
				color="primary"
				on:click={handleSubmit}
				loading={$state.state === 'loading'}
				error={$state.state === 'failed'}>Submit</Button
			>
		</div>
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
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-auto-flow: column;
		grid-gap: 1rem;

		@media screen and (max-width: 800px) {
			display: flex;
			flex-flow: column;
		}

		.col {
			display: flex;
			flex-flow: column;
			.actions {
				margin-top: 1rem;
				margin-inline-start: auto;
			}
		}
	}
</style>
