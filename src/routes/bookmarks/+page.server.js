/**
 * @returns {Promise<{bookmarks: {url: string, label: string, date: string, displayDate: string}[]}>}
 */
export const load = async () => {
	const bookmarks = [
		{
			url: 'https://www.google.com',
			label: 'Google',
			date: '2020-02-01'
		}
	];

	return {
		bookmarks
	};
};
