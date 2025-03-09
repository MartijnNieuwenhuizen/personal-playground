<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import AiGeneratedSolution from './ai-generated-solution/index.svelte';
	import Code from '$lib/components/Code/index.svelte';

	const title = 'Animated panel based design';
	const description = `See a full page solution <a href="/experiments/animated-panel-based-design/full-page-version">right here</a>`;

	let showFloatingPanelCssGrid = $state(false);

	let showSidePanelCssGrid = $state(false);

	let showAnnotationPanelCssGrid = $state(false);

	let showFloatingPanelFlexbox = $state(false);

	let showSidePanelFlexbox = $state(false);

	let showAnnotationPanelFlexbox = $state(false);

	let cssSolutionOne = `.panels-grid {
	// Use CSS Grid
	display: grid;
	// Set the columns
	grid-template-columns: auto 1fr auto;
	// Define the areas
	grid-template-areas:
		'side-panel main-panel annotation-panel';

	// Set the transition to the grid-template-columns (this is now possible)
	transition: grid-template-columns 0.2s;
}

// Based on some data. Could be a data-attribute, class etc.
.panels-grid[data-grid='visible-normal-hidden'] {
	// You do need to provide a fixed with. 
	// Tricks like calc-size(auto, size); (to have the contents of the panel determine the width) are not possible with grid.
	grid-template-columns: 20vw 1fr 0;
}
`;

	let cssSolutionTwo = `.panels-grid {
	// Create a flexbox layout
	display: flex;
}

.main-panel {
	// Have this panel take up the remaining space
	flex: 1;
}

.side-panel, annotation panel {
	// Ensure ist's not visible by default. Could also be display: none; with newer tech.
	width: 0;
	// Set the transition to the width. Still feels odd!
	transition: width ease-in-out 0.2s;
}

.side-panel[data-visible='true'], annotation panel[data-visible='true'] {
	// Set the width to the size of the contents (new CSS trick)!
	width: calc-size(auto, size);
}
`;
</script>

<ExperimentItem {title} {description} showPageEffect={false}>
	<article>
		<Row size="small">
			<Block size="medium">
				<h2>Solution with CSS Grid</h2>
			</Block>
		</Row>

		<div
			class="panels panels-grid animate-with-css-grid"
			data-grid={`${showSidePanelCssGrid}-${showAnnotationPanelCssGrid}`}
		>
			<div class="control-panel">
				<form>
					<div>
						<input
							type="checkbox"
							id="show-floating-panel"
							bind:checked={showFloatingPanelCssGrid}
						/>
						<label for="show-floating-panel">Show floating panel</label>
					</div>
					<div>
						<input type="checkbox" id="show-side-panel" bind:checked={showSidePanelCssGrid} />
						<label for="show-side-panel">Show side panel</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="show-annotation-panel"
							bind:checked={showAnnotationPanelCssGrid}
						/>
						<label for="show-annotation-panel">Show annotation panel</label>
					</div>
				</form>
			</div>
			<div class="side-panel" data-visible={showSidePanelCssGrid}>
				<section><h2>Side panel</h2></section>
			</div>
			<div class="main-panel">
				<section><h2>Main panel</h2></section>
			</div>
			<div class="floating-panel" data-visible={showFloatingPanelCssGrid}>
				<section><h2>Action panel</h2></section>
			</div>
			<div class="annotation-panel" data-visible={showAnnotationPanelCssGrid}>
				<section><h2>Annotation panel</h2></section>
			</div>
		</div>

		<Row size="small">
			<Block size="medium">
				<h3>The solution in short</h3>

				<Code code={cssSolutionOne} language="css" />
			</Block>
			<Block size="medium">
				<h3>Conclusion</h3>

				<ul>
					<li>Pro's</li>
					<ul>
						<li>
							Main panel is nicely animating along. Possible to use container queries to style the
							contents of that panel
						</li>
						<li>Animation feels smooth</li>
					</ul>
					<li>Con's</li>
					<ul>
						<li>
							You need to set fixed width to the panes for the panels. Not sure if that's nice
						</li>
						<li>
							You need to add another animation to the content of the right pane, otherwise the text
							will still be partly visible
						</li>
					</ul>
				</ul>
			</Block>
		</Row>
	</article>

	<article>
		<Row size="small">
			<Block size="medium">
				<h2>Ensure the content from the panes can set the width of the panel</h2>
			</Block>
		</Row>

		<div
			class="panels panels-flexbox animate-with-flexbox"
			data-grid={`${showSidePanelFlexbox}-${showAnnotationPanelFlexbox}`}
		>
			<div class="control-panel">
				<form>
					<div>
						<input
							type="checkbox"
							id="show-floating-panel-flexbox"
							bind:checked={showFloatingPanelFlexbox}
						/>
						<label for="show-floating-panel-flexbox">Show floating panel</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="show-side-panel-flexbox"
							bind:checked={showSidePanelFlexbox}
						/>
						<label for="show-side-panel-flexbox">Show side panel</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="show-annotation-panel-flexbox"
							bind:checked={showAnnotationPanelFlexbox}
						/>
						<label for="show-annotation-panel-flexbox">Show annotation panel</label>
					</div>
				</form>
			</div>
			<div class="panels-flexbox-container">
				<div class="side-panel" data-visible={showSidePanelFlexbox}>
					<section><h2>Side panel</h2></section>
				</div>
				<div class="main-panel">
					<section><h2>Main panel</h2></section>
				</div>
				<div class="annotation-panel" data-visible={showAnnotationPanelFlexbox}>
					<section><h2>Annotation panel</h2></section>
				</div>
			</div>
			<div class="floating-panel" data-visible={showFloatingPanelFlexbox}>
				<section><h2>Action panel</h2></section>
			</div>
		</div>

		<Row size="small">
			<Block size="medium">
				<h3>The solution in short</h3>

				<Code code={cssSolutionTwo} language="css" />
			</Block>

			<Block size="medium">
				<h3>Conclusion</h3>
				<p>
					This works, and with <code>width: calc-size(auto, size);</code>, the contents of the panel
					will determine the width of the panel. But, animating the <code>width</code> property is not
					something I want to do and it's also already showing some lack in the speed of the animation.
				</p>
			</Block>
		</Row>
	</article>

	<AiGeneratedSolution />
