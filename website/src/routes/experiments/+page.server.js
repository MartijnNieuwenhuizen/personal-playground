import tags from './tags';
import experiments from './experiments';

export async function load() {
	return {
		experiments,
		tags
	};
}
