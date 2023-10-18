import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { readdir } from 'node:fs/promises';

export const load: PageServerLoad = async () => {
	const filesToExclude = ['+page.server.ts', '+layout.svelte', '+page.svelte', 'style.css'];
	const files = await readdir(`src/routes/playground`);

	if (!files) {
		throw error(404, 'Not found');
	}

	const links = files.filter((file) => !filesToExclude.includes(file));

	return {
		links
	};
};
