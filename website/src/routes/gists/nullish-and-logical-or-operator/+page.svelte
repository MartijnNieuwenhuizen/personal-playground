<script>
	import Code from '$lib/components/Code/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	let title = 'Svelte Global Selector';
	let description = ``;

	let code = `// Nullish operator
let a = null;
let b = a ?? "default"; // "default"

let c = 0;
let d = c ?? "default"; // 0 (because 0 is not null or undefined)

// Logical OR operator
let a = null;
let b = a || "default"; // "default"

let c = 0;
let d = c || "default"; // "default" (because 0 is falsy)
`;
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<Block size="medium">
		<Code {code} language="js" />
		<p>Use ?? when you only want to replace null or undefined values.</p>
		<p>Use || when you want to replace any falsy value.</p>
	</Block>
</ExperimentItem>

<style>
</style>
