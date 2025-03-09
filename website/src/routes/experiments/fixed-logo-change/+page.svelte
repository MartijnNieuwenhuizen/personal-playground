<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import ScrollTimelineWarning from '$lib/components/ScrollTimelineWarning/index.svelte';

	const title = 'Fixed logo - change on scoll';
	const description = `Change the logo from a large to a small one when the user scrolls down the page. Note, the animations aren't very performant, it's all about the concept.`;
</script>

<ScrollTimelineWarning />

<ExperimentItem {title} {description} showPageEffect={false}>
	<div class="container">
		<div class="sticky">
			<nav>
				<a href="/" class="custom-logo custom-logo-1">
					<span class="custom-logo-1__keep">L</span><span class="custom-logo-1__fade">os</span>
					<span class="custom-logo-1__keep">A</span><span class="custom-logo-1__fade">ngeles</span>
				</a>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>
			<nav>
				<a href="/" class="custom-logo custom-logo-2">
					<span>
						<span class="custom-logo-2__keep">B</span><span class="custom-logo-2__fade">os</span>
					</span>
					<span>
						<span class="custom-logo-2__keep">B</span><span class="custom-logo-2__fade">as</span>
					</span>
					<span>
						<span class="custom-logo-2__keep">B</span><span class="custom-logo-2__fade">es</span>
					</span>
				</a>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</ExperimentItem>

<style lang="scss">


	/**
	 * Custom logo 1
	 */
	@keyframes fade-on-scroll {
		0% {
			opacity: 1;
			max-width: 5rem;
		}

		80% {
			opacity: 0;
		}

		100% {
			opacity: 0;
			max-width: 0;
		}
	}

	/**
	 * Custom logo 2
	 */
	@keyframes top-change {
		0% {
			top: 0;
			left: 0;
		}

		100% {
			top: 0;
			left: 0;
		}
	}

	@keyframes middle-change {
		0% {
			top: 2.5rem;
			left: 0;
		}

		100% {
			top: 0;
			left: 2rem;
		}
	}

	@keyframes bottom-change {
		0% {
			top: 5rem;
			left: 0;
		}

		100% {
			top: 0;
			left: 4rem;
		}
	}

	@keyframes height-change {
		from {
			min-height: 8rem;
		}

		to {
			min-height: 3rem;
		}
	}

	.container {
		position: relative;
		min-height: 300vh;
		view-timeline-name: --header-logo-timeline;
	}

	.sticky {
		position: sticky;
		top: 0;
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 1rem;
		background-color: #f4f4f4;
	}

	ul {
		display: flex;
		gap: 1rem;
		list-style: none;
	}

	/**
	 * Custom logo
	 */
	.custom-logo {
		font-size: 3.5rem;
		line-height: 1;
		letter-spacing: -0.05em;
	}

	.custom-logo span {
		color: transparent;
		-webkit-text-stroke: 1.5px var(--expressive-color);
	}

	.custom-logo-1__fade {
		display: inline-block;
		animation: fade-on-scroll linear forwards;
		animation-timeline: --header-logo-timeline;
		animation-range: 100vh 130vh;
	}

	.custom-logo-2 {
		position: relative;
		min-height: 8rem;
		animation: height-change linear forwards;
		animation-range: 100vh 130vh;
		animation-timeline: --header-logo-timeline;
	}

	.custom-logo-2 > span {
		position: absolute;
		left: 0;
	}

	.custom-logo-2 > span:nth-of-type(1) {
		top: 0;

		// Note: It's not possible to declare these properties within the block of the selector: `.custom-logo-2 > span`.
		animation: top-change linear forwards;
		animation-range: 100vh 130vh;
		animation-timeline: --header-logo-timeline;
	}

	.custom-logo-2 > span:nth-of-type(2) {
		top: 2.5rem;
		animation: middle-change linear forwards;
		animation-range: 100vh 130vh;
		animation-timeline: --header-logo-timeline;
	}

	.custom-logo-2 > span:nth-of-type(3) {
		top: 5rem;
		animation: bottom-change linear forwards;
		animation-range: 100vh 130vh;
		animation-timeline: --header-logo-timeline;
	}

	.custom-logo-2__fade {
		animation: fade-on-scroll linear forwards;
		animation-timeline: --header-logo-timeline;
		animation-range: 100vh 130vh;
	}
</style>
