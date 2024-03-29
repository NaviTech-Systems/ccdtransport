import sveltePreprocess from 'svelte-preprocess';
import { resolve } from 'path';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({ preserve: ['ld+json'] }),

	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter

		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter()
	}
};
