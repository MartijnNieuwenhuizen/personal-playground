<script>
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import ScrollTimelineWarning from '$lib/components/ScrollTimelineWarning/index.svelte';

	const title = 'Opposite scrollbar';
	const description = 'One that scrolls the other way, for half the time, and then back up again.';
</script>

<ScrollTimelineWarning />

<ExperimentItem {title} {description} showPageEffect={false}>
	<Row>
		<Block size="small">
			<form>
				<h2>options</h2>
				<label for="rotate">Rotate</label>
				<input type="radio" name="option" id="rotate" checked />

				<label for="colors">Move colors</label>
				<input type="radio" name="option" id="colors" />
			</form>
			<div class="scroll-hight">
				<div class="container">
					<div class="ball" />
				</div>
			</div>
		</Block>
	</Row>
</ExperimentItem>

<style>
	.scroll-hight {
		display: block;
		position: relative;
		min-height: 400vh;
	}
	.container {
		position: sticky;
		top: calc((100vh - 50vmin) - 25%);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.ball {
		width: 50vmin;
		height: 50vmin;
		border-radius: 50%;
		/* Make a gradient that radius from the center with the following 4 colors. And the center should be in the top rigth */
		/* #e3694e */
		/* #b478c6 */
		/* #ffffff */
		/* #c8e6cf */

		background: radial-gradient(
			circle at 65% 25%,
			#c8e6cf 0%,
			#ffffff 45%,
			#ffffff 60%,
			#b478c6 70%,
			#e3694e 80%
		);
	}
</style>
