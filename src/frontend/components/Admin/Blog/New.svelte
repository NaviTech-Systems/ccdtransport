<script lang="ts">
	import { createPost } from '$actions/admin';
	import type { Connect as ConnectCategory } from '$backend/models/category';
	import { adminStore } from '$state/admin';

	import Button from '$vendor/mase/Button.svelte';
	import Input from '$vendor/mase/Input.svelte';
	import { Select, MultipleSelect } from '$vendor/mase/Select';
	import TextArea from '$vendor/mase/TextArea.svelte';
	import { dispatch } from '$vendor/sedux';

	$: ({ create, tags, categories } = $adminStore.blog);

	const postData = {
		title: '',
		content: '',
		tags: [],
		category: {} as ConnectCategory
	};

	const handlePostClick = () => {
		dispatch(() => createPost(postData), 'admin');
	};
</script>

<div class="main">
	<Input name={'Title'} placeholder={'Title'} bind:value={postData.title} />
	<div class="group">
		<Select
			options={categories.results.map((item) => ({ value: item.id, text: item.name }))}
			bind:value={postData.category}
			placeholder={'Category'}
			name="Category"
			loading={categories.state === 'loading'}
		/>
		<MultipleSelect
			options={tags.results.map((item) => ({ value: item.id, text: item.name }))}
			bind:value={postData.tags}
			name="Tag"
			placeholder={'Tag'}
			loading={tags.state === 'loading'}
		/>
	</div>
	<TextArea placeholder={'Content'} rows={10} bind:value={postData.content} />
	<div class="actions">
		<Button
			on:click={handlePostClick}
			loading={create.state === 'loading'}
			error={create.state === 'failed'}
			color="secondary">Post</Button
		>
	</div>
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';
	.main {
		display: grid;
		grid-auto-flow: row;
		grid-gap: 1rem;
		width: calc(100% - 2rem);
		height: 100%;
		background: $background-secondary;
		padding: 1rem;
		border-radius: 10px;

		.group {
			display: grid;
			grid-auto-flow: column;
			width: 100%;
			grid-gap: 0.5rem;
		}

		.actions {
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}
	}
</style>
