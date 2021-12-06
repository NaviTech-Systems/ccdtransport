<script lang="ts">
	import { Button } from '../mase';
	import Dropdown, { Item } from '../mase/Dropdown/index';
	import { dispatch } from '../sedux';
	import { changeLanguage } from './actions';
	import { languages } from './state';

	$: locales = [];
	$: if ($languages.locales) locales = Object.keys($languages.locales);

	const changeLocale = (locale: string): void => {
		dispatch(() => changeLanguage(locale), 'i18n');
	};
</script>

<Dropdown>
	<div slot="trigger">
		<Button
			effect
			style="width: 19px; height: 19px; padding: 0px; border-radius: 40px; position: relative; display: flex;"
		>
			<div style="display: inline-flex; height: 15px; margin: auto;" slot="element">
				<img
					src={`/designs/flags/${$languages.locale || $languages.default}.svg`}
					alt={$languages.locale || $languages.default}
					height="15px"
				/>
			</div></Button
		>
	</div>
	{#each locales as locale}
		<Item
			on:click={() => {
				changeLocale(locale);
			}}
		>
			<div class="option">
				<img src={`/designs/flags/${locale}.svg`} alt={locale} height="15px" />
				<div class="text">
					<span>
						{locale}
					</span>
				</div>
			</div>
		</Item>
	{/each}
</Dropdown>

<style lang="scss">
	.option {
		display: flex;
		flex-flow: row;

		.text {
			text-align: center;
			width: 100%;
			line-height: 1.2;
			span {
				margin-left: 0.4rem;
			}
		}
	}
</style>
