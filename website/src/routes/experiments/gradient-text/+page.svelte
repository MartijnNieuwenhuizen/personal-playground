<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';

	const title = 'Gradient text';
	const description = 'A text with a gradient behind it.';
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<Block size="medium">
		<h2>I want to be a Gradient!</h2>
	</Block>
</ExperimentItem>

<style lang="scss">
	h2 {
		@include heading-1;
		line-height: 1;

		// Create the gradient.
		background: linear-gradient(90deg, var(--highlight-color) 0%, var(--expressive-color) 100%);
		// Clip the text (so the gradient is visible).
		background-clip: text;
		// Set color to transparent so the gradient shows.
		-webkit-text-fill-color: transparent;
	}
</style>
