<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	const title = `Apple's WWDC 2025 Animation`;
	const description = '';
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<div class="container">
		<h2>
			<span class="ww">WW</span>
			<span class="dc">DC</span>
			<span class="num">25</span>
		</h2>
	</div>
</ExperimentItem>

<style lang="scss">
	// Include variable font on this page
	@font-face {
		font-family: 'Roboto flex';
		src: url('/fonts/Roboto Flex Font.ttf') format('truetype');
		font-weight: 100 900;
		font-style: normal;
		font-variation-settings:
			'YTLC' 416 570,
			'YTUC' 528 760,
			'YOPQ' 25 135,
			'wght' 100 900,
			'wdth' 25 151;
	}

	@keyframes font-overshoot {
		0% {
			font-variation-settings:
				'YTLC' var(--ytlc, 416),
				'YTUC' var(--ytuc, 528),
				'YOPQ' 90,
				'wght' 500,
				'wdth' 100;
		}

		40% {
			font-variation-settings:
				'YTLC' var(--ytlc, 416),
				'YTUC' var(--ytuc, 528),
				'YOPQ' 60,
				'wght' 250,
				'wdth' 80;
		}

		70% {
			font-variation-settings:
				'YTLC' var(--ytlc, 416),
				'YTUC' var(--ytuc, 528),
				'YOPQ' 135,
				'wght' 700,
				'wdth' 125;
		}

		100% {
			font-variation-settings:
				'YTLC' var(--ytlc, 416),
				'YTUC' var(--ytuc, 528),
				'YOPQ' 90,
				'wght' 500,
				'wdth' 100;
		}
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	h2 {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: 0;
		font-family: 'Roboto flex', sans-serif;
		font-size: 20vw;
		line-height: 0.8;
		letter-spacing: -0.01em;
		font-variation-settings:
			'YTLC' var(--ytlc, 416),
			'YTUC' var(--ytuc, 528),
			'YOPQ' 90,
			'wght' 500,
			'wdth' 100;

		@media (prefers-reduced-motion) {
			font-variation-settings: normal;
		}

		span {
			animation: font-overshoot 1.6s ease-in-out;

			@media (prefers-reduced-motion) {
				animation: none;
			}

			&:nth-child(2) {
				animation-delay: 0.1s;
			}

			&:nth-child(3) {
				animation-delay: 0.2s;
			}

			&.ww {
				background: linear-gradient(to right, #338887, #f76c35);
				background-clip: text;
				color: transparent;
				-webkit-text-fill-color: transparent;
			}

			&.dc {
				background: linear-gradient(to right, #ee5b66, #2e9de3);
				background-clip: text;
				color: transparent;
				-webkit-text-fill-color: transparent;
			}

			&.num {
				z-index: 1;
				position: relative;
				color: #f0f0f0;
				text-shadow:
					2px 2px 4px rgb(0 0 0 / 30%),
					3px 3px 5px rgb(200 200 200 / 40%),
					4px 4px 6px rgb(180 180 180 / 20%),
					0 0 2px #fff;
				transform: perspective(500px) translateZ(0.5px);
				transform-style: preserve-3d;
				-webkit-text-stroke: 2px #fff;

				&::after {
					content: '25';
					z-index: -1;
					position: absolute;
					top: 0;
					left: 0;
					color: transparent;
					text-shadow: 0 0 2px rgb(255 255 255 / 70%);
					filter: blur(1px);
				}

				&::before {
					content: '25';
					z-index: -2;
					position: absolute;
					top: 0;
					left: 0;
					color: rgb(220 220 220 / 30%);
					text-shadow: -1px -1px 2px rgb(200 200 200 / 50%);
					filter: blur(2px);
					transform: translateZ(-1px);
				}
			}
		}
	}
</style>
