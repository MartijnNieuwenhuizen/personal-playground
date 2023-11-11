<script lang="ts">
	import Block from '$lib/layout/Block/index.svelte';
	import Row from '$lib/layout/Row/index.svelte';

	import Code from '$lib/components/Code/index.svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	const title = 'Growing header';
	const description = 'With the CSS Timeline API.';

	const html = `<div class="container">
  <h2>
    This title will become HUGE when you're scrolling down!
  </h2>
  ... more content here.
</div>`;

	const cssCode1 = `@keyframes grow-on-scroll {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(12);
  }
}

.animated-title {
  animation: grow-on-scroll linear forwards;
}`;
	const cssCode2 = `.container {
  view-timeline-name: --growing-header;
}`;
	const cssCode3 = `.animated-title {
  animation-timeline: --growing-header;
}`;
	const cssCode4 = `.animated-title {
  animation-range: 50vh 80vh;
}`;
	const totalCss = `@keyframes grow-on-scroll {
  from {
    transform: scale(1);
  }
  to {
	transform: scale(12);
  }
}

.container {
  view-timeline-name: --growing-header;
}

.animated-title {
  animation: grow-on-scroll linear forwards;
  animation-timeline: --growing-header;
  animation-range: 50vh 80vh;
}`;
</script>

<ExperimentItem {title} {description}>
	<div class="container">
		<h2 class="animated-title">This title will become HUGE when you're scrolling down!</h2>

		<Row>
			<Block size="small">
				<h2>The steps</h2>

				<ol>
					<li>
						Create the animation

						<ol>
							<li>Create the CSS animation</li>
							<li>Add the animation to the element</li>
						</ol>
					</li>

					<li>
						Attach the animation to the scroll-timeline

						<ol>
							<li>Create a scroll timeline</li>
							<li>Add the animation-timeline to the element</li>
							<li>Set the animation range (when should it start and when should it end)</li>
						</ol>
					</li>
				</ol>
			</Block>
		</Row>

		<Row area="bottom">
			<Block size="medium">
				<h2>The code</h2>
				<h3>First of all, the HTML</h3>
				<Code code={html} language="xml" />

				<h3>1. Create the CSS animation</h3>
				<Code code={cssCode1} language="css" />

				<h3>2.1 Create a scroll timeline</h3>
				<Code code={cssCode2} language="css" />
				<h3>2.2 Create a scroll timeline</h3>
				<Code code={cssCode3} language="css" />
				<h3>2.3 Set the animation range</h3>
				<Code code={cssCode4} language="css" />

				<h2>The total CSS</h2>
				<Code code={totalCss} language="css" />
			</Block>
		</Row>
	</div>
</ExperimentItem>

<style type="scss">
	@keyframes grow-on-scroll {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(8);
		}
	}
	@media screen and (min-width: 768px) {
		@keyframes grow-on-scroll {
			from {
				transform: scale(1);
			}
			to {
				transform: scale(12);
			}
		}
	}

	.container {
		overflow: hidden;

		view-timeline-name: --growing-header;
	}

	.animated-title {
		padding: 10rem 0;
		font-size: 1.2rem;
		text-align: center;
		transform-origin: 43% center;

		animation: grow-on-scroll linear forwards;
		animation-timeline: --growing-header;
		animation-range: 80vh 100vh;

		@media screen and (min-width: 768px) {
			font-size: 2rem;
			transform-origin: 47% center;
			animation-range: 50vh 80vh;
		}
	}

	ol ol li {
		font-size: 80%;
		margin-bottom: 0;
	}
	ol li {
		margin-bottom: 1rem;
	}

	:is(pre + h2),
	:is(pre + h3) {
		display: block;
		margin-top: 6rem;
	}

	:global(pre code) {
		// @TODO: Improve this, this is not the way to solve this issue!
		// And it doesn't work with the scrollbar.
		max-width: calc(100vw - (var(--block-padding) * 2));
		overflow-x: auto;
	}
</style>
