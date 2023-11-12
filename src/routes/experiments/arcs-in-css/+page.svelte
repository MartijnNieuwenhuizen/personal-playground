<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	const title = 'Arcs in css';
	const description = 'Add a description';
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<h2>Code here</h2>
</ExperimentItem>

<!-- Trigonometric CSS Functions Overview
cos() : can be used to keep the size of a rotated box.
sin() : can be used to size boxes and as an animation-duration value.
tan() : can be used to draw parallelograms.
asin() : can be used to rotate elements.
acos() : can be used to rotate elements. -->

<style>
	h2 {
		color: red;
	}
</style>
