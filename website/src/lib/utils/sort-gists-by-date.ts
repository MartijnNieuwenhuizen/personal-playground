export const sortGistsByDate = (gists: any[]) =>
	gists.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
