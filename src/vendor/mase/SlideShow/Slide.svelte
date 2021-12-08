<script lang="ts">
	import type { SlideProps } from './types/slide';

	export let slide: SlideProps;
</script>

<div
	class="slide"
	class:current={slide.selected}
	style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('{slide.image}') no-repeat center center/cover;"
>
	{#if slide.description}
		<div class="content">
			<p>{slide.description}</p>
		</div>
	{/if}
</div>

<style lang="scss">
	.slide {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 0.4s ease-in-out;
	}

	.slide.current {
		opacity: 1;
	}

	.slide .content {
		position: absolute;
		bottom: 70px;
		left: -600px;
		opacity: 0;
		width: 500px;
		background-color: rgba(255, 255, 255, 0.8);
		color: #333;
		padding: 2rem;

		p {
			margin: 0;
		}
	}

	@media screen and (max-width: 500px) {
		.slide .content {
			width: 100%;
		}
	}

	.slide.current .content {
		opacity: 1;
		transform: translateX(600px);
		transition: all 0.7s ease-in-out 0.3s;
	}

	/* .slide .content h1 {
		margin-bottom: 10px;
	} */
</style>
