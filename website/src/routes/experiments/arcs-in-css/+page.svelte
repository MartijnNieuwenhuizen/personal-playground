<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';

	const title = 'Arcs in css';
	const description = 'Add a description';
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<Block size="small-medium">
		<h2>An Arc with multiple round balls</h2>
		<div class="round-balls-container">
			<span>1</span>
			<span>2</span>
			<span>3</span>
			<span>4</span>
			<span>5</span>
			<span>6</span>
		</div>
	</Block>
</ExperimentItem>

<!-- Trigonometric CSS Functions Overview
cos() : can be used to keep the size of a rotated box.
sin() : can be used to size boxes and as an animation-duration value.
tan() : can be used to draw parallelograms.
asin() : can be used to rotate elements.
acos() : can be used to rotate elements. -->

<style lang="scss">
	.round-balls-container {
	}
	.round-balls-container div {
	}
	.round-balls-container span {
		width: 2rem;
		height: 2rem;
		display: block;
		border-radius: 50%;
		background-color: lime;
		text-align: center;
	}

	.round-balls-container span:nth-of-type(1) {
		transform: translateX(cos(30deg));
	}
</style>
