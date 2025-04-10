const links = [
	{
		url: '/experiments/apple-wwdc2025animation',
		label: `Apple's WWDC 2025 Animation`,
		date: '25-03-2025',
		tags: ['motion', 'css-only']
	},
	{
		url: '/experiments/double-drop-shadow',
		label: 'Double drop shadow',
		date: '02-03-2025',
		tags: ['css-only', 'drop-shadow']
	},
	{
		url: '/experiments/grid-auto-fit-and-auto-fill',
		label: 'Grid auto fit and auto fill',
		date: '28-02-2025',
		tags: ['css-grid', 'css-only']
	},
	{
		url: '/experiments/utopia-design-system',
		label: 'Utopia design system',
		date: '27-02-2025',
		tags: ['design-system', 'css-only']
	},
	{
		url: '/experiments/3dletter-animation-with-drop-shadow',
		label: '3dletter animation with drop shadow',
		date: '21-02-2025',
		tags: ['css-only', '3d', 'drop-shadow']
	},
	{
		url: '/experiments/transparent-title-with-image',
		label: 'Transparent title with image',
		date: '15-02-2025',
		tags: ['css-only', 'typography']
	},
	{
		url: '/experiments/badging-api',
		label: 'Badging api',
		date: '14-02-2025',
		tags: ['js']
	},
	{
		url: '/experiments/window-and-container-sized-title',
		label: 'Window and container sized title',
		date: '09-02-2025',
		tags: ['typography', 'css-only']
	},
	{
		url: '/experiments/scroll-based-gradient-animation',
		label: 'Scroll based gradient animation',
		date: '06-02-2025',
		tags: ['scroll-timeline', 'css-only']
	},
	{
		url: '/experiments/cursor-positioned-variable-font-animation',
		label: 'Cursor positioned variable font animation',
		date: '24-01-2025',
		tags: ['motion', 'css-only']
	},
	{
		url: '/experiments/view-transitions-for-element-animation',
		label: 'View transitions for element animation',
		date: '16-01-2025',
		tags: ['view-transitions', 'css-only']
	},
	{
		url: '/experiments/updates-to-the-box-model',
		label: 'Updates to the box model',
		date: '15-01-2025',
		tags: ['css-only']
	},
	{
		url: '/experiments/animated-panel-based-design',
		label: 'Animated panel based design',
		date: '08-01-2025',
		tags: ['animation', 'css-only']
	},
	// {
	// 	url: '/experiments/epub-converter',
	// 	label: 'Epub converter',
	// 	date: '17-10-2024',
	// 	tags: ['tool']
	// },
	{
		url: '/experiments/screen-width-with-css',
		label: 'Screen width with CSS',
		date: '09-08-2024',
		tags: ['css-only', 'trigonometric-functions']
	},
	{
		url: '/experiments/when-is-the-next-sunny-moment',
		label: 'When is the next sunny moment',
		date: '03-04-2024',
		tags: ['tool']
	},
	{
		url: '/experiments/two-speed-horizontal-scroll',
		label: 'Two speed horizontal scroll',
		date: '29-02-2024',
		tags: ['container-queries', 'scroll-timeline', 'css-only']
	},
	{
		url: '/experiments/prevent-collapse-with-container-type',
		label: 'Prevent collapse with container-type',
		date: '28-02-2024',
		tags: ['container-queries']
	},
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
		tags: ['page-transition', 'view-transitions', 'css-only']
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

export default links;
