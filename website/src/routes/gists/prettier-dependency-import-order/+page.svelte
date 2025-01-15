<script>
	import Code from '$lib/components/Code/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	let title = 'Prettier - Dependency import order';
	let description = `Enforce a consistent order for import statements in JS/TS files with Prettier.`;

	let code = `// .prettierrc
{
    "importOrder": [
        "<THIRD_PARTY_MODULES>",
        "interface",
        "(?=content|api)",
        "data/translations/",
        "context/",
        "mock/",
        "config",
        "utils/",
        "hooks/",
        "(components/|./index)",
        ".svg",
        "^../(.*)$",
        "(?=./prepare|./styles.module.scss)"
    ],
    "importOrderSeparation": true
}`;
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<Block size="medium">
		<p>To enable this you need to add the following dependencies</p>
		<ul>
			<li><a href="https://www.npmjs.com/package/prettier">prettier</a></li>
			<li>
				<a href="https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports"
					>@trivago/prettier-plugin-sort-imports</a
				>
			</li>
		</ul>

		<Code {code} language="js" />
	</Block>
</ExperimentItem>

<style>
</style>
