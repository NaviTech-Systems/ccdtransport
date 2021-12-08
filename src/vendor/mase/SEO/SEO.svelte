<script lang="ts">
	import type { Data } from './types/SEO';

	export let data: Data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={data.url} />
	<meta property="og:site_name" content={data.name} />
	<meta property="og:image" itemprop="image primaryImageOfPage" content={data.image} />
	<meta property="og:description" content={data.description} />
	<meta name="twitter:title" content={data.name} />
	<meta name="twitter:description" content={data.description} />
	<meta name="twitter:image:src" content={data.image} />
	{#if data.keywords && data.keywords.length}
		<meta name="keywords" content={data.keywords.join(', ')} />
	{/if}
</svelte:head>
