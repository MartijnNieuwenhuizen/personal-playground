<script>
	import SvelteMarkdown from 'svelte-markdown';

	import MarkdownCode from '$lib/components/MarkdownCode/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	let { data } = $props();
</script>

<ExperimentItem title={data.title || ''} description="" showPageEffect={true}>
	<Block size="medium">
		<SvelteMarkdown source={data.content} renderers={{ code: MarkdownCode }} />
	</Block>
</ExperimentItem>

<style>
</style>
