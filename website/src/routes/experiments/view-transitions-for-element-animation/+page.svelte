<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';

	const title = 'View transitions for element animation';
	const description =
		"Create an animation with view transitions. Don't apply any specific animations, just declare the view-transition.";

	let showLargeVersion = $state(false);

	function handleTransition() {
		if (!document.startViewTransition) {
			showLargeVersion = !showLargeVersion;
			return;
		}

		document.startViewTransition(() => {
			showLargeVersion = !showLargeVersion;
		});
	}
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<form action="">
		<input
			type="checkbox"
			id="margin-block"
			onchange={handleTransition}
			checked={showLargeVersion}
		/>
		<label for="margin-block">Toggle</label>
	</form>

	<div class="container">
		<div class="flexible-panel" data-show-large-version={showLargeVersion}>
			<button style={`view-transition-name: button-a;`}>
				<span style={`view-transition-name: label-a;`}>A</span>
				<span style={`view-transition-name: secondary-label-a;`}>More info about this action</span>
			</button>
			<button style={`view-transition-name: button-b;`}>
				<span style={`view-transition-name: label-b;`}>B</span>
				<span style={`view-transition-name: secondary-label-b;`}>More info about this action</span>
			</button>
			<button style={`view-transition-name: button-c;`}>
				<span style={`view-transition-name: label-c;`}>C</span>
				<span style={`view-transition-name: secondary-label-c;`}>More info about this action</span>
			</button>
			<button style={`view-transition-name: button-d;`}>
				<span style={`view-transition-name: label-d;`}>D</span>
				<span style={`view-transition-name: secondary-label-d;`}>More info about this action</span>
			</button>
		</div>
	</div>

	<Row size="small">
		<Block size="small">
			<p>Technically it works, but needs some tweaks to make it look nice.</p>
		</Block>
	</Row>
</ExperimentItem>

<style lang="scss">
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.flexible-panel {
		display: flex;
		gap: 2rem;
		width: max-content;
		padding: 2rem;
		background-color: lightseagreen;
		border-radius: 1.25rem;
	}

	button {
		@include body-2;

		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: center;
		padding: 1rem 2rem;
		background-color: white;
		border: none;
		border-radius: 1rem;
	}

	button span:last-child {
		opacity: 0;
		position: absolute;
	}

	.flexible-panel[data-show-large-version='true'] {
		padding: 8rem 2rem;
	}

	.flexible-panel[data-show-large-version='true'] button span:last-child {
		opacity: 1;
		position: relative;
	}

	:global(html::view-transition-old(*)),
	:global(html::view-transition-new(*)) {
		animation-duration: 300ms;
		animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
