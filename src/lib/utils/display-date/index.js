/**
 * @param {string} date
 * @returns {string}
 */
export default function displayDate(date) {
	return new Date(date).toLocaleDateString('en-NL', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
}
