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

		try {
			// Chrome & Firefox
			mql.addEventListener('change', mqlListener);
		} catch (e1) {
			try {
				// Safari
				mql.addListener(mqlListener);
			} catch (e2) {
				console.error(e2);
			}
		}
	}

	function removeActiveListener(): void {
		if (mql && mqlListener) {
			try {
				// Chrome & Firefox
				mql.removeEventListener('change', mqlListener);
			} catch (e1) {
				try {
					// Safari
					mql.removeListener(mqlListener);
				} catch (e2) {
					console.error(e2);
				}
			}
		}
	}
</script>

<slot {matches} />
