<script>
	import Code from '$lib/components/Code/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	let title = 'Svelte Global Selector';
	let description = ``;

	let code = `// Styling the a element globally from a random file.
:global(a) {}

// You can also use classes
:global(.hover-fade-list li) {}
`;
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<Block size="medium">
		<Code {code} language="css" />
	</Block>
</ExperimentItem>

<style>
</style>
