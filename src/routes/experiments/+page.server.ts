import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import tags from './tags';

import { readdir } from 'node:fs/promises';

export const load: PageServerLoad = async () => {
	// const filesToExclude = ['+page.server.ts', '+layout.svelte', '+page.svelte', 'style.css'];
	// const files = await readdir(`src/routes/experiments`);

	// if (!files) {
	// 	throw error(404, 'Not found');
	// }

	// const links = files.filter((file) => !filesToExclude.includes(file));

	// @TODO: Add Growing header text on scroll (let it explode)
	// @TODO: Add tags to the experiments
	// @TODO: Style lists
	// @TODO: Run by default on machine
	// @TODO: Fix autoscroll namelist on mobile
	// @TODO: Fix emoji list -> Maybe remove text?
	// @TODO: Deploy to Portfolio

	const links = [
		{
			url: '/experiments/opposite-scrollbar',
			label: 'Opposite scrollbar',
			date: '02-11-2023',
			tags: ['scroll-timeline', 'css']
		},
		{
			url: '/experiments/growing-header',
			label: 'Growing header',
			date: '02-11-2023',
			tags: ['scroll-timeline', 'css']
		},
		{
			url: '/experiments/scroll-timeline-with-identical-components',
			label: 'Scroll timeline with identical components',
			date: '30-10-2023',
			tags: ['scroll-timeline', 'css', 'motion']
		},
		{
			url: '/experiments/calculate-full-screen-title',
			label: 'Calculate full screen title',
			date: '27-10-2023',
			tags: ['typography', 'css', 'tool']
		},
		{
			url: '/experiments/full-screen-title',
			label: 'Full screen title',
			date: '27-10-2023',
			tags: ['typography', 'css']
		},
		{
			url: '/experiments/tour-the-france-stage-with-offset-path',
			label: 'Tour the france stage with offset path',
			date: '18-10-2023',
			tags: ['scroll-timeline', 'clip-path', 'css-variables', 'css']
		},
		{
			url: '/experiments/tour-the-france-stage-with-keyframe-animation',
			label: 'Tour the france stage with keyframe animation',
			date: '14-10-2023',
			tags: ['scroll-timeline', 'clip-path', 'css']
		},
		{
			url: '/experiments/bauhaus',
			label: 'Bauhaus',
			date: '11-10-2023',
			tags: ['css-grid', 'css', 'css-art']
		},
		{
			url: '/experiments/grrr-block-with-css-grid',
			label: 'GRRR Block with CSS grid',
			date: '03-10-2023',
			tags: ['CSS-grid', 'layout', 'css']
		},
		{
			url: '/experiments/sticky-page-blocks',
			label: 'Sticky page blocks',
			date: '21-8-2023',
			tags: ['sticky', 'layout']
		},
		{
			url: '/experiments/space-toggles',
			label: 'Space toggles',
			date: '13-7-2023',
			tags: ['css-variables', 'css']
		}
	];

	return {
		links,
		tags
	};
};
