<script>
	import { onMount } from 'svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	const title = 'Two speed Horizontal Scroll';
	const description =
		'Use Horizontal Scroll for 2 elements with different sizes. But they should bot start and end at the end of both elements.';

	/** @type {HTMLElement} */
	let container;
	/** @type {HTMLElement} */
	let target;

	onMount(() => {
		if (!container) return;

		const updateHeight = () => {
			container.style.setProperty('--container-width', `${target.scrollWidth}px`);
		};

		window.addEventListener('resize', updateHeight);
		updateHeight();
	});

	const bitOfText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
</script>

<ExperimentItem {title} {description} showPageEffect={false}>
	<div class="horizontal-scroll" bind:this={container}>
		<div class="horizontal-scroll__sticky">
			<div class="horizontal-scroll__inner" bind:this={target}>
				<div class="horizontal-scroll__list">
					<div class="horizontal-scroll__list-item">
						<div class="horizontal-scroll__text-container">
							<p>{bitOfText}</p>
							<p>{bitOfText}</p>
							<img src="/images/page-transition/forrest.webp" alt="" />
							<p>{bitOfText}</p>
							<p>{bitOfText}</p>
							<img src="/images/page-transition/forrest.webp" alt="" />
							<p>{bitOfText}</p>
							<img src="/images/page-transition/forrest.webp" alt="" />
							<p>{bitOfText}</p>
						</div>
						<h2>1. This is the first section in the list</h2>
					</div>
					<div class="horizontal-scroll__list-item">
						<div class="horizontal-scroll__text-container">
							<p>{bitOfText}</p>
							<img src="/images/page-transition/forrest.webp" alt="" />
							<p>{bitOfText}</p>
							<p>{bitOfText}</p>
							<img src="/images/page-transition/forrest.webp" alt="" />
							<p>{bitOfText}</p>
							<img src="/images/page-transition/forrest.webp" alt="" />
							<p>{bitOfText}</p>
							<p>{bitOfText}</p>
						</div>

						<h2>2. The second section</h2>
					</div>
					<div class="horizontal-scroll__list-item">
						<div class="horizontal-scroll__text-container">
							<p>{bitOfText}</p>
							<img src="/images/page-transition/forrest.webp" alt="" />
							<img src="/images/page-transition/forrest.webp" alt="" />
							<p>{bitOfText}</p>
							<p>{bitOfText}</p>
							<img src="/images/page-transition/forrest.webp" alt="" />
							<p>{bitOfText}</p>
							<p>{bitOfText}</p>
							<p>{bitOfText}</p>
							<img src="/images/page-transition/forrest.webp" alt="" />
						</div>

						<h2>3. You're now in the Third section that's quite far!</h2>
					</div>
					<div class="horizontal-scroll__list-item">
						<div class="horizontal-scroll__text-container">
							<p>{bitOfText}</p>
							<p>{bitOfText}</p>
							<p>{bitOfText}</p>
							<img src="/images/page-transition/forrest.webp" alt="" />
							<p>{bitOfText}</p>
							<p>{bitOfText}</p>
							<img src="/images/page-transition/forrest.webp" alt="" />
							<p>{bitOfText}</p>
						</div>
						<h2>4. Last but not least, the final section</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
</ExperimentItem>

<style lang="scss">
	@keyframes scroll-horizontal {
		to {
			transform: translateX(calc(-100% + 100vw));
		}
	}

	.horizontal-scroll {
		overflow: visible;
		height: var(--container-width);

		view-timeline-name: --horizontal-scroll-timeline;
		view-timeline-axis: block;
	}
	.horizontal-scroll__sticky {
		overflow-x: hidden;
		position: sticky;
		top: 0;
		width: 100vw;
		height: 100vh;
	}
	.horizontal-scroll__inner {
		width: var(--container-width);
		height: 100vh;

		animation: linear scroll-horizontal forwards;
		animation-timeline: --horizontal-scroll-timeline;
		animation-range: contain 0% contain 100%;

		will-change: transform;
	}

	.horizontal-scroll__list {
		display: flex;
		min-height: 100vh;
	}
	.horizontal-scroll__list-item {
		// By enabling this, all items are collapsed :(.
		// container-type: size;

		view-timeline-name: --section-timeline;
		view-timeline-axis: block;
		// view-timeline-axis: row;

		position: relative;
		// overflow: hidden;
		// min-width: 100cqw;
		// min-width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-shrink: 0;
		padding: 0 10rem;
	}

	.horizontal-scroll__list-item:nth-of-type(1) {
		background-color: #f1c40f;
	}
	.horizontal-scroll__list-item:nth-of-type(2) {
		background-color: #e67e22;
	}
	.horizontal-scroll__list-item:nth-of-type(3) {
		background-color: #e74c3c;
	}
	.horizontal-scroll__list-item:nth-of-type(4) {
		background-color: #9b59b6;
	}
	.horizontal-scroll__list-item:nth-of-type(5) {
		background-color: #3498db;
	}
	.horizontal-scroll__list-item:nth-of-type(6) {
		background-color: #2ecc71;
	}
	.horizontal-scroll__list-item:nth-of-type(7) {
		background-color: #1abc9c;
	}

	.horizontal-scroll__text-container {
		// width: 100%;
		padding: 6rem 10rem 2rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 5rem;

		display: flex;
	}

	.horizontal-scroll__list-item p {
		max-width: 40rem;
		flex-shrink: 0;
	}
	.horizontal-scroll__list-item p:nth-of-type(1) {
		transform: translateY(-2rem);
	}
	.horizontal-scroll__list-item p:nth-of-type(2) {
		transform: translateY(4rem);
	}
	.horizontal-scroll__list-item p:nth-of-type(3) {
		transform: translateY(1rem);
	}
	.horizontal-scroll__list-item p:nth-of-type(4) {
		transform: translateY(0rem);
	}
	.horizontal-scroll__list-item p:nth-of-type(5) {
		transform: translateY(8rem);
	}
	.horizontal-scroll__list-item p:nth-of-type(6) {
		transform: translateY(5rem);
	}

	.horizontal-scroll__list-item img {
		max-height: 35vh;
	}
	.horizontal-scroll__list-item img:nth-of-type(1) {
		transform: translateY(6rem);
	}
	.horizontal-scroll__list-item img:nth-of-type(2) {
		transform: translateY(-2rem);
	}
	.horizontal-scroll__list-item img:nth-of-type(3) {
		transform: translateY(4rem);
	}
	.horizontal-scroll__list-item img:nth-of-type(4) {
		transform: translateY(-3rem);
	}

	@keyframes scroll-section-horizontal {
		from {
			transform: translateY(6rem);
			transform: translateX(0px);
		}
		to {
			transform: translateY(6rem);
			// 	translateY(calc(#{nth($item, 2)}cqh - 50%)) rotate($rotate);
			transform: translateX(calc(100qw - 100%));
		}
	}

	.horizontal-scroll__list-item h2 {
		position: absolute;
		bottom: 0;
		left: 8rem;

		margin: 0;
		line-height: 1;
		font-size: 25rem;
		white-space: nowrap;
		transform: translateY(6rem);

		animation: linear scroll-section-horizontal forwards;
		animation-timeline: --section-timeline;
		// animation-range: contain 0% contain 100%;
	}
</style>
