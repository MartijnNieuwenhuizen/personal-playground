<script type="ts">
	import FadeInTest from '$lib/components/FadeInTest/index.svelte';
	import PlaygroundItem from '$lib/components/PlaygroundItem/index.svelte';

	let title = 'Scroll timeline with identical components';
	let description = `<p>A list of components that use the scroll-timeline API to fade in. Each component uses the same scroll-timeline name.</p><p>This page is linked to <a href="/playground/scroll-timeline-with-separate-components">Scroll timeline with separate components</a>, where each component uses a different scroll-timeline name.</p>`;
</script>

<PlaygroundItem {title} {description} hidePageEffect={true}>
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
</PlaygroundItem>

<style>
</style>
