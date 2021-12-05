<script lang="ts">
	import Navbar from '$components/Admin/Navbar.svelte';
	import Sidebar from '$components/Admin/Sidebar.svelte';
	import { adminInterceptor } from '$interceptors/admin';
	import { adminReducer } from '$reducers/admin';
	import { adminStore } from '$state/admin';

	import { createSlicer } from '$vendor/sedux';

	const slicer = createSlicer(adminInterceptor, adminReducer, 'admin', adminStore);
</script>

<Navbar />
<div class="container">
	<Sidebar />
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-flow: row;

		.content {
			padding: 1rem;
			border-radius: 10px;
			height: 100%;
			width: 100%;
		}
	}
</style>
