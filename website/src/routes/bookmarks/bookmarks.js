const bookmarks = [
	{
		label:
			'Use attribute in CSS selector to prevent specific CSS selectors for View Transition names',
		tags: ['CSS', 'Front-end', 'view transitions'],
		url: 'https://www.linkedin.com/posts/bramus_a-feature-shipping-in-chrome-133-which-activity-7287822882150182913-cAgT?utm_source=share&utm_medium=member_desktop',
		date: '24-01-2025'
	},
	{
		label: 'Transitioning to auto',
		tags: ['CSS', 'Front-end', 'motion'],
		url: 'https://frontendmasters.com/blog/one-of-the-boss-battles-of-css-is-almost-won-transitioning-to-auto',
		date: '08-01-2025'
	},
	{
		label: 'Merge existing codebases into a monorepo',
		tags: ['git'],
		url: 'https://norday.tech/posts/2024/merge-existing-codebases-into-a-monorepo/',
		date: '01-12-2024'
	},
	{
		label: 'Map Filter Reduce',
		tags: ['JS', 'functional programming', 'Front-end'],
		url: 'https://norday.tech/posts/2024/how-to-use-map-filter-and-reduce-in-javascript/',
		date: '24-11-2024'
	},
	{
		label: 'Native page transitions in real life',
		tags: ['CSS', 'page transitions', 'Front-end'],
		url: 'https://frontendmasters.com/blog/',
		date: '11-10-2024'
	},
	{
		label: 'Toegankelijkheid overzicht bij de overheid',
		tags: ['Front-end', 'accessibility'],
		url: 'https://cell-0.com/blog/komt-er-een-toezichthouder-voor-het-besluit-digitale-toegankelijkheid-overheid-een-beetje-misschien',
		date: '13-09-2024'
	},
	{
		label: 'CSS mutation observer',
		tags: ['Front-end', 'CSS', 'mutation observer', 'Bramus'],
		url: 'https://www.bram.us/2024/08/31/introducing-bramus-style-observer-a-mutationobserver-for-css/',
		date: '01-08-2024'
	},
	{
		label: 'Why is Tailwind a bad idea',
		tags: ['CSS', 'Heydon', 'Trailwind', 'Utility first CSS'],
		url: 'https://heydonworks.com/article/what-is-utility-first-css/',
		date: '28-07-2024'
	},
	{
		label: 'Scroll driven animations',
		tags: ['CSS', 'Scroll-timeline'],
		url: 'https://scroll-driven-animations.style/',
		date: 'Some time in the past'
	},
	{
		label: 'Animate buttons with View Transitions',
		tags: ['CSS', 'Motion', 'View Transitions'],
		url: 'https://jakearchibald.com/2024/view-transitions-handling-aspect-ratio-changes/',
		date: 'Some time in the past'
	},
	{
		label: 'Closest Aspect Ratio',
		tags: ['Aspect Ratio', 'CSS', 'Images'],
		url: 'https://lawlesscreation.github.io/nearest-aspect-ratio/',
		date: 'Some time in the past'
	},
	{
		label: 'Inside the Git Folder',
		tags: ['git'],
		url: 'https://wizardzines.com/comics/inside-git/',
		date: 'Some time in the past'
	},
	{
		label: 'Module opperator',
		tags: ['JS', 'Modulo'],
		url: 'https://www.joshwcomeau.com/javascript/modulo-operator/',
		date: 'Some time in the past'
	},
	{
		label: 'A lot of custom hooks',
		tags: ['Hooks', 'React'],
		url: 'https://usehooks.com/?ck_subscriber_id=2125261357',
		date: 'Some time in the past'
	},
	{
		label: 'Floating labels for forms',
		tags: ['CSS', 'Forms'],
		url: 'https://muffinman.io/blog/css-only-floating-input-labels/',
		date: 'Some time in the past'
	},
	{
		label: 'Nice color pallets',
		tags: ['Colors', 'Design'],
		url: 'https://access.mymind.com/colors',
		date: 'Some time in the past'
	},
	{
		label: 'Dates in JS',
		tags: ['Dates', 'JS'],
		url: 'https://livecodestream.dev/post/everything-you-should-know-about-comparing-dates-in-javascript/',
		date: 'Some time in the past'
	},
	{
		label: 'Handling Abstractions in code',
		tags: ['Abstractions', 'Design patterns', 'JS'],
		url: 'https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction',
		date: 'Some time in the past'
	},
	{
		label: 'ContainerQueries rundown',
		tags: ['CSS', 'Container queries'],
		url: 'https://web.dev/cq-stable/',
		date: 'Some time in the past'
	},
	{
		label: 'Responsive images',
		tags: ['Front-end', 'Images', 'responsive images'],
		url: 'https://medium.com/@woutervanderzee/responsive-images-with-srcset-and-sizes-fc434845e948',
		date: 'Some time in the past'
	},
	{
		label: 'SvelteKit Routing',
		tags: ['Routing', 'Svelte', 'SvelteKit'],
		url: 'https://joyofcode.xyz/sveltekit-routing#the-power-of-nested-routes',
		date: 'Some time in the past'
	},
	{
		label: 'Promises',
		tags: ['JS', 'async', 'promises'],
		url: 'https://www.builder.io/blog/promises',
		date: 'Some time in the past'
	},
	{
		label: 'React Forms, explains multiple types of inputs',
		tags: ['Forms', 'React', 'State'],
		url: 'https://www.joshwcomeau.com/react/data-binding/',
		date: 'Some time in the past'
	},
	{
		label: 'YouTube Thumbnail scraper',
		tags: ['Scraper', 'YouTube'],
		url: 'https://codepo8.github.io/youtube-images-scraper/',
		date: 'Some time in the past'
	},
	{
		label: 'Autoplaying video (formats)',
		tags: ['Ffmpeg', 'Formatting', 'Lottie', 'Video'],
		url: 'https://css-tricks.com/gifs-without-the-gif-the-most-performant-image-and-video-options-right-now/',
		date: 'Some time in the past'
	},
	{
		label: 'Console scripts',
		tags: ['Console', 'JS', 'Productivity'],
		url: 'https://codepo8.github.io/dearconsole/',
		date: 'Some time in the past'
	},
	{
		label: 'Leuke moestuin weetjes + shop',
		tags: ['Moestuin'],
		url: 'https://www.moestuinweetjes.com/',
		date: 'Some time in the past'
	},
	{
		label: 'Write 1 sentence per line',
		tags: ['Writing'],
		url: 'https://sive.rs/1s',
		date: 'Some time in the past'
	},
	{
		label: 'GTM in Next.js',
		tags: ['GA', 'GTM', 'Next.js'],
		url: 'https://morganfeeney.com/how-to/integrate-google-tag-manager-with-next-js',
		date: 'Some time in the past'
	},
	{
		label: 'JS Statements VS Expressions',
		tags: ['JS', 'Js core'],
		url: 'https://www.joshwcomeau.com/javascript/statements-vs-expressions/',
		date: 'Some time in the past'
	},
	{
		label: 'Aspect Ratio calculator',
		tags: ['CSS', 'Images', 'Tools'],
		url: 'https://aspectratiocalculator.com/',
		date: 'Some time in the past'
	},
	{
		label: 'Simple but nice page transition',
		tags: ['Animation', 'Page transition'],
		url: 'https://www.dancereflections-vancleefarpels.com/en/agenda',
		date: 'Some time in the past'
	},
	{
		label: 'Accessibility pattern library (W3)',
		tags: ['Component library', 'accessibility'],
		url: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
		date: 'Some time in the past'
	},
	{
		label: 'Ball potten (Seasonal homestead)',
		tags: ['Conserveren', 'Weck'],
		url: 'https://www.mason-jars.nl/?gclid=Cj0KCQjw37iTBhCWARIsACBt1IwJFYntROXJxunswvVY57Wj6APwqJ6-KEcL_EUOmQEsyPgx16NOr_QaAtoZEALw_wcB',
		date: 'Some time in the past'
	},
	{
		label: 'Functional programming (types), shared by Harmen',
		tags: ['Functional Programming', 'JS'],
		url: 'https://blog.ploeh.dk/2018/03/19/functors-applicatives-and-friends/',
		date: 'Some time in the past'
	},
	{
		label: 'Vis kalender + bijvangst',
		tags: ['Fish', 'Food', 'Vis'],
		url: 'https://www.northseachefs.be/',
		date: 'Some time in the past'
	},
	{
		label: 'Good on you (check sustainabillity brands)',
		tags: [],
		url: 'https://goodonyou.eco/',
		date: 'Some time in the past'
	},
	{
		label: 'All about Dates in JS',
		tags: ['Dates', 'JS'],
		url: 'https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/',
		date: 'Some time in the past'
	},
	{
		label: 'Diagrams/flowcharts in Markdown files',
		tags: ['Documentation', 'Flowchart', 'GitHub', 'Markdown', 'Readme'],
		url: 'https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/',
		date: 'Some time in the past'
	},
	{
		label: 'Favicon 202w',
		tags: ['Favicon'],
		url: 'https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs',
		date: 'Some time in the past'
	},
	{
		label: 'Details element improvement',
		tags: ['HTML', 'Web components'],
		url: 'https://www.bram.us/2022/02/10/add-responsive-friendly-enhancements-to-details-with-details-utils/',
		date: 'Some time in the past'
	},
	{
		label: 'Alternative to animate width and height',
		tags: ['Animation', 'CSS', 'Performance'],
		url: 'https://pqina.nl/blog/animating-width-and-height-without-the-squish-effect/',
		date: 'Some time in the past'
	},
	{
		label: 'Storybook inspiration',
		tags: ['Component library', 'Storybook'],
		url: 'http://storybook.anyvision.co/?path=/docs/style-space--page',
		date: 'Some time in the past'
	},
	{
		label: 'CSS Gradients Deep dive',
		tags: ['CSS', 'Gradient'],
		url: 'https://www.smashingmagazine.com/2022/01/css-radial-conic-gradient/',
		date: 'Some time in the past'
	},
	{
		label: 'Core web vitals - case study and core explanation',
		tags: ['Core web vitals', 'Performance', 'SEO'],
		url: 'https://smashingmagazine.com/2021/12/core-web-vitals-case-study-smashing-magazine/',
		date: 'Some time in the past'
	},
	{
		label: 'Typography tips for 2022',
		tags: ['Typography'],
		url: 'https://css-tricks.com/typography-links-january-2022/',
		date: 'Some time in the past'
	},
	{
		label: 'Fluid type tool',
		tags: ['CSS', 'Fonts', 'Typography'],
		url: 'https://modern-fluid-typography.vercel.app/',
		date: 'Some time in the past'
	},
	{
		label: 'How to support a junior',
		tags: ['Junior', 'Mentoring'],
		url: 'https://blog.annamcdougall.com/how-to-support-junior-developers-ckpvljs1m0ax1zls1dfc32eqw',
		date: 'Some time in the past'
	},
	{
		label: 'Animated grow item in grid',
		tags: ['Animation', 'CSS'],
		url: 'https://tympanus.net/Development/GridZoom/',
		date: 'Some time in the past'
	},
	{
		label: 'Ribbons on the web',
		tags: ['CSS', 'Design', 'Three.js'],
		url: 'https://tympanus.net/codrops/2021/11/29/animated-3d-ribbons-with-three-js/',
		date: 'Some time in the past'
	},
	{
		label: 'Defensive CSS tricks',
		tags: ['CSS'],
		url: 'https://ishadeed.com/article/defensive-css/',
		date: 'Some time in the past'
	},
	{
		label: 'Fluent Typograph (tool)',
		tags: ['CSS', 'Typography'],
		url: 'https://modern-fluid-typography.vercel.app/',
		date: 'Some time in the past'
	},
	{
		label: 'Accessibility debunk arguments',
		tags: ['accessibility'],
		url: 'https://a11ymyths.com/?utm_source=CSS-Weekly&utm_campaign=Issue-484&utm_medium=RSS',
		date: 'Some time in the past'
	},
	{
		label: 'Arguments to just make the site accessible',
		tags: ['accessibility'],
		url: 'https://hiddedevries.nl/en/blog/2021-12-05-how-many-people-with-disabilities-use-our-site',
		date: 'Some time in the past'
	},
	{
		label: 'Width and height on images',
		tags: ['CSS', 'Images', 'Performance'],
		url: 'https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/',
		date: 'Some time in the past'
	},
	{
		label: 'Netlify on demand builders',
		tags: ['ISR', 'Netlify'],
		url: 'https://docs.netlify.com/configure-builds/on-demand-builders/',
		date: 'Some time in the past'
	},
	{
		label: 'ISR explained',
		tags: ['ISR', 'Netlify', 'Next.js'],
		url: 'https://www.smashingmagazine.com/2021/04/incremental-static-regeneration-nextjs/',
		date: 'Some time in the past'
	},
	{
		label: 'Next.js Preview mode',
		tags: ['Netlify', 'Next.js'],
		url: 'https://youtu.be/UaWSboXn0-8',
		date: 'Some time in the past'
	},
	{
		label: 'Serverless functions tutorial',
		tags: ['Netlify', 'Serverless functions'],
		url: 'https://explorers.netlify.com/learn/up-and-running-with-serverless-functions?utm_campaign=devex-bh&utm_source=twitter&utm_medium=social&utm_content=explorers-serverless-course',
		date: 'Some time in the past'
	},
	{
		label: 'Drawings in design inspiration',
		tags: ['Design inspiration', 'Drawing'],
		url: 'https://www.gsoft.com/en/',
		date: 'Some time in the past'
	},
	{
		label: 'JS Utils',
		tags: ['ES6', 'Functional Programming', 'JS', 'Utils'],
		url: 'https://1loc.dev/?ref=tiny-helpers',
		date: 'Some time in the past'
	},
	{
		label: 'Korrelige gradients',
		tags: ['CSS', 'Design', 'Gradient'],
		url: 'https://css-tricks.com/grainy-gradients/',
		date: 'Some time in the past'
	},
	{
		label: 'GTM in React/Next.js app',
		tags: ['GA', 'GTM', 'Next.js', 'React'],
		url: 'https://www.learnbestcoding.com/post/9/easiest-way-to-integrate-google-analytics-with-react-js-and-next-js',
		date: 'Some time in the past'
	},
	{
		label: 'Design patterns game',
		tags: ['Design patterns', 'JS'],
		url: 'https://designpatternsgame.com/patterns',
		date: 'Some time in the past'
	},
	{
		label: 'https://tanzhaus-nrw.de/de',
		tags: ['Design', 'Design inspiration'],
		url: 'https://tanzhaus-nrw.de/de',
		date: 'Some time in the past'
	},
	{
		label: 'http://web.dev - Learn CSS and CSS reference',
		tags: ['CSS', 'Front-end', 'Learning'],
		url: 'https://web.dev/learn/css/',
		date: 'Some time in the past'
	},
	{
		label: 'https://egghead.io/q/next',
		tags: ['Front-end', 'Tutorials', 'Video'],
		url: 'https://egghead.io/',
		date: 'Some time in the past'
	},
	{
		label: 'Check NPM Package Health',
		tags: ['NPM', 'Open Source', 'Packages'],
		url: 'https://snyk.io/advisor/',
		date: 'Some time in the past'
	},
	{
		label: 'Generate favicon',
		tags: ['Favicon'],
		url: 'https://realfavicongenerator.net/',
		date: 'Some time in the past'
	},
	{
		label: 'FFMPEG guide',
		tags: ['Ffmpeg', 'Images'],
		url: 'https://ffmpeg.guide/',
		date: 'Some time in the past'
	},
	{
		label: 'React Hooks (a lot of useful examples)',
		tags: ['Examples', 'Hooks', 'React'],
		url: 'https://github.com/streamich/react-use',
		date: 'Some time in the past'
	},
	{
		label: 'http://next.isjs Images and SEO optimalization',
		tags: ['Images', 'Next.js', 'SEO'],
		url: 'https://wallis.dev/blog/seo-and-image-optimization-with-next-js',
		date: 'Some time in the past'
	},
	{
		label: 'A lot of motion inspiration website',
		tags: ['Animation', 'Design', 'inspiration'],
		url: 'https://nannalagerman.com/',
		date: 'Some time in the past'
	},
	{
		label: 'How to choose a typeface',
		tags: ['Design', 'Fonts', 'Typography'],
		url: 'https://www.smashingmagazine.com/2011/03/how-to-choose-a-typeface/',
		date: 'Some time in the past'
	},
	{
		label: 'Better static site regeneration with Next.js',
		tags: ['Architecture', 'Front-end', 'Next.js', 'React'],
		url: 'https://www.smashingmagazine.com/2021/04/incremental-static-regeneration-nextjs/',
		date: 'Some time in the past'
	},
	{
		label: 'Accesible toggle',
		tags: ['Front-end', 'accessibility'],
		url: 'https://kittygiraudel.com/2021/04/05/an-accessible-toggle/',
		date: 'Some time in the past'
	},
	{
		label: 'Ally style guide (with components)',
		tags: ['Component library', 'Examples', 'accessibility'],
		url: 'https://a11y-style-guide.com/style-guide/',
		date: 'Some time in the past'
	},
	{
		label: 'Component gallery!',
		tags: ['Component library', 'Examples', 'accessibility'],
		url: 'https://component.gallery/',
		date: 'Some time in the past'
	},
	{
		label: 'CSS Underlines',
		tags: ['CSS', 'Underline'],
		url: 'https://css-irl.info/animating-underlines/',
		date: 'Some time in the past'
	},
	{
		label: 'Favicon genereren',
		tags: ['Favicon', 'Front-end'],
		url: 'https://favicon.io/favicon-converter/',
		date: 'Some time in the past'
	},
	{
		label: 'Variable fonts fallback',
		tags: ['Front-end', 'Typography', 'variable fonts'],
		url: 'https://www.zeichenschatz.net/typografie/implementing-a-variable-font-with-fallback-web-fonts.html',
		date: 'Some time in the past'
	},
	{
		label: 'React Hooks explained (YouTube)',
		tags: ['Front-end', 'Hooks', 'React'],
		url: 'https://youtu.be/TNhaISOUy6Q',
		date: 'Some time in the past'
	},
	{
		label: 'CORS visualized',
		tags: ['CORS', 'JS', 'Server'],
		url: 'https://dev.to/lydiahallie/cs-visualized-cors-5b8h',
		date: 'Some time in the past'
	},
	{
		label: 'Learn eleventy with nunjucks (including blog)',
		tags: ['Architecture', 'Eleventy', 'Front-end', 'Nunjucks'],
		url: 'https://www.netlify.com/blog/2020/04/09/lets-learn-eleventy-boost-your-jamstack-skills-with-11ty/',
		date: 'Some time in the past'
	},
	{
		label: 'Handling Long and short content with CSS',
		tags: ['CSS', 'Content'],
		url: 'https://ishadeed.com/article/css-short-long-content/',
		date: 'Some time in the past'
	},
	{
		label: 'Favicon generation 2020',
		tags: ['Favicon', 'Front-end', 'Web'],
		url: 'https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs',
		date: 'Some time in the past'
	},
	{
		label: 'CSS Shadows generator',
		tags: ['CSS', 'Shadows'],
		url: 'https://brumm.af/shadows',
		date: 'Some time in the past'
	},
	{
		label: 'Annotate on the web (app.bubbles)',
		tags: ['Annotations', 'Web', 'review'],
		url: 'https://www.usebubbles.com/',
		date: 'Some time in the past'
	},
	{
		label: 'Self organising teams (Mirabeau)',
		tags: ['Guild', 'Management', 'Self organising teams', 'Way of working'],
		url: 'https://www.mirabeau.nl/en/articles/news/2018/articles/optimizing-for-trust',
		date: 'Some time in the past'
	},
	{
		label: 'JS question (good explanations for the basics)',
		tags: ['Interview', 'JS'],
		url: 'https://skilled.dev/course/javascript-interview-questions',
		date: 'Some time in the past'
	},
	{
		label: 'Google font helper',
		tags: ['Fonts', 'Front-end', 'Google'],
		url: 'https://gwfh.mranftl.com/fonts',
		date: 'Some time in the past'
	},
	{
		label: 'ToDoist filters',
		tags: ['ToDoist'],
		url: 'https://www.dandywithlens.com/ultimate-guide-todoist-filters/',
		date: 'Some time in the past'
	},
	{
		label: 'GitHub Actions linter',
		tags: ['CI-CD', 'DevTools', 'GitHub', 'GitHub Actions'],
		url: 'https://rhysd.github.io/actionlint/',
		date: 'Some time in the past'
	},
	{
		label: 'Nice agency work',
		tags: ['Agency', 'Cool Agency'],
		url: 'https://www.instagram.com/ragged_edge/',
		date: 'Some time in the past'
	},
	{
		label: 'Edit.photo (from Rik Schennink)',
		tags: ['Edit', 'Images', 'JPG', 'Photos'],
		url: 'https://edit.photo/?ref=pqina',
		date: 'Some time in the past'
	},
	{
		label: 'Random image generator',
		tags: ['Images', 'Web'],
		url: 'https://picsum.photos/',
		date: 'Some time in the past'
	},
	{
		label: 'MutationObserver - Nice explenation',
		tags: ['Front-end', 'JS', 'MutationObserver'],
		url: 'https://www.smashingmagazine.com/2019/04/mutationobserver-api-guide/',
		date: 'Some time in the past'
	},
	{
		label: 'Accessibility In Chrome DevTools',
		tags: ['DevTools', 'Front-end', 'accessibility'],
		url: 'https://www.smashingmagazine.com/2020/08/accessibility-chrome-devtools/',
		date: 'Some time in the past'
	},
	{
		label: "Accessible and interactive SVG's",
		tags: ['Front-end', 'GRRR', 'SVG', 'TOC', 'accessibility'],
		url: 'https://css-tricks.com/accessible-svgs/',
		date: 'Some time in the past'
	},
	{
		label: 'Dev tips',
		tags: ['Front-end', 'Tips'],
		url: 'https://umaar.com/dev-tips/',
		date: 'Some time in the past'
	},
	{
		label: 'repl',
		tags: ['Browser', 'Code', 'JS'],
		url: 'https://repl.it/',
		date: 'Some time in the past'
	},
	{
		label: 'Web component examples',
		tags: ['Custom elements', 'Front-end', 'HTML', 'JS', 'Web components'],
		url: 'https://github.com/mdn/web-components-examples',
		date: 'Some time in the past'
	},
	{
		label: 'Node.js Mock API package',
		tags: ['Front-end', 'Mock', 'Node.js', 'Package'],
		url: 'https://github.com/muratcorlu/connect-api-mocker',
		date: 'Some time in the past'
	},
	{
		label: 'photopea.com (Photoshop on the web)',
		tags: ['Application'],
		url: 'https://www.photopea.com/',
		date: 'Some time in the past'
	},
	{
		label: 'Home of alternative web design',
		tags: ['Art direction on the web', 'Design'],
		url: 'https://www.hoverstat.es/',
		date: 'Some time in the past'
	},
	{
		label: 'Design inspiration by ReadyMag',
		tags: ['Art direction on the web', 'Design', 'inspiration'],
		url: 'https://readymag.com/examples/usecases',
		date: 'Some time in the past'
	},
	{
		label: 'Design book recomandation by Anna Petrova',
		tags: ['Art direction on the web', 'Design'],
		url: 'https://readymag.com/repponen/designbooks/',
		date: 'Some time in the past'
	},
	{
		label: 'Harry Roberts - blog',
		tags: ['Blog', 'Coding', 'Front-end', 'Keeping up to date'],
		url: 'https://csswizardry.com/archive/',
		date: 'Some time in the past'
	},
	{
		label: 'SVG Animation with clip path',
		tags: ['Animation', 'SVG'],
		url: 'https://blog.bitsrc.io/creating-morphing-animations-with-css-clip-path-3c3bf5e4335f',
		date: 'Some time in the past'
	},
	{
		label: 'Handling HTML templates with Custom Elements',
		tags: ['Custom elements', 'HTML'],
		url: 'https://www.html5rocks.com/en/tutorials/webcomponents/imports/https://www.html5rocks.com/en/tutorials/webcomponents/imports/',
		date: 'Some time in the past'
	},
	{
		label: 'Diagonal Layout with CSS',
		tags: ['CSS', 'Front-end'],
		url: 'https://9elements.com/blog/pure-css-diagonal-layouts/',
		date: 'Some time in the past'
	},
	{
		label: 'Vasilis‘s blog',
		tags: ['Blog', 'Keeping up to date'],
		url: 'https://vasilis.nl/nerd/',
		date: 'Some time in the past'
	},
	{
		label: 'Front-end Front',
		tags: ['Front-end', 'Keeping up to date'],
		url: 'https://frontendfront.com/',
		date: 'Some time in the past'
	},
	{
		label: 'Smashing Magazine',
		tags: ['Design', 'Front-end', 'Keeping up to date'],
		url: 'https://www.smashingmagazine.com/',
		date: 'Some time in the past'
	},
	{
		label: 'Adactio blog by Jeremy Keith',
		tags: ['Blog', 'Front-end', 'Keeping up to date'],
		url: 'https://adactio.com/',
		date: 'Some time in the past'
	},
	{
		label: 'SuperOrganizers Archive',
		tags: ['Blog', 'Fun to read', 'GTD', 'Notion', 'inspiration'],
		url: 'https://superorganizers.substack.com/archive?utm_source=menu-dropdown',
		date: 'Some time in the past'
	},
	{
		label: 'Parcel.js',
		tags: ['Front-end', 'build', 'build-tooling'],
		url: 'https://parceljs.org/getting_started.html',
		date: 'Some time in the past'
	},
	{
		label: 'Lion - ING component library',
		tags: ['Component library', 'Custom elements', 'Front-end'],
		url: 'https://github.com/ing-bank/lion',
		date: 'Some time in the past'
	},
	{
		label: "Don't use number inputs in HTML",
		tags: ['Front-end', 'HTML', 'accessibility', 'input-element'],
		url: 'https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/',
		date: 'Some time in the past'
	},
	{
		label: 'What is a brand? - Matthew Ström',
		tags: ['Branding', 'Design'],
		url: 'https://matthewstrom.com/writing/what-is-a-brand/',
		date: 'Some time in the past'
	},
	{
		label: 'MonoLisa Dev font',
		tags: ['Coding', 'Design', 'Typography'],
		url: 'https://monolisa.dev/faq',
		date: 'Some time in the past'
	},
	{
		label: 'Lea Verou - blog',
		tags: ['Blog', 'Front-end', 'Keeping up to date'],
		url: 'http://lea.verou.me/',
		date: 'Some time in the past'
	},
	{
		label: 'Art direction on the web - Stephen Hay',
		tags: ['Art direction on the web', 'Design', 'Front-end'],
		url: 'https://alistapart.com/article/artdirweb/',
		date: 'Some time in the past'
	},
	{
		label: 'Jen Simmons - Labs',
		tags: ['Art direction on the web', 'Design', 'Front-end'],
		url: 'https://labs.jensimmons.com/',
		date: 'Some time in the past'
	},
	{
		label: 'Jen Simmons - Real art direction on the web',
		tags: ['Art direction on the web', 'Design', 'Front-end', 'Video'],
		url: 'https://vimeo.com/209812549',
		date: 'Some time in the past'
	},
	{
		label: 'Jen Simmons - Create a grid like Jan Tschichold',
		tags: ['Art direction on the web', 'CSS', 'Design', 'Front-end', 'Video'],
		url: 'https://www.youtube.com/watch?v=OxrsO4aIjyc',
		date: 'Some time in the past'
	},
	{
		label: 'Typography as Illustration - Andy Clarke',
		tags: ['Art direction on the web', 'Design', 'Front-end', 'Typography'],
		url: 'https://www.smashingmagazine.com/2020/04/inspired-design-decisions-herb-lubalin/',
		date: 'Some time in the past'
	},
	{
		label: 'List or no list',
		tags: ['Front-end', 'HTML', 'accessibility'],
		url: 'http://rikschennink.nl/thoughts/list-or-no-list-thats-the-question/',
		date: 'Some time in the past'
	},
	{
		label: 'CSS Grid - auto sizing columns',
		tags: ['CSS', 'CSS-Grid', 'Front-end'],
		url: 'https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/',
		date: 'Some time in the past'
	},
	{
		label: 'Personal website - Kristopher van Sant',
		tags: ['Art direction on the web', 'Design', 'Shapes'],
		url: 'http://www.kristophervansant.com/',
		date: 'Some time in the past'
	},
	{
		label: 'Shapes of text examples',
		tags: ['Art direction on the web', 'Design', 'Typography'],
		url: 'https://www.pinterest.co.uk/kisstafurr/shapes-of-text/',
		date: 'Some time in the past'
	},
	{
		label: 'typo/graphic posteres',
		tags: ['Art direction on the web', 'Typography'],
		url: 'https://www.typographicposters.com/posters?r=0&g=0&b=0',
		date: 'Some time in the past'
	},
	{
		label: 'Test for accessibility in Chrome Dev Tools',
		tags: ['DevTools', 'Testing', 'accessibility'],
		url: 'https://christianheilmann.com/2021/01/11/seven-ways-to-test-for-accessibility-of-your-web-site-with-browser-developer-tools/',
		date: 'Some time in the past'
	},
	{
		label: 'Why use (R)EM to set font-size',
		tags: ['CSS', 'Front-end', 'Typography'],
		url: 'https://joshcollinsworth.com/blog/never-use-px-for-font-size',
		date: 'Some time in the past'
	},
	{
		label: 'Draw on the web with Apple Pencil',
		tags: ['Apple Pencil'],
		url: 'https://excalidraw.com/',
		date: 'Some time in the past'
	},
	{
		label: 'Remove Background from Image – remove.bg',
		tags: ['Images', 'Png', 'Utils'],
		url: 'https://www.remove.bg/',
		date: 'Some time in the past'
	}
];

export default bookmarks;
