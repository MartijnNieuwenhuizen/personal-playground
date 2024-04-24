'use strict';
import fs from 'fs';
import { mkdir } from 'node:fs';

import pascalCaseToDash from './pascal-case-to-dash.js';
import toHumanReadableText from './to-human-readable-text.js';
import writeFileErrorHandler from './write-file-error-handler.js';
import capitalizeFirstLetter from './capitalize-first-letter.js';

const generatePage = (componentName, showPageEffect) => {
	return `<script>
    import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

    const title = '${capitalizeFirstLetter(toHumanReadableText(componentName))}';
	const description = 'Add a description';
</script>

<ExperimentItem {title} {description} showPageEffect={${showPageEffect}}>
	<h2>Code here</h2>
</ExperimentItem>

<style lang="scss">
	h2 {
		color: red;
	}
</style>
`;
};

const createFile = (componentName, showPageEffect) => {
	const dir = `./src/routes/experiments/${pascalCaseToDash(componentName)}`;

	mkdir(dir, { recursive: false }, writeFileErrorHandler);

	fs.writeFile(
		`${dir}/+page.svelte`,
		generatePage(componentName, showPageEffect),
		writeFileErrorHandler
	);
};

const addFileToServerList = (componentName) => {
	const experimentsListFile = `./src/routes/experiments/+page.server.js`;

	fs.readFile(experimentsListFile, 'utf8', (err, data) => {
		if (err) throw err;

		// Create the new item.
		const newItem = {
			url: `/experiments/${pascalCaseToDash(componentName)}`,
			label: capitalizeFirstLetter(toHumanReadableText(componentName)),
			date: new Intl.DateTimeFormat('nl-NL', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit'
			}).format(new Date()),
			tags: []
		};

		// Find the location of the links array within the JavaScript code.
		const linksStartIndex = data.indexOf('const links = [');
		if (linksStartIndex === -1) {
			throw new Error('Could not find the "links" array in the JavaScript file.');
		}

		// Create the beginning of the links array with the new item as first item in the array.
		const updatedLinksArrayContent = `const links = [${JSON.stringify(newItem, null, 4)},`;

		// Replace the old first line of the links array with the newly generated content.
		const updatedData = data.replace(`const links = [`, updatedLinksArrayContent);

		// Write the updated JavaScript code back to the file
		fs.writeFile(experimentsListFile, updatedData, 'utf8', (err) => {
			if (err) {
				throw err;
			}
		});
	});
};

export default ({ componentName, showPageEffect }) => {
	return new Promise((resolve, reject) => {
		createFile(componentName, showPageEffect);
		addFileToServerList(componentName, showPageEffect);

		return resolve({ componentName, showPageEffect });
	});
};
