<script>
	import Row from '$lib/components/layout/Row/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import { spring } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import { posterize } from 'three/examples/jsm/nodes/Nodes.js';

	let showFloatingPanelGrid2 = $derived(false);
	let showSidePanelGrid2 = $derived(false);
	let showAnnotationPanelGrid2 = $derived(false);

	// Panel visibility states
	let leftPanelVisible = $state(false);

	let rightPanelVisible = $state(false);

	let middlePanelVisible = $derived(true);

	// Spring animations with improved configuration for smoother motion
	const springConfig = {
		stiffness: 0.1,
		damping: 0.8,
		precision: 0.001
	};

	const leftWidth = spring(0, springConfig);
	const rightWidth = spring(0, springConfig);

	function toggleLeftPanel() {
		leftPanelVisible = !leftPanelVisible;
		leftWidth.set(leftPanelVisible ? 300 : 0);
	}

	function toggleRightPanel() {
		rightPanelVisible = !rightPanelVisible;
		rightWidth.set(rightPanelVisible ? 300 : 0);
	}
</script>

<article>
	<Row size="small">
		<Block size="medium">
			<h2>AI generated solution</h2>
			<p>Let's check if AI can solve this in a better way!?</p>
		</Block>
	</Row>

	<div class="layout">
		<!-- Left Panel -->
		{#if leftPanelVisible}
			<div class="panel left-panel" style="width: {$leftWidth}px">
				<div class="panel-content">Left Panel Content</div>
			</div>
		{/if}

		<!-- Middle Panel -->
		{#if middlePanelVisible}
			<div class="panel middle-panel">
				<div class="panel-content">
					Middle Panel Content
					<container-query>This text will adapt based on container width</container-query>
				</div>
			</div>
		{/if}

		<!-- Right Panel -->
		{#if rightPanelVisible}
			<div class="panel-content">Right Panel Content</div>
			<div class="panel right-panel" style="width: {$rightWidth}px"></div>
		{/if}

		<!-- Control buttons -->
		<div class="controls">
			<button onclick={toggleLeftPanel}>Toggle Left Panel</button>
			<button onclick={toggleRightPanel}>Toggle Right Panel</button>
		</div>
	</div>
</article>

<Row size="small">
	<Block size="medium">
		<h2>Conclusion</h2>
		<p>In short, no.</p>
		<p>
			The animation (especially the moving-away animation) is bad. I will stop the experiment here
			because AI isn't providing any quality options .
		</p>
	</Block>
</Row>

<style>
	article {
		position: relative;
	}

	.layout {
		overflow: hidden;
		position: relative;
		display: flex;
		width: 100%;
		height: 100vh;
	}

	.panel {
		height: 100%;

		/* Removed the CSS transition since we're using spring animation */
	}

	.left-panel,
	.right-panel {
		flex-shrink: 0;
		background-color: #f5f5f5;
	}

	.middle-panel {
		flex: 1;
		background-color: white;
		container-type: inline-size;
	}

	.panel-content {
		padding: 1rem;
	}

	container-query {
		display: block;
	}

	@container (min-width: 400px) {
		container-query {
			font-size: 1.2rem;
		}
	}

	@container (min-width: 600px) {
		container-query {
			font-size: 1.5rem;
		}
	}

	.controls {
		position: absolute;
		top: 1rem;
		left: 50%;
		display: flex;
		gap: 1rem;
		transform: translateX(-50%);
	}

	button {
		padding: 0.5rem 1rem;
		background-color: #333;
		color: white;
		cursor: pointer;
		border: none;
		border-radius: 4px;
	}

	button:hover {
		background-color: #444;
	}
</style>