</ExperimentItem>

<style lang="scss">
	.panels {
		--floating-panel-offset: 4vh;

		min-height: 100vh;
	}

	.panels-grid {
		display: grid;
		grid-template: auto 1fr / auto 1fr auto;
		grid-template-areas:
			'control-panel control-panel control-panel'
			'side-panel main-panel annotation-panel';
		transition: grid-template-columns 0.2s;
	}

	.panels * {
		font-family: sans-serif;
	}

	.panels h2 {
		margin: 0;
		padding: 0;
		font-size: 1.5rem;
	}

	.control-panel {
		grid-area: control-panel;
	}

	.control-panel form {
		display: flex;
		gap: 2rem;
	}

	.floating-panel,
	.side-panel,
	.main-panel,
	.annotation-panel {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.side-panel {
		grid-area: side-panel;
		background-color: #d78000;
		color: white;
		transition: transform ease-in-out 0.2s;
	}

	.main-panel {
		grid-area: main-panel;
		background-color: #003770;
		color: white;
	}

	.annotation-panel {
		grid-area: annotation-panel;
		background-color: white;
		transition: transform ease-in-out 0.2s;
	}

	.floating-panel {
		position: fixed;
		bottom: var(--floating-panel-offset);
		left: 50vw;
		grid-area: action-panel;
		min-width: 60vw;
		padding: 1rem;
		background-color: #23a1be;
		color: white;
		border-radius: 16px;
		transform: translate(-50%, 0);
		transition: transform ease-in-out 0.2s;
	}

	.floating-panel[data-visible='false'] {
		transform: translate(-50%, calc(var(--floating-panel-offset) + 100%));
	}

	.animate-with-css-grid[data-grid='false-false'] {
		grid-template-columns: 0 1fr 0;
	}

	.animate-with-css-grid[data-grid='true-false'] {
		grid-template-columns: 20vw 1fr 0;
	}

	.animate-with-css-grid[data-grid='false-true'] {
		grid-template-columns: 0 1fr 20vw;
	}

	.animate-with-css-grid[data-grid='true-true'] {
		grid-template-columns: 20vw 1fr 20vw;
	}

	.panels-flexbox-container {
		display: flex;
		flex-direction: row;
		width: 100%;
		background: lime;
	}

	.panels-flexbox-container > div {
		min-height: 100vh;
	}

	.panels-flexbox-container .side-panel {
		width: 0;
		background-color: #d78000;
		color: white;
		transition: width ease-in-out 0.2s;
	}

	.panels-flexbox-container .annotation-panel {
		width: 0;
		background-color: white;
		transition: width ease-in-out 0.2s;
	}

	.panels-flexbox-container .main-panel {
		flex: 1;
		background-color: #003770;
		color: white;
		transition: width ease-in-out 0.2s;
	}

	.panels-flexbox-container .annotation-panel[data-visible='true'] {
		width: calc-size(auto, size);
	}

	.panels-flexbox-container .side-panel[data-visible='true'] {
		width: calc-size(auto, size);
	}

	// panels-grid-with-child-sizes
	.panels-grid-with-child-sizes-container {
		display: grid;
		grid-template-areas: 'side-panel main-panel annotation-panel';
		grid-template-columns: max-content 1fr max-content;
		transition: grid-template-columns 0.2s;
		transition-behavior: allow-discrete;
	}

	.panels-grid-with-child-sizes-container [data-grow] {
		transition: width ease-in-out 0.2s;
		transition-behavior: allow-discrete;
	}

	.panels-grid-with-child-sizes-container [data-grow='true'] {
		width: 20vw;
	}
</style>
