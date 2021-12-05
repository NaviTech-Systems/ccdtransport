<script lang="ts">
	export let icon: string, title: string, description: string;
</script>

<div class="card">
	<div class="icon">
		<img src={icon} alt={title} height="40px" />
	</div>
	<div class="title">
		<h3>{title}</h3>
	</div>
	<div class="description">
		<p>{description}</p>
	</div>
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	.card {
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: $background-secondary;
		padding: 2rem;

		border-radius: 10px;
		visibility: visible;
		animation-delay: 0.3s;
		box-sizing: border-box;
		box-shadow: 0px 0px 3px #ddd8d87a;
		position: relative;
		-webkit-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;

		overflow: hidden;
		/* min-width: 400px; */

		.icon {
			border-radius: 50px;
			padding: 0.3rem;
			height: 70px;
			width: 70px;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			background: transparentize($color: $secondary-color, $amount: 0.3);
		}

		.description {
			p {
				color: $font-color;
			}
		}

		&:hover {
			-webkit-transform: translateY(-10px);
			transform: translateY(-10px);
		}

		&:hover::after {
			width: 100%;
			left: 0;
		}

		&::after {
			content: '';
			clear: both;
			display: block;
			position: absolute;

			-webkit-transition: all 0.3s ease-in-out;
			-moz-transition: all 0.3s ease-in-out;
			transition: all 0.3s ease-in-out;
			width: 0%;
			height: 5px;
			background: $secondary-color;
			bottom: 0;
			right: 0;
		}
	}
</style>
