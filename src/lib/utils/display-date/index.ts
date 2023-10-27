export default function displayDate(date: string) {
	return new Date(date).toLocaleDateString('en-NL', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
}
