<script>
	import { onMount } from 'svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	const title = 'Horizontal Scroll';
	const description = 'Horizontal scroll with just CSS.';

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
</script>

<ExperimentItem {title} {description} showPageEffect={false}>
	<div class="horizontal-scroll" bind:this={container}>
		<div class="horizontal-scroll__sticky">
			<div class="horizontal-scroll__inner" bind:this={target}>
				<div class="horizontal-scroll__list">
					<div class="horizontal-scroll__list-item" />
					<div class="horizontal-scroll__list-item" />
					<div class="horizontal-scroll__list-item" />
					<div class="horizontal-scroll__list-item" />
					<div class="horizontal-scroll__list-item" />
					<div class="horizontal-scroll__list-item" />
					<div class="horizontal-scroll__list-item" />
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
		flex-direction: row;
	}
	.horizontal-scroll__list-item {
		width: 80vw;
		height: 100vh;
		flex-shrink: 0;
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
</style>
