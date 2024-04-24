import jsdom from 'jsdom';

import displayDate from '$lib/utils/display-date';

/**
 * @param {string} date
 * @returns {string}
 */
const reverseDate = (date) => {
	const [year, month, day] = date.split('-');
	return `${day}-${month}-${year}`;
};

/**
 * @param {{date: string}} a
 * @param {{date: string}} b
 */
const sortByDate = (a, b) => {
	if (a.date < b.date) return 1;
	if (a.date > b.date) return -1;
	return 0;
};

// const getBlogsFromPastPortfolio = async () => {
// 	const url = 'https://past.martijnnieuwenhuizen.nl';

// 	try {
// 		const response = await fetch(`${url}/`);
// 		const htmlPage = await response.text();

// 		// Create a DOM from the HTML page.
// 		const { JSDOM } = jsdom;
// 		const dom = new JSDOM(htmlPage);

// 		// Grab all elements.
// 		const pastPageLinks = Array.from(dom.window.document.querySelectorAll('.article-prev__link'));
// 		const pastPageTitles = Array.from(dom.window.document.querySelectorAll('.article-prev h2'));
// 		const pastPageDates = Array.from(
// 			dom.window.document.querySelectorAll('.article-prev__pub-date')
// 		);

// 		// Create a list of links.
// 		const links = pastPageLinks.map((link, index) => {
// 			const date = pastPageDates[index].innerHTML;
// 			const title = pastPageTitles[index].innerHTML;

// 			console.log('reverseDate(date): ', reverseDate(date));

// 			return {
// 				url: `${url}${link.getAttribute('href')}` || '',
// 				label: title || '',
// 				displayDate: date ? displayDate(reverseDate(date)) : '',
// 				date: date ? reverseDate(date) : '',
// 				external: true
// 			};
// 		});

// 		return links;
// 	} catch (err) {
// 		console.log('Could not fetch blog posts from past.martijnnieuwenhuizen.nl');
// 		console.log('err: ', err);

// 		return [];
// 	}
// };

const getBlogsFromGrrr = async () => {
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
				url: link.getAttribute('href') || '',
				label: link.getAttribute('title') || '',
				displayDate: date ? displayDate(date) : '',
				date: date || '',
				external: true
			};
		});

		return links;
	} catch (err) {
		console.log('Could not fetch blog posts from GRRR');
		console.log('err: ', err);

		return [];
	}
};

/**
 * @returns {Promise<{links: {url: string, label: string, date: string, external: boolean, displayDate: string}[]}>}
 */
export const load = async () => {
	// const pastPortfolioBlogs = await getBlogsFromPastPortfolio();
	const grrrBlogs = await getBlogsFromGrrr();

	// const items = [...grrrBlogs, ...pastPortfolioBlogs];
	const items = [...grrrBlogs];
	// sort by date
	const sortedItems = items.sort(sortByDate);

	return {
		links: sortedItems
	};
};
