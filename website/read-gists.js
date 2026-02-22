import fs from 'fs';
import matter from 'gray-matter';

const formatGist = (gist, title) => {
	const { data, content } = matter(gist);

	const createUrlFromTitle = (title) =>
		title
			.replace('.md', '')
			.replace(/[^a-zA-Z0-9\s]/g, '')
			.split(' ')
			.join('-')
			.toLowerCase();

	const formatDate = (date) =>
		new Intl.DateTimeFormat('nl-NL', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		}).format(date);

	return {
		title: title.replace('.md', ''),
		url: createUrlFromTitle(title),
		humanDate: formatDate(data['date-added']),
		date: data['date-added'],
		metaData: data,
		content
	};
};

const getGistsFromObsidian = () => {
	const path =
		'../../../../Library/Mobile Documents/iCloud~md~obsidian/Documents/Second Brain/Gists';

	const gists = fs.readdirSync(path);
	if (!gists.length) {
		console.log('No gists found');
		return;
	}

	return gists.map((gistFileName) => {
		const gist = fs.readFileSync(`${path}/${gistFileName}`, 'utf8');
		return formatGist(gist, gistFileName);
	});
};

(() => {
	const gists = getGistsFromObsidian(formatGist);
	const publicGists = gists.filter((gist) => !gist.metaData.private);

	fs.writeFileSync('src/lib/data/gists.json', JSON.stringify(publicGists, null, 2));
})();
