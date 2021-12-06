<script lang="ts">
	import { onMount } from 'svelte';

	export let query: string;

	let mql: MediaQueryList;
	let mqlListener: (v: any) => boolean;
	let matches = null;

	onMount(() => {
		removeActiveListener();
		addNewListener(query);
		return () => {
			removeActiveListener();
		};
	});

	function addNewListener(query: string): void {
		mql = window.matchMedia(query);
		matches = mql.matches;

		mqlListener = (v) => (matches = v.matches);
		mql.addEventListener('change', mqlListener);
	}

	function removeActiveListener(): void {
		if (mql && mqlListener) {
			mql.removeEventListener('change', mqlListener);
		}
	}
</script>

<slot {matches} />
