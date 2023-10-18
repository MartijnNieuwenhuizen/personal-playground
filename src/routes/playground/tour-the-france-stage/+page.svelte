<!-- 
	@TODO: Add data here like the GRRR blog with the date etc. 
	Autofill this date when the file is generated :) with the generator script.
-->
<script>
	import PlaygroundItem from '$lib/components/PlaygroundItem/index.svelte';

	let title = 'Tour the france stage';
	let description = `<p>A outline of the Tour the France. Made with CSS. The cyclist is moved with CSS scroll-timeline.</p>`;
</script>

<PlaygroundItem {title} {description} hidePageEffect={true}>
	<div class="container">
		<div class="sticky">
			<!-- <img src="/stage.jpeg" alt="" /> -->

			<div class="stage-outline">
				<div class="stage-scroller" />
			</div>

			<div class="runner" />
		</div>
	</div>
</PlaygroundItem>

<style>
	:global(html) {
		/* @TODO: Make this scoped to a component! */
		scroll-timeline: --stage-timeline;
	}

	.container {
		position: relative;
		min-height: 600vh;
	}
	.sticky {
		position: sticky;
		top: 30%;
	}

	/* img {
		width: 100%;
		height: auto;
	} */

	.stage-outline {
		width: 100%;
		height: 100%;
		background-color: hsla(64, 80%, 77%);
		opacity: 0.5;
		aspect-ratio: 4 / 1;

		/* Full version */
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
		/* Stage outline */
		clip-path: polygon(
			0% 63%,
			3% 48%,
			12% 76%,
			15% 72%,
			20% 81%,
			21% 73%,
			25% 72%,
			27% 84%,
			35% 80%,
			44% 58%,
			46% 63%,
			50% 52%,
			59% 75%,
			65% 75%,
			69% 47%,
			75% 74%,
			82% 28%,
			85% 47%,
			90% 15%,
			98% 51%,
			100% 51%,
			100% 100%,
			0% 101%
		);
	}

	@keyframes stage-scroller {
		from {
			transform: scaleX(0);
		}
		to {
			transform: scaleX(100%);
		}
	}

	.stage-scroller {
		background-color: lime;
		width: 100%;
		height: 100%;

		transform-origin: left;
		animation: stage-scroller auto linear;
		animation-timeline: --stage-timeline;
	}

	@keyframes runner-path {
		0% {
			left: 0%;
			top: 63%;
		}
		3% {
			left: 3%;
			top: 48%;
		}
		12% {
			left: 12%;
			top: 76%;
		}
		15% {
			left: 15%;
			top: 72%;
		}
		20% {
			left: 20%;
			top: 81%;
		}
		21% {
			left: 21%;
			top: 73%;
		}
		25% {
			left: 25%;
			top: 72%;
		}
		27% {
			left: 27%;
			top: 84%;
		}
		35% {
			left: 35%;
			top: 80%;
		}
		44% {
			left: 44%;
			top: 58%;
		}
		46% {
			left: 46%;
			top: 63%;
		}
		50% {
			left: 50%;
			top: 52%;
		}
		59% {
			left: 59%;
			top: 75%;
		}
		65% {
			left: 65%;
			top: 75%;
		}
		69% {
			left: 69%;
			top: 47%;
		}
		75% {
			left: 75%;
			top: 74%;
		}
		82% {
			left: 82%;
			top: 28%;
		}
		85% {
			left: 85%;
			top: 47%;
		}
		90% {
			left: 90%;
			top: 15%;
		}
		98% {
			left: 98%;
			top: 51%;
		}
		100% {
			left: 100%;
			top: 51%;
		}
	}

	.runner {
		position: absolute;
		top: 0;
		left: 0;

		width: 1rem;
		height: 0.65rem;
		background-color: red;
		transform: translate(-50%, -50%);

		transform-origin: left;
		animation: runner-path auto linear;
		animation-timeline: --stage-timeline;
	}
</style>
