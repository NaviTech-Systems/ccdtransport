<script>
	import Navbar from '$vendor/mase/Navbar/index.svelte';
	import Group from '$vendor/mase/Navbar/Group.svelte';
	import Item from '$vendor/mase/Navbar/Item.svelte';
</script>

<Navbar>
	<svelte:fragment slot="desktop">
		<Item effect link to="/">Home</Item>
		<Item effect link to="/offer">Cerere Oferta</Item>
		<Item effect link to="/contact">Contact</Item>
		<Group dir="center">
			<Item effect link to="/"><img src="designs/logo.svg" style="height: 100%;" alt="logo" /></Item
			>
		</Group>
		<Group dir="right">
			<Item effect link to="/houses">Case Mobile</Item>
			<Item effect link to="/machinary">Utilaje</Item>
			<Item effect link to="/cargo">Marfa industriala</Item>
		</Group>
	</svelte:fragment>
	<svelte:fragment slot="tablet">
		<Item effect link to="/"><img src="designs/logo.svg" style="height: 100%;" alt="logo" /></Item>
		<Group dir="right">
			<Item effect link to="/">Home</Item>
			<Item effect link to="/offer">Cerere Oferta</Item>
			<Item effect link to="/contact">Contact</Item>
			<Item effect link to="/houses">Case Mobile</Item>
			<Item effect link to="/machinary">Utilaje</Item>

			<Item effect link to="/cargo">Marfa industriala</Item>
		</Group>
	</svelte:fragment>
	<svelte:fragment slot="mobile">
		<Item effect link to="/">Home</Item>
		<Item effect link to="/offer">Cerere Oferta</Item>
		<Item effect link to="/contact">Contact</Item>
		<Item effect link to="/houses">Case Mobile</Item>
		<Item effect link to="/machinary">Utilaje</Item>

		<Item effect link to="/cargo">Marfa industriala</Item>
	</svelte:fragment>
	<svelte:fragment slot="logo">
		<Group dir="center">
			<Item effect link to="/"><img src="designs/logo.svg" style="height: 100%;" alt="logo" /></Item
			>
		</Group>
	</svelte:fragment>
</Navbar>
