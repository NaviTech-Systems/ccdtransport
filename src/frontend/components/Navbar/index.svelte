<script>
	import Navbar from '$vendor/mase/Navbar/index.svelte';
	import Group from '$vendor/mase/Navbar/Group.svelte';
	import Item from '$vendor/mase/Navbar/Item.svelte';
	import { page } from '$app/stores';
	import Switcher from '$vendor/i18n/Switcher.svelte';
</script>

<Navbar>
	<svelte:fragment slot="desktop">
		<Item effect link to="/" selected={$page.path === '/'}>Home</Item>
		<Item effect link to="/offer" selected={$page.path === '/offer'}>Cerere Oferta</Item>
		<Item effect link to="/contact" selected={$page.path === '/contact'}>Contact</Item>
		<Group dir="center">
			<Item effect link to="/"><img src="designs/logo.svg" style="height: 100%;" alt="logo" /></Item
			>
		</Group>
		<Group dir="right">
			<Item><Switcher /></Item>
			<Item effect link to="/houses" selected={$page.path === '/houses'}>Case Mobile</Item>
			<Item effect link to="/machinary" selected={$page.path === '/machinary'}>Utilaje</Item>
			<Item effect link to="/cargo" selected={$page.path === '/cargo'}>Marfa industriala</Item>
		</Group>
	</svelte:fragment>
	<svelte:fragment slot="tablet">
		<Item effect link to="/"><img src="designs/logo.svg" style="height: 100%;" alt="logo" /></Item>
		<Group dir="right">
			<Item><Switcher /></Item>
			<Item effect link to="/" selected={$page.path === '/'}>Home</Item>
			<Item effect link to="/offer" selected={$page.path === '/offer'}>Cerere Oferta</Item>
			<Item effect link to="/contact" selected={$page.path === '/contact'}>Contact</Item>
			<Item effect link to="/houses" selected={$page.path === '/houses'}>Case Mobile</Item>
			<Item effect link to="/machinary" selected={$page.path === '/machinary'}>Utilaje</Item>

			<Item effect link to="/cargo" selected={$page.path === '/cargo'}>Marfa industriala</Item>
		</Group>
	</svelte:fragment>
	<svelte:fragment slot="mobile">
		<Item><Switcher /></Item>
		<Item effect link to="/" selected={$page.path === '/'}>Home</Item>
		<Item effect link to="/offer" selected={$page.path === '/offer'}>Cerere Oferta</Item>
		<Item effect link to="/contact" selected={$page.path === '/contact'}>Contact</Item>
		<Item effect link to="/houses" selected={$page.path === '/houses'}>Case Mobile</Item>
		<Item effect link to="/machinary" selected={$page.path === '/machinary'}>Utilaje</Item>
		<Item effect link to="/cargo" selected={$page.path === '/cargo'}>Marfa industriala</Item>
	</svelte:fragment>
	<svelte:fragment slot="logo">
		<Item><Switcher /></Item>
		<Group dir="center">
			<Item effect link to="/"><img src="designs/logo.svg" style="height: 100%;" alt="logo" /></Item
			>
		</Group>
	</svelte:fragment>
</Navbar>
