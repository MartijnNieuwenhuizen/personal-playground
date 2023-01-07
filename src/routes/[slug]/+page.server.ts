import type { PageServerLoad } from './$types';

import { error } from '@sveltejs/kit';

import { getAllDynamicPages } from '../../utils/markdown';

export const load = (({ params: { slug } }) => {
	const pages = getAllDynamicPages();
	const page = pages.find((page) => page.url === `/${slug}`);

	if (!page) {
		throw error(404, `Page not found for slug" ${slug}`);
	}

	return {
		page: page
	};
}) satisfies PageServerLoad;
