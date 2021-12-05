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
		target: '#svelte',
		adapter: adapter(),

		vite: {
			resolve: {
				alias: {
					$components: resolve('src/frontend/components'),
					$actions: resolve('./src/frontend/actions'),
					$state: resolve('./src/frontend/state'),
					$utils: resolve('./src/utils'),
					$constants: resolve('./src/frontend/constants'),
					$reducers: resolve('./src/frontend/reducers'),
					$interceptors: resolve('./src/frontend/interceptors'),
					$vendor: resolve('./src/vendor'),
					$frontend: resolve('./src/frontend'),
					$backend: resolve('./src/backend'),
					$modules: resolve('./src/backend/modules'),
					$controllers: resolve('./src/backend/controllers'),
					$models: resolve('./src/backend/models'),
					$src: resolve('./src')
				}
			}
		},
		ssr: true
	}
};
