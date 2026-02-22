import gists from '$lib/data/gists.json';
import type { PageServerLoad } from './$types';

// Enable prerendering for dynamic pages within [...slug]
export const prerender = true;

export const load = (({ params: { slug = '' } }) => {
	return gists.find((gist) => gist.url === slug);
}) satisfies PageServerLoad;
