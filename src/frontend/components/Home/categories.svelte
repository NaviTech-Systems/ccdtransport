<script>
	import { t } from '$vendor/i18n/state';

	import Button from '$vendor/mase/Button.svelte';
</script>

<div class="categories">
	<div class="item">
		<img class="icon" src="designs/house.png" height="40px" alt="houses" />
		<div class="title">{$t('category.houses-title')}</div>
		<div class="description">
			{$t('category.houses-description')}
		</div>
		<Button
			link="/houses"
			style="width: fit-content;"
			textStyle="font-size: 0.8rem;"
			color="primary">{$t('category.learnMore')}</Button
		>
	</div>
	<div class="item">
		<img class="icon" src="designs/cargo.webp" height="40px" alt="cargo" />
		<div class="title">{$t('category.cargo-title')}</div>
		<div class="description">
			{$t('category.cargo-description')}
		</div>
		<Button link="/cargo" style="width: fit-content;" textStyle="font-size: 0.8rem;" color="primary"
			>{$t('category.learnMore')}</Button
		>
	</div>
	<div class="item">
		<img class="icon" src="designs/utilaj.png" height="40px" alt="machinary" />
		<div class="title">{$t('category.machinary-title')}</div>
		<div class="description">
			{$t('category.machinary-description')}
		</div>
		<Button
			link="/machinary"
			style="width: fit-content;"
			textStyle="font-size: 0.8rem;"
			color="primary">{$t('category.learnMore')}</Button
		>
	</div>
</div>

<style lang="scss">
	.categories {
		height: calc(200px);
		width: calc(100% - 2rem);
		background: #f5f5f5;
		display: flex;
		flex-flow: row;
		padding: 1.5rem 1rem;

		@media screen and (max-width: 768px) {
			flex-flow: column;
			height: auto;
		}

		@media screen and (min-width: 768px) {
			justify-content: space-between;
			justify-content: center;
			align-items: center;
			padding: 0 6rem;
			width: calc(100% - 12rem);
		}

		.item {
			flex: 1;
			padding: 20px;
			display: flex;
			flex-flow: column;
			text-align: center;
			justify-content: center;
			align-items: center;

			.icon {
				margin-bottom: 0.4rem;
			}

			.title {
				font-size: 1rem;
				font-weight: 500;
				margin-bottom: 1rem;
			}

			.description {
				font-size: 0.7rem;
				margin-bottom: 1rem;
			}
		}
	}
</style>
