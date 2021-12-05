<script lang="ts">
	import { createPost, updatePost } from '$actions/admin';
	import type { Connect as ConnectCategory } from '$backend/models/category';
	import type { Post, Update as UpdatePostModel } from '$backend/models/post';
	import { GOT_POST } from '$constants/admin';
	import { adminStore } from '$state/admin';

	import Button from '$vendor/mase/Button.svelte';
	import Input from '$vendor/mase/Input.svelte';
	import { Select, MultipleSelect } from '$vendor/mase/Select';
	import Circle from '$vendor/mase/Spinners/Circle.svelte';
	import TextArea from '$vendor/mase/TextArea.svelte';
	import { dispatch } from '$vendor/sedux';
	import { addListener } from '$vendor/sedux/listener';

	$: ({ create, tags, categories, post } = $adminStore.blog);

	let postData = {} as UpdatePostModel;

	const handlePostClick = () => {
		dispatch(() => updatePost(postData), 'admin');
	};

	const handleCategorySelect = ({ detail }) => {
		postData.category = { id: detail.value };
	};

	const handleTagSelect = ({ detail }) => {
		postData.tags = detail.map((item) => item.id);
	};

	addListener(GOT_POST, () => {
		postData = {
			...post.result,
			tags: post.result.tags.map((item) => ({
				id: item.id
			})),
			category: { id: post.result.categoryId }
		};
	});
</script>

<div class="main" class:loading={post.state === 'loading'}>
	{#if post.state === 'loading'}
		<Circle color="#258cf4" size={40} />
	{:else if post.state === 'failed'}
		<p>{post.error}</p>
	{:else}
		<Input name={'Title'} placeholder={'Title'} defaultValue={post.result.title} />
		<div class="group">
			<Select
				options={categories.results.map((item) => ({ value: item.id, text: item.name }))}
				value={{ text: post.result.category?.name, value: post.result.category?.id }}
				placeholder={'Category'}
				name="Category"
				loading={categories.state === 'loading'}
				on:select={handleCategorySelect}
			/>
			<MultipleSelect
				options={tags.results.map((item) => ({ value: item.id, text: item.name }))}
				defaultValue={post.result.tags?.map((item) => ({ value: item.id, text: item.name })) || []}
				name="Tag"
				placeholder={'Tag'}
				loading={tags.state === 'loading'}
				on:select={handleTagSelect}
			/>
		</div>
		<TextArea placeholder={'Content'} rows={10} bind:value={post.result.content} />
		<div class="actions">
			<Button
				on:click={handlePostClick}
				loading={create.state === 'loading'}
				error={create.state === 'failed'}
				color="secondary">Post</Button
			>
		</div>
	{/if}
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

		&.loading {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
		}

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
