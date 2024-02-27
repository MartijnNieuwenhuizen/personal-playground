<script>
	import { onMount } from 'svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	const title = 'CSS scroll timeline with intersection observer';
	const description =
		'A horizontal scroll, build with the CSS Scroll timeline and an Intersection Observer that will trigger animation to move to the next section.';

	/** @type {HTMLElement} */
	let container;

	/** @type {HTMLElement} */
	let original;

	onMount(() => {
		if (!container || !original) return;

		const updateHeight = () => {
			// Set the height of the container to be the width of the container.
			container.style.height = `${original.scrollWidth}px`;
		};

		window.addEventListener('resize', updateHeight);
		updateHeight();
	});
</script>

<ExperimentItem {title} {description} showPageEffect={false}>
	<div class="outer" bind:this={container}>
		<div class="container" bind:this={original}>
			<section class="container__item">
				<h2>1. This is the first section in the list</h2>
			</section>
			<section class="container__item">
				<h2>2. The second section</h2>
			</section>
			<section class="container__item">
				<h2>3. You're now in the Third section that's quite far!</h2>
			</section>
			<section class="container__item">
				<h2>4. Last but not least, the final section</h2>
			</section>
		</div>
	</div>
</ExperimentItem>

<style lang="scss">
	@keyframes horizontal-scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}

	:global(html) {
		// 	/* @TODO: Make this scoped to a component! */
		// 	scroll-timeline: --stage-timeline;
		view-timeline-name: --container-scroll-timeline;
	}

	.outer {
		// overflow: hidden;

		position: relative;
		max-width: 100vw;
	}
	.container {
		position: sticky;
		top: 0;

		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		flex-grow: 1;
		flex-shrink: 0;

		transform-origin: left;

		animation: horizontal-scroll auto linear;
		animation-timeline: --container-scroll-timeline;
	}

	.container__item {
		min-height: 100vh;
		display: flex;
		align-items: flex-end;
	}
	.container__item:not(:last-child) {
		margin-right: 80vw;
	}

	h2 {
		margin: 0;
		line-height: 1;
		font-size: 25rem;
		white-space: nowrap;
		transform: translateY(6rem);
	}
</style>
