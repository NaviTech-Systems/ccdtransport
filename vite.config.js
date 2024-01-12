import { resolve } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
export default {
	plugins: [sveltekit()],
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
	},
	server: {
		fs: {
			strict: false
		},
		port: 3000
	},
	legacy: {
		buildSsrCjsExternalHeuristics: true
	},
	ssr: {
		noExternal: [
			'svelte',
			'svelte/store',
			'svelte/easing',
			'svelte/motion',
			'svelte/transition',
			'svelte/internal',

			'svelte-grid',
			'ua-parser-js'
		],
		external: ['@sveltejs/kit']
	},
	optimizeDeps: {
		exclude: ['@sveltejs/kit']
	}
};
