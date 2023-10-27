import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { readdir } from 'node:fs/promises';

export const load: PageServerLoad = async () => {
	// const filesToExclude = ['+page.server.ts', '+layout.svelte', '+page.svelte', 'style.css'];
	// const files = await readdir(`src/routes/playground`);

	// if (!files) {
	// 	throw error(404, 'Not found');
	// }

	// const links = files.filter((file) => !filesToExclude.includes(file));

	const links = [
		{
			url: '/playground/calculate-full-screen-title',
			label: 'Calculate full screen title',
			date: '27-10-2023'
		},
		{
			url: '/playground/full-screen-title',
			label: 'Full screen title',
			date: '27-10-2023'
		},
		{
			url: '/playground/tour-the-france-stage-with-offset-path',
			label: 'Tour the france stage with offset path',
			date: '18-10-2023'
		},
		{
			url: '/playground/tour-the-france-stage-with-keyframe-animation',
			label: 'Tour the france stage with keyframe animation',
			date: '14-10-2023'
		},
		{
			url: '/playground/bauhaus',
			label: 'Bauhaus',
			date: '11-10-2023'
		},
		{
			url: '/playground/grrr-block-with-css-grid',
			label: 'GRRR Block with CSS grid',
			date: '03-10-2023'
		},
		{
			url: '/playground/sticky-page-blocks',
			label: 'Sticky page blocks',
			date: '21-8-2023'
		},
		{
			url: '/playground/space-toggles',
			label: 'Space toggles',
			date: '13-7-2023'
		}
	];

	return {
		links
	};
};
