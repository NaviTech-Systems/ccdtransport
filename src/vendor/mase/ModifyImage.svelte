<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let avatar: string,
		image: FileList,
		height: string,
		width: string,
		style: string,
		rounded = false;
	let imgElement: HTMLImageElement;

	const dispatch = createEventDispatcher();

	const toBase64 = (file: Blob): Promise<string> =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result.toString());
			reader.onerror = (error) => reject(error);
		});

	const handleImageChange = async (): Promise<void> => {
		if (image[0]) imgElement.src = await toBase64(image[0]);
		dispatch('change');
	};
</script>

<avatar style="height:{height};width:{width};{style}" class:rounded>
	<img src={avatar} alt="avatar" class:rounded {height} {width} bind:this={imgElement} />
	<label class="change" for="image" class:rounded />
	<input type="file" id="image" hidden bind:files={image} on:change={handleImageChange} />
</avatar>

<style lang="scss">
	@import './globals.scss';

	avatar {
		display: block;
		position: relative;
		border-radius: 6px;

		&.rounded {
			border-radius: 500px;
		}

		img {
			border-radius: 6px;

			&.rounded {
				border-radius: 500px;
			}
		}

		.change {
			position: absolute;
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;
			transition: all 0.3s linear;
			cursor: pointer;

			&.rounded {
				border-radius: 500px;
			}

			&:hover {
				background: transparentize($color: #000000, $amount: 0.7);
			}
		}
	}
</style>
