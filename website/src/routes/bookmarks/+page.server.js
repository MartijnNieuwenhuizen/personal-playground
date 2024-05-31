// import tags from '../experiments/tags';
import bookmarks from './bookmarks';

/**
 * @returns {Promise<{bookmarks: {url: string, label: string, date: string, tags: string[]}[]}>}
 */
export const load = async () => {
	/**
	 * Get a list of all tags and the number of matches
	 *
	 */
	const tags = bookmarks.reduce((acc, bookmark) => {
		bookmark.tags.forEach((tag) => {
			if (acc[tag]) {
				acc[tag]++;
			} else {
				acc[tag] = 1;
			}
		});
		return acc;
	}, {});

	return {
		bookmarks,
		tags
	};
};
