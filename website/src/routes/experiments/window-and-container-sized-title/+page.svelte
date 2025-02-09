<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	const title = 'Window and container sized title';
	const description = 'Size a title based on the window (vw) and container size (cqw).';

	let showFullSize = $state(true);
	const toggleContainerSize = () => (showFullSize = !showFullSize);
</script>

<ExperimentItem {title} {description} showPageEffect={false}>
	<section>
		<button type="button" onclick={toggleContainerSize}>Change container size</button>
		<div data-show-full-size={showFullSize}>
			<h2 class="container-size">Container Sized</h2>
			<h2 class="window-size">Window Sized</h2>
		</div>
	</section>
</ExperimentItem>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	div {
		container-type: inline-size;
		width: 100vw;
		padding: gap(5) 0;
		background-color: var(--expressive-color-dark);
		color: var(--white);
	}
	div[data-show-full-size='false'] {
		width: 65vw;
	}
	h2 {
		margin: 0;
		padding: 0;
		line-height: 1;
	}

	.window-size {
		font-size: 18.33vw;
	}

	.container-size {
		font-size: 16.784000000000052cqw;
	}
	button {
		margin: gap(10) 0;
		border: 0;
		background-color: var(--expressive-color-dark);
		color: var(--white);
		font-size: 1.5rem;
		padding: gap(8);
		border-radius: gap(2);
		box-shadow: 0 0 gap(2) 0 var(--expressive-color);
	}
	button:hover,
	button:focus-visible {
		cursor: pointer;
		background-color: var(--expressive-color);
	}
</style>
