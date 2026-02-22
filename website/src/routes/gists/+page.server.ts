import gists from '$lib/data/gists.json';
import { sortGistsByDate } from '$lib/utils/sort-gists-by-date';

export const load = async () => {
	return {
		gists: sortGistsByDate(gists)
	};
};
