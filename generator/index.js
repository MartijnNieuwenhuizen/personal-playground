'use strict';

import inquirer from 'inquirer';

import displayError from './display-error.js';
import generateExperimentPage from './generate-experiment-page.js';

(async function () {
	const inquirerPromptFactory = (prompt) => inquirer.prompt([prompt]).catch(displayError);

	const { componentName } = await inquirerPromptFactory({
		type: 'name',
		message: "🚀 What's the name of the new experiment? (in PascalCase)",
		name: 'componentName'
	});

	const { showPageEffect } = await inquirerPromptFactory({
		type: 'confirm',
		message: '✨ Show page effect',
		name: 'showPageEffect'
	});

	generateExperimentPage({ componentName, showPageEffect }).then(() => {
		console.log(`🚀 Whoop Whoop, a new play has been created!`);
	});
})();
