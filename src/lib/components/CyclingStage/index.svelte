<script lang="ts">
	export let title: string;
	export let totalDistance: number;

	// create an array of 10 values based on the totalDistance.
	// This is used to create the dots on the stage.
	let distanceIndicators: number[] = [];
	for (let index = 1; index <= 10; index++) {
		distanceIndicators.push(Math.round((totalDistance / 10) * index));
	}
</script>

<div class="container">
	<div class="sticky">
		<h2 class="title">{title}</h2>
		<div class="stage-outline">
			<div class="stage-scroller" />
		</div>

		<ul class="distance-container">
			{#each distanceIndicators as distanceIndicators}
				<li>{distanceIndicators}km</li>
			{/each}
		</ul>

		<div class="runner"><span>🚴🏻</span></div>
	</div>
</div>

<style type="scss">
	:global(html) {
		/* @TODO: Make this scoped to a component! */
		scroll-timeline: --stage-timeline;
	}

	.container {
		position: relative;
		min-height: 600vh;
		padding: 0 3rem;
	}
	.sticky {
		position: sticky;
		top: 30%;

		/* Create container so we can use container-relative units */
		container-type: size;
		aspect-ratio: 4 / 1;
	}

	.title {
		position: absolute;
		top: 0;
	}

	.stage-outline {
		width: 100%;
		height: 100%;
		background-color: hsla(64, 80%, 77%);
		opacity: 0.5;
		aspect-ratio: 4 / 1;

		clip-path: polygon(var(--stage-dots), 100% 100%, 0% 100%);
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

	/* 
		@TODO: Use prettier colors.
		@TODO: Write how this works on the page.
		@TODO: Make even more dynamic so I can add multiple stages on this page! :).
		@TODO: Check if I can improve this with https://developer.mozilla.org/en-US/docs/Web/CSS/offset-path !!!!!
		*/

	@keyframes runner-path {
		from {
			offset-distance: 0;
		}
		to {
			// @TODO: This value isn't nice.
			offset-distance: 57.5%;
		}
	}

	.runner {
		position: absolute;
		top: 0;
		left: 0;

		// @TODO: Fun, but not possible to turn the runner.
		offset-path: polygon(var(--stage-dots));

		// transform-origin: left;
		animation: runner-path auto linear forwards;
		animation-timeline: --stage-timeline;
		font-size: 1.5rem;
	}

	.runner span {
		display: block;
		transform: rotateY(180deg);
	}

	.distance-container {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		margin: 0;
		padding: 0;

		list-style-type: none;
	}
</style>
