<script>
	import FadeInTest from '$lib/components/FadeInTest/index.svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import ScrollTimelineWarning from '$lib/components/ScrollTimelineWarning/index.svelte';

	let title = 'Scroll timeline with identical components';
	// let description = `<p>A list of components that use the scroll-timeline API to fade in. Each component uses the same scroll-timeline name.</p><p>This page is linked to <a href="/experiments/scroll-timeline-with-separate-components">Scroll timeline with separate components</a>, where each component uses a different scroll-timeline name.</p>`;
	let description = ``;
</script>

<ScrollTimelineWarning />

<ExperimentItem {title} {description}>
	<FadeInTest />
	<FadeInTest />
	<FadeInTest />
	<FadeInTest />
	<FadeInTest />
	<FadeInTest />
	<FadeInTest />
	<FadeInTest />
	<FadeInTest />
	<FadeInTest />
	<FadeInTest />
	<FadeInTest />
	<FadeInTest />
	<FadeInTest />
	<FadeInTest />
	<FadeInTest />
</ExperimentItem>

<style>
</style>
