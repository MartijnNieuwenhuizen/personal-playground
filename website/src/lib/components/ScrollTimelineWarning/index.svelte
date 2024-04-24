<script>
	import BrowserSupportWarning from '$lib/components/BrowserSupportWarning/index.svelte';
</script>

<BrowserSupportWarning
	shouldShowWarning={() => !('scrollTimeline' in document.body.style)}
	link="https://caniuse.com/?search=animation-timeline"
/>
