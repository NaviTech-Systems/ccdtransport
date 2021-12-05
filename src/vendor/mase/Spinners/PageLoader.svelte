<script>
	import Circle from './Circle.svelte';
</script>

<div class="main">
	<Circle color="#258cf4" size={35} />
</div>

<style lang="scss">
	.main {
		min-height: calc(100vh - 50px);
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
