import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (foo) => {
	return {
		showNameScroller: foo.url.pathname === '/'
	};
};
