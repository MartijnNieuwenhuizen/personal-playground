<script>
	import Row from '$lib/components/layout/Row/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import { spring } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import { posterize } from 'three/examples/jsm/nodes/Nodes.js';

	$: showFloatingPanelGrid2 = false;
	$: showSidePanelGrid2 = false;
	$: showAnnotationPanelGrid2 = false;

	// Panel visibility states
	$: leftPanelVisible = false;
	$: rightPanelVisible = false;
	$: middlePanelVisible = true;

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
			<div class="panel right-panel" style="width: {$rightWidth}px" />
		{/if}

		<!-- Control buttons -->
		<div class="controls">
			<button on:click={toggleLeftPanel}>Toggle Left Panel</button>
			<button on:click={toggleRightPanel}>Toggle Right Panel</button>
		</div>
	</div>
</article>

<Row size="small">
	<Block size="medium">
		<h2>Conlusion</h2>
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
		display: flex;
		width: 100%;
		height: 100vh;
		position: relative;
		overflow: hidden;
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
		container-type: inline-size;
		background-color: white;
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
		transform: translateX(-50%);
		display: flex;
		gap: 1rem;
	}

	button {
		padding: 0.5rem 1rem;
		background-color: #333;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	button:hover {
		background-color: #444;
	}
</style>
