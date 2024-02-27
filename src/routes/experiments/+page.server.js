import tags from './tags';

export async function load() {
	const links = [
		// {
		// 	url: '/experiments/css-scroll-timeline-with-intersection-observer',
		// 	label: 'CSS scroll timeline with intersection observer',
		// 	date: '27-02-2024',
		// 	tags: ['scroll-timeline', 'motion']
		// },
		{
			url: '/experiments/horizontal-scroll',
			label: 'Horizontal scroll',
			date: '26-02-2024',
			tags: ['scroll-timeline', 'css-only']
		},
		{
			url: '/experiments/haptic-feedback',
			label: 'Haptic feedback',
			date: '15-02-2024',
			tags: ['js']
		},
		{
			url: '/experiments/fixed-logo-change',
			label: 'Fixed logo - change on scroll',
			date: '07-02-2024',
			tags: ['motion', 'scroll-timeline', 'css-only']
		},
		{
			url: '/experiments/gradient-text',
			label: 'Gradient text',
			date: '01-02-2024',
			tags: ['css-only', 'gradient']
		},
		{
			url: '/experiments/layered-svg',
			label: 'Layered svg',
			date: '23-01-2024',
			tags: ['scroll-timeline', 'css-only', 'motion']
		},
		{
			url: '/experiments/appearing-footer',
			label: 'Appearing footer',
			date: '25-12-2023',
			// tags: ['css-only']
			tags: []
		},
		{
			url: '/experiments/fluid-svg',
			label: 'Fluid svg',
			date: '20-12-2023',
			tags: ['svg']
		},
		// {
		// 	url: '/experiments/3dharry-potter-intro',
		// 	label: '3D Harry Potter intro',
		// 	date: '09-12-2023',
		// 	tags: ['threejs', 'motion', '3d']
		// },
		{
			url: '/experiments/simple-3d-scene-in-svelte',
			label: 'Simple 3D scene in Svelte',
			date: '09-12-2023',
			tags: ['threejs', '3d']
		},
		{
			url: '/experiments/loading-image-from-blurred-version',
			label: 'Loading image from blurred version',
			date: '23-11-2023',
			tags: ['motion']
		},
		// {
		// 	url: '/experiments/arcs-in-css',
		// 	label: 'Arcs in css',
		// 	date: '22-11-2023',
		// 	tags: ['trigonometric-functions', 'css-only']
		// },
		{
			url: '/experiments/card-to-header-page-transition',
			label: 'Card to header page transition',
			date: '21-11-2023',
			tags: ['page-transition', 'css-only']
		},
		// {
		// 	url: '/experiments/sentence-highlighter',
		// 	label: 'Sentence highlighter',
		// 	date: '03-11-2023',
		// 	tags: []
		// },
		{
			url: '/experiments/rocket-progress-bar',
			label: 'Rocket progress bar/scrollbar',
			date: '03-11-2023',
			tags: ['scroll-timeline', 'css-only']
		},
		{
			url: '/experiments/opposite-scrollbar',
			label: 'Opposite scrollbar',
			date: '02-11-2023',
			tags: ['scroll-timeline', 'css-only']
		},
		{
			url: '/experiments/growing-header',
			label: 'Growing header',
			date: '02-11-2023',
			tags: ['scroll-timeline', 'css-only']
		},
		{
			url: '/experiments/scroll-timeline-with-identical-components',
			label: 'Scroll timeline with identical components',
			date: '30-10-2023',
			tags: ['scroll-timeline', 'css-only', 'motion']
		},
		{
			url: '/experiments/calculate-full-screen-title',
			label: 'Calculate full screen title',
			date: '27-10-2023',
			tags: ['typography', 'css-only', 'tool']
		},
		{
			url: '/experiments/full-screen-title',
			label: 'Full screen title',
			date: '27-10-2023',
			tags: ['typography', 'css-only']
		},
		{
			url: '/experiments/tour-the-france-stage-with-offset-path',
			label: 'Tour the france stage with offset path',
			date: '18-10-2023',
			tags: ['scroll-timeline', 'clip-path', 'css-variables', 'css-only']
		},
		{
			url: '/experiments/tour-the-france-stage-with-keyframe-animation',
			label: 'Tour the france stage with keyframe animation',
			date: '14-10-2023',
			tags: ['scroll-timeline', 'clip-path', 'css-only']
		},
		{
			url: '/experiments/bauhaus',
			label: 'Bauhaus',
			date: '11-10-2023',
			tags: ['css-grid', 'css-only', 'css-art']
		},
		{
			url: '/experiments/grrr-block-with-css-grid',
			label: 'GRRR Block with CSS grid',
			date: '03-10-2023',
			tags: ['CSS-grid', 'layout', 'css-only']
		},
		{
			url: '/experiments/sticky-page-blocks',
			label: 'Sticky page blocks',
			date: '21-8-2023',
			tags: ['sticky', 'layout']
		},
		{
			url: '/experiments/space-toggles',
			label: 'Space toggles',
			date: '13-7-2023',
			tags: ['css-variables', 'css-only']
		}
	];

	return {
		links,
		tags
	};
}
