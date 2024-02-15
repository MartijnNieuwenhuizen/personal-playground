<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import { onMount } from 'svelte';

	const title = 'Haptic feedback';
	const description = 'Create haptic feedback.';

	const handleClick = () => {
		navigator.vibrate(1000);
	};
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<h2>Haptic feedback</h2>
	<p>
		I would like to create some Haptic Feedback when you interact with a slider, or something like
		that. My MacBook's trackpad can give this feedback. Phones can also give this feedback. Let's
		see if we can use that 😁.
	</p>

	<h3>Experiment 1 - Haptic feedback on load</h3>
	<p>This isn't possible, the user needs to interact with the page first. Makes sense!</p>

	<h3>Experiment 2 - Haptic feedback on click</h3>
	<button on:click={handleClick}>Click me for some Haptic's</button>
</ExperimentItem>

<style lang="scss">
</style>
