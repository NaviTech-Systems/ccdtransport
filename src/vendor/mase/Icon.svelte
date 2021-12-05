<script>
	export let name = '',
		size = '15px',
		style = '';
</script>

<img
	src="/api/static/icons/{name}.svg"
	alt={name}
	class="icon"
	width={size}
	height={size}
	{style}
	on:click
/>
