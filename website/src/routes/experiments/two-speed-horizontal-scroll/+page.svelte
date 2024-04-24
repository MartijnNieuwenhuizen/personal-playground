<script>
	import { onMount } from 'svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import ScrollTimelineWarning from '$lib/components/ScrollTimelineWarning/index.svelte';

	const title = 'Two speed Horizontal Scroll';
	const description =
		'Use Horizontal Scroll for 2 elements with different sizes. But they should bot start and end at the end of both elements.';

	/** @type {HTMLElement} */
	let container;
	/** @type {HTMLElement} */
	let target;

	/** @type {HTMLElement} */
	let listItem1;
	/** @type {HTMLElement} */
	let listItem2;
	/** @type {HTMLElement} */
	let listItem3;
	/** @type {HTMLElement} */
	let listItem4;

	onMount(() => {
		if (!container) return;

		const updateHeight = () => {
			container.style.setProperty('--container-width', `${target.scrollWidth}px`);
		};

		window.addEventListener('resize', updateHeight);
		updateHeight();

		const items = [listItem1, listItem2, listItem3, listItem4];

		const widths = items.map((element) => element.clientWidth);
		const totalWidth = widths.reduce((acc, width) => acc + width, 0);

		items.forEach((element, index) => {
			console.dir(element.clientWidth);
			// !! This is too late. Should be in the HTML on initial render. !!
			// Remove the last child, which is the absolute-positioned h2.
			// element.style.setProperty('--column-count', `${element.children.length - 1}`);

			//  set animation-range: contain 75% contain 100%; with JS
			const start =
				(widths.slice(0, index).reduce((acc, width) => acc + width, 0) / totalWidth) * 100;
			const end =
				(widths.slice(0, index + 1).reduce((acc, width) => acc + width, 0) / totalWidth) * 100;

			element.style.setProperty('--start', `${start}%`);
			element.style.setProperty('--end', `${end}%`);
		});
	});

	const bitOfText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
</script>

<ScrollTimelineWarning />

<ExperimentItem {title} {description} showPageEffect={false}>
	<div class="horizontal-scroll" bind:this={container}>
		<div class="horizontal-scroll__sticky">
			<div class="horizontal-scroll__inner" bind:this={target}>
				<div class="horizontal-scroll__list">
					<div class="horizontal-scroll__list-item" style="--column-count: 9" bind:this={listItem1}>
						<p>{bitOfText}</p>
						<p>{bitOfText}</p>
						<img src="/images/page-transition/forrest.webp" alt="" />
						<p>{bitOfText}</p>
						<p>{bitOfText}</p>
						<img src="/images/page-transition/forrest.webp" alt="" />
						<p>{bitOfText}</p>
						<img src="/images/page-transition/forrest.webp" alt="" />
						<p>{bitOfText}</p>

						<h2>1. This is the first section in the list</h2>
					</div>
					<div class="horizontal-scroll__list-item" style="--column-count: 9" bind:this={listItem2}>
						<p>{bitOfText}</p>
						<img src="/images/page-transition/forrest.webp" alt="" />
						<p>{bitOfText}</p>
						<p>{bitOfText}</p>
						<img src="/images/page-transition/forrest.webp" alt="" />
						<p>{bitOfText}</p>
						<img src="/images/page-transition/forrest.webp" alt="" />
						<p>{bitOfText}</p>
						<p>{bitOfText}</p>

						<h2>2. The second section</h2>
					</div>
					<div
						class="horizontal-scroll__list-item"
						style="--column-count: 10"
						bind:this={listItem3}
					>
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

						<h2>3. You're now in the Third section that's quite far!</h2>
					</div>
					<div class="horizontal-scroll__list-item" style="--column-count: 8" bind:this={listItem4}>
						<p>{bitOfText}</p>
						<p>{bitOfText}</p>
						<p>{bitOfText}</p>
						<img src="/images/page-transition/forrest.webp" alt="" />
						<p>{bitOfText}</p>
						<p>{bitOfText}</p>
						<img src="/images/page-transition/forrest.webp" alt="" />
						<p>{bitOfText}</p>
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
		overflow-x: clip;
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
		container-type: size;

		view-timeline-name: --section-timeline;
		view-timeline-axis: block;
		// view-timeline-axis: row;

		position: relative;
		overflow: hidden;
		min-height: 100vh;
		flex-shrink: 0;
		padding: 6rem 10rem 2rem;

		display: grid;
		grid-template-columns: repeat(var(--column-count), 40rem);
		gap: 5rem;
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
			transform: translateY(6rem) translateX(0px);
		}
		to {
			transform: translateY(6rem) translateX(calc(100cqw - 100%));
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
	}

	// Note: The percentages are calculated with JS, not pretty!
	.horizontal-scroll__list-item:nth-of-type(1) h2 {
		// animation-range: contain 0% contain 25%;
		animation-range: contain var(--start) contain var(--end);
	}
	.horizontal-scroll__list-item:nth-of-type(2) h2 {
		// animation-range: contain 25% contain 50%;
		animation-range: contain var(--start) contain var(--end);
	}
	.horizontal-scroll__list-item:nth-of-type(3) h2 {
		// animation-range: contain 50% contain 75%;
		animation-range: contain var(--start) contain var(--end);
	}
	.horizontal-scroll__list-item:nth-of-type(4) h2 {
		// animation-range: contain 75% contain 100%;
		animation-range: contain var(--start) contain var(--end);
	}
</style>
