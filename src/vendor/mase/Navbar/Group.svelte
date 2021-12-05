<script lang="ts">
	export let dir = 'left';
</script>

<group class={dir}>
	<slot />
</group>

<style lang="scss">
	group {
		display: flex;
		flex-wrap: wrap;

		&.right {
			margin-inline-start: auto;
		}
		&.center {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: calc(100% - 0rem);
			pointer-events: none;
		}

		& > :global(item) {
			margin: 0 0.4rem;
			pointer-events: all;
		}
	}
</style>
