import gists from '../../../gists.json';

export const load = async () => {
	return {
		gists: sortGistsByDate(gists)
	};
};

const sortGistsByDate = (gists: any[]) =>
	gists.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
