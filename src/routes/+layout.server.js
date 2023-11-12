// import type { LayoutServerLoad } from './$types';

/** @type {import('./$types').LayoutServerLoad} */
export async function load(foo) {
	return {
		showNameScroller: foo.url.pathname === '/'
	};
}
