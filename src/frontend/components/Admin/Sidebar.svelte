<script lang="ts">
	import Sidebar from '$vendor/mase/Sidebar/index.svelte';
	import Item from '$vendor/mase/Sidebar/Item.svelte';
</script>

<Sidebar title="Admin Panel" opened width={300}>
	<Item link to="/admin/blog">Blog</Item>
	<Item link to="/admin/contact">Contact</Item>
</Sidebar>
