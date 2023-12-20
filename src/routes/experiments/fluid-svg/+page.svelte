<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import Constrain from '$lib/components/layout/Constrain/index.svelte';

	const title = 'Fluid svg';
	const description = 'Sometimes, you want an SVG to not keep the same aspect ratio all the time!';
</script>

<ExperimentItem {title} {description} showPageEffect={false}>
	<Row>
		<Block>
			<Constrain size="small">
				<h2>The original setup</h2>

				<p>
					A SVG with a text overlaying. It's positioned on the same position with CSS grid. The
					issue: The SVG will grow in height when the screen becomes bigger. In the end, the SVG
					will be too high. How to fix this?
				</p>
			</Constrain>
		</Block>
	</Row>

	<div class="container container--original">
		<div class="content">
			<h2>My short title</h2>
			<p>A bit more info about something can be placed just here!</p>
		</div>

		<svg viewBox="0 0 1440 553" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1045.65 85.6996L-31.4839 -0.03125L-109.798 552.984L972.336 483.636L1045.65 85.6996Z"
				fill="currentcolor"
			/>
			<path
				d="M1290 102.581L1079 89.5815L1003.87 480.962L1203.62 462.503L1290 102.581Z"
				fill="currentcolor"
			/>
			<path
				d="M1534.24 115.746L1314.26 102.178L1227.41 462.101L1453.84 443.21L1534.24 115.746Z"
				fill="currentcolor"
			/>
		</svg>
	</div>

	<Row>
		<Block>
			<Constrain size="small">
				<h2>The solution: Add preserveAspectRatio set to none</h2>

				<p>
					<code>preserveAspectRatio</code> in combination with a <code>max-height</code> will ensure
					the SVG to stretch the full width of the container, but don't grow too high. The lines will
					skew a bit more, but that's not a problem for this experiment.
				</p>
			</Constrain>
		</Block>
	</Row>
	<div class="container">
		<div class="content">
			<h2>My short title</h2>
			<p>A bit more info about something can be placed just here!</p>
		</div>

		<svg
			viewBox="0 0 1440 553"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="none"
		>
			<path
				d="M1045.65 85.6996L-31.4839 -0.03125L-109.798 552.984L972.336 483.636L1045.65 85.6996Z"
				fill="currentcolor"
			/>
			<path
				d="M1290 102.581L1079 89.5815L1003.87 480.962L1203.62 462.503L1290 102.581Z"
				fill="currentcolor"
			/>
			<path
				d="M1534.24 115.746L1314.26 102.178L1227.41 462.101L1453.84 443.21L1534.24 115.746Z"
				fill="currentcolor"
			/>
		</svg>
	</div>

	<Row>
		<Block>
			<Constrain size="small">
				<h2>Without preserveAspectRatio set to none</h2>

				<p>
					You will see that the ratio of the SVG stays present. Therefore, the SVG will not be as
					wide as the page.
				</p>
			</Constrain>
		</Block>
	</Row>

	<div class="container">
		<div class="content">
			<h2>My short title</h2>
			<p>A bit more info about something can be placed just here!</p>
		</div>

		<svg viewBox="0 0 1440 553" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1045.65 85.6996L-31.4839 -0.03125L-109.798 552.984L972.336 483.636L1045.65 85.6996Z"
				fill="currentcolor"
			/>
			<path
				d="M1290 102.581L1079 89.5815L1003.87 480.962L1203.62 462.503L1290 102.581Z"
				fill="currentcolor"
			/>
			<path
				d="M1534.24 115.746L1314.26 102.178L1227.41 462.101L1453.84 443.21L1534.24 115.746Z"
				fill="currentcolor"
			/>
		</svg>
	</div>
</ExperimentItem>

<style lang="scss">
	.container {
		display: grid;
		color: var(--highlight-color);
	}

	.container h2 {
		@include heading-2;
		margin: 0;
		padding: 0;
	}

	.container .content {
		z-index: 2;
		max-width: 40rem;
		padding: var(--block-padding);
		align-self: center;
		color: black;
	}
	.container .content,
	.container svg {
		grid-column: 1;
		grid-row: 1;
	}

	.container svg {
		width: 100%;
		max-height: 25rem;
	}

	.container--original svg {
		max-height: 100%;
	}
</style>
