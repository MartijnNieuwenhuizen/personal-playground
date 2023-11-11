import jsdom from 'jsdom';

import type { PageServerLoad } from './$types';

import displayDate from '$lib/utils/display-date';

export const load: PageServerLoad = async () => {
	try {
		// Get GRRR page with all of my blog posts.
		const response = await fetch('https://grrr.tech/authors/martijn-nieuwenhuizen/');
		const htmlPage = await response.text();

		// Create a DOM from the HTML page.
		const { JSDOM } = jsdom;
		const dom = new JSDOM(htmlPage);

		// Grab all elements.
		const grrrPageLinks = Array.from(dom.window.document.querySelectorAll('.post-preview'));
		const grrrPageDates = Array.from(dom.window.document.querySelectorAll('.post-preview time'));

		// Create a list of links.
		const links = grrrPageLinks.map((link, index) => {
			const date = grrrPageDates[index].getAttribute('datetime');

			return {
				url: link.getAttribute('href'),
				label: link.getAttribute('title'),
				date: displayDate(date),
				external: true
			};
		});

		return {
			links
		};
	} catch (err) {
		console.log('Could not fetch blog posts');
		console.log('err: ', err);

		return {
			links: []
		};
	}
};
