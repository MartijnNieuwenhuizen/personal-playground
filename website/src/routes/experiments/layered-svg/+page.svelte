<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import ScrollTimelineWarning from '$lib/components/ScrollTimelineWarning/index.svelte';

	const title = 'Layered svg';
	const description = `I want to separate the layers of an SVG and show them on top of each other.`;
</script>

<ScrollTimelineWarning />

<ExperimentItem {title} {description} showPageEffect={true}>
	<Row area="bottom">
		<Block size="medium">
			<h2>Layered divs</h2>
			<p>Let's start with 3 colored div's to create the CSS that's needed to show these layers.</p>

			<div class="container">
				<div class="version-1">
					<div class="version-1__item"></div>
					<div class="version-1__item"></div>
					<div class="version-1__item"></div>
				</div>
			</div>
		</Block>
	</Row>

	<Row area="bottom">
		<Block size="medium">
			<h2>Layered images</h2>
			<p>
				Next up, 3 images, because I don't have the SVG's (yet). With a small difference in the
				animation.
			</p>

			<div class="container">
				<div class="version-2">
					<div class="version-2__item">
						<img src="/images/layered-svg/layered-svg-1.jpg" alt="" />
					</div>
					<div class="version-2__item">
						<img src="/images/layered-svg/layered-svg-2.png" alt="" />
					</div>
					<div class="version-2__item">
						<img src="/images/layered-svg/layered-svg-3.png" alt="" />
					</div>
				</div>
			</div>
		</Block>
	</Row>
</ExperimentItem>

<style lang="scss">
	.container {
		position: relative;
		height: 200vh;
		view-timeline-name: --container-scrollbar;
	}
	.version-1 {
		// --skew: skew(-35deg, -15deg);
		--skew: skew(-40deg, -10deg);
		--offset: min(5rem, 10vw);
		--size: min(20rem, 30cqw);

		position: sticky;
		top: 4rem;

		display: grid;
		grid-template-rows: var(--size);
		grid-template-columns: var(--size);
		padding: calc(var(--offset) * 2);

		// Ensure we can use container sizes.
		container-type: inline-size;
	}
	.version-1__item {
		// Ensure they are all on the same position.
		grid-column: 1;
		grid-row: 1;

		transform: skew(0) translate(0, 0);
	}

	@keyframes version-1-top {
		to {
			transform: var(--skew) translate(var(--offset), var(--offset));
		}
	}
	@keyframes version-1-middle {
		to {
			transform: var(--skew) translate(0, 0);
		}
	}
	@keyframes version-1-bottom {
		to {
			transform: var(--skew) translate(calc(var(--offset) * -1), calc(var(--offset) * -1));
		}
	}

	.version-1__item:nth-of-type(1) {
		background-color: goldenrod;
		animation: version-1-top linear forwards;

		// Scroll timeline.
		animation-range: 100vh calc(100% - 100vh);
		animation-timeline: --container-scrollbar;
	}
	.version-1__item:nth-of-type(2) {
		background-color: lime;
		animation: version-1-middle linear forwards;

		// Scroll timeline.
		animation-range: 100vh calc(100% - 100vh);
		animation-timeline: --container-scrollbar;
	}
	.version-1__item:nth-of-type(3) {
		background-color: blueviolet;
		animation: version-1-bottom linear forwards;

		// Scroll timeline.
		animation-range: 100vh calc(100% - 100vh);
		animation-timeline: --container-scrollbar;
	}

	/**
	 * Version 2
	 */
	.version-2 {
		--offset: min(10rem, 20vw);
		--skew: -10deg;
		--rotate: 65deg;
		--size: min(40rem, 50cqw);

		position: sticky;
		top: 4rem;

		display: grid;
		grid-template-rows: var(--size);
		grid-template-columns: var(--size);
		padding: 2rem;

		// Ensure we can use container sizes.
		container-type: inline-size;
	}
	@keyframes version-2-top {
		to {
			transform: rotateX(var(--rotate)) skew(var(--skew)) translateY(var(--offset));
		}
	}
	@keyframes version-2-middle {
		to {
			transform: rotateX(var(--rotate)) skew(var(--skew)) translateY(0);
		}
	}
	@keyframes version-2-bottom {
		to {
			transform: rotateX(var(--rotate)) skew(var(--skew)) translateY(calc(var(--offset) * -1));
		}
	}

	.version-2__item {
		// Ensure they are all on the same position.
		grid-column: 1;
		grid-row: 1;

		transform-style: preserve-3d;
		transform: rotateX(0deg) skew(0deg) translateY(0);
	}
	.version-2__item:nth-of-type(1) {
		animation: version-2-top linear forwards;

		// Scroll timeline.
		animation-range: 100vh calc(100% - 100vh);
		animation-timeline: --container-scrollbar;
	}
	.version-2__item:nth-of-type(2) {
		animation: version-2-middle linear forwards;

		// Scroll timeline.
		animation-range: 100vh calc(100% - 100vh);
		animation-timeline: --container-scrollbar;
	}
	.version-2__item:nth-of-type(3) {
		animation: version-2-bottom linear forwards;

		// Scroll timeline.
		animation-range: 100vh calc(100% - 100vh);
		animation-timeline: --container-scrollbar;
	}

	img {
		width: 100%;
	}
</style>
