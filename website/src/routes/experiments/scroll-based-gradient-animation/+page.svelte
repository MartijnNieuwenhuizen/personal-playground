<script>
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import ScrollTimelineWarning from '$lib/components/ScrollTimelineWarning/index.svelte';

	const title = 'Scroll-based gradient animation';
	const description = 'Animating a gradient based on scroll position.';

	let options = $state('rotate');
</script>

<ScrollTimelineWarning />

<ExperimentItem {title} {description} showPageEffect={false}>
	<Row>
		<Block size="small">
			<form>
				<h2>options</h2>
				<label for="rotate">Rotate</label>
				<input type="radio" name="option" id="rotate" value="rotate" bind:group={options} />

				<label for="change-colors">Change colors</label>
				<input
					type="radio"
					name="option"
					id="change-colors"
					value="change-colors"
					bind:group={options}
				/>
			</form>

			{#if options === 'change-colors'}
				<Row size="small">
					<p>
						You cannot animate the values of a gradient (or background-color) with the
						animation-timeline because the value can't be interpolated continuously along a
						timeline.
					</p>
				</Row>
			{/if}

			<div class="scroll-hight">
				<div class="container">
					<div class="ball" data-animation-variant={options}></div>
				</div>
			</div>
		</Block>
	</Row>
</ExperimentItem>

<style>
	.scroll-hight {
		position: relative;
		display: block;
		min-height: 400vh;
	}

	.container {
		position: sticky;
		top: calc((100vh - 50vmin) - 25%);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.ball {
		width: 50vmin;
		height: 50vmin;
		background: radial-gradient(
			circle at 65% 25%,
			#c8e6cf 0%,
			#fff 45%,
			#fff 60%,
			#b478c6 70%,
			#e3694e 80%
		);
		border-radius: 50%;
	}

	:global(body) {
		view-timeline-name: --rotate-gradient;
	}

	@keyframes rotate-gradient {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	.ball[data-animation-variant='rotate'] {
		animation: rotate-gradient linear forwards;
		animation-range: 100vh calc(100% - 100vh);
		animation-timeline: --rotate-gradient;
	}

	@keyframes change-colors {
		0% {
			background: radial-gradient(
				circle at 65% 25%,
				#c8e6cf 0%,
				#fff 45%,
				#fff 60%,
				#b478c6 70%,
				#e3694e 80%
			);
		}

		100% {
			background: radial-gradient(
				circle at 65% 25%,
				#e3694e 0%,
				#b478c6 45%,
				#fff 60%,
				#fff 70%,
				#c8e6cf 80%
			);
		}
	}

	.ball[data-animation-variant='change-colors'] {
		animation: change-colors linear forwards;
		animation-range: 100vh calc(100% - 100vh);
		animation-timeline: --rotate-gradient;
	}
</style>
