<script>
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import FontAnimationBasedOnCursorPosition from '$lib/components/font-animation-based-on-cursor-position/index.svelte';
	import experiments from '../routes/experiments/experiments.js';
	import gists from '../routes/gists/gists.js';

	import PreviewForList from '$lib/components/PreviewForList/index.svelte';
	import HoverFadeList from '$lib/components/HoverFadeList/index.svelte';

	let latestExperiments = $derived(experiments.slice(0, 5));
	let latestGists = $derived(gists.slice(0, 3));
	const latestBlogPosts = [
		{
			url: '/blog/enforcing-a-consistent-css-property-order-with-stylelint',
			label: 'Enforcing a Consistent CSS Property Order with Stylelint',
			date: '24 Jan 2025'
		},
		{
			url: 'https://norday.tech/posts/2023/automatically-sort-import-statements-with-prettier/',
			label: 'Automatically sort import statements with Prettier',
			date: '31 Jul 2023'
		},
		{
			url: 'https://norday.tech/posts/2023/container-queries-make-the-most-important-lesson-i%27ve-ever-learned-a-reality/',
			label: "Container Queries make the most important lesson I've ever learned, a reality",
			date: '25 Apr 2023'
		}
	];
</script>

<article class="page">
	<Block>
		<Row size="small">
			<header class="home-header">
				<h1>
					<FontAnimationBasedOnCursorPosition>Hi!</FontAnimationBasedOnCursorPosition>
					<span>I'm Martijn Nieuwenhuizen</span>
				</h1>
				<p>
					Front-end developer at <a class="fresk" href="http://fresk.digital/">fresk.digital</a>.
				</p>
			</header>
		</Row>
	</Block>

	<Row size="medium" area="top">
		<section>
			<Block size="medium">
				<h2 class="list-title">Latest experiments</h2>

				<HoverFadeList>
					{#each latestExperiments as experiment}
						<li>
							<PreviewForList
								url={experiment.url}
								title={experiment.label}
								date={experiment.date}
							/>
						</li>
					{/each}
				</HoverFadeList>
			</Block>
		</section>
	</Row>

	<Row size="medium" area="top">
		<section>
			<Block size="medium">
				<h2 class="list-title">Latest blogs</h2>

				<HoverFadeList>
					{#each latestBlogPosts as post, index}
						<li>
							<PreviewForList
								type="list"
								noBottom={index === latestBlogPosts.length - 1}
								url={post.url}
								title={post.label}
								date={post.date}
							/>
						</li>
					{/each}
				</HoverFadeList>
			</Block>
		</section>
	</Row>

	<Row size="medium" area="top">
		<Row size="small" area="bottom">
			<section class="details-scroller">
				<h2 class="sr-only">More about me</h2>
				<div>
					<ul>
						<li>📍 Bergen NH</li>
						<li>👂🏻 Development lead</li>
						<li>🏃🏼 Runner</li>
						<li>🚴🏻‍♂️ Cyclist</li>
						<li>🧑🏼‍🌾 Gardener</li>
						<li>👨🏼‍💻 Front-end developer</li>
						<li>👨🏼‍🏫 Co-teacher</li>
						<li>👨🏼‍🍳 Used to be a chef</li>

						<!-- Just for the effect -->
						<li aria-hidden="true">📍 Bergen NH</li>
						<li aria-hidden="true">👂🏻 Development lead</li>
						<li aria-hidden="true">🏃🏼 Runner</li>
						<li aria-hidden="true">🚴🏻‍♂️ Cyclist</li>
						<li aria-hidden="true">🧑🏼‍🌾 Gardener</li>
						<li aria-hidden="true">👨🏼‍💻 Front-end developer</li>
						<li aria-hidden="true">👨🏼‍🏫 Co-teacher</li>
						<li aria-hidden="true">👨🏼‍🍳 Used to be a chef</li>

						<li aria-hidden="true">📍 Bergen NH</li>
						<li aria-hidden="true">👂🏻 Development lead</li>
						<li aria-hidden="true">🏃🏼 Runner</li>
						<li aria-hidden="true">🚴🏻‍♂️ Cyclist</li>
						<li aria-hidden="true">🧑🏼‍🌾 Gardener</li>
						<li aria-hidden="true">👨🏼‍💻 Front-end developer</li>
						<li aria-hidden="true">👨🏼‍🏫 Co-teacher</li>
						<li aria-hidden="true">👨🏼‍🍳 Used to be a chef</li>
					</ul>
				</div>
			</section>
		</Row>
	</Row>

	<Row area="top" size="small">
		<section>
			<Block size="medium">
				<h2 class="list-title">Latest gists</h2>

				<HoverFadeList>
					{#each latestGists as gist}
						<li>
							<PreviewForList type="clear" url={gist.url} title={gist.label} date={gist.date} />
						</li>
					{/each}
				</HoverFadeList>
			</Block>
		</section>
	</Row>

	<Block size="medium">
		<Row size="large">
			<section class="about-this-site">
				<h2>🚨 Good to know</h2>

				<p>
					<span>This site is <span>NOT</span> beautiful,</span>
					<span>This site is <span>NOT</span> good,</span>
					<span>This site does <span>NOT</span> reflect my day to day work,</span>
					<span>This site will <span>NOT</span> always work on any browser,</span>
					<span>But I <span>DID</span> try a lot of unnecessary, fun, dumb and cool stuff!</span>
				</p>
			</section>
		</Row>
	</Block>

	<!-- <section>
		<h2>Fun projects</h2>
		<ul>
			<li>
				<a href="https://www.narug.nl/">Narug.nl (joke for podcast De rode lantaarn)</a>
			</li>
			<li>
				<a href="#">Allotment planner (work in progress)</a>
			</li>
		</ul>
	</section> -->
	<!-- </Row>
	</Block> -->

	<!-- 
    A bit about me 

    - Name
    - Current employer
    - Current role
    - Other relevant skills/jobs

-->

	<!-- <section>
		<h2>Blogs I've written</h2>
		<p>Wrote for me and for GRRR</p>

		<ol>
			<li>
				<a href="https://grrr.tech/posts/2023/automatically-sort-import-statements-with-prettier/">
					Automatically sort import statements with Prettier (grrr.nl)
				</a>
			</li>
			<li>
				<a
					href="https://grrr.tech/posts/2023/container-queries-make-the-most-important-lesson-i%27ve-ever-learned-a-reality/"
				>
					Container Queries make the most important lesson I've ever learned, a reality (grrr.nl)
				</a>
			</li>
			<li>
				<a
					href="https://grrr.tech/posts/2023/using-the-nextjs-out-folder-in-netlify-causes-an-error-from-today-on/"
				>
					Using the Next.js out folder in Netlify causes an error from today on (grrr.nl)
				</a>
			</li>
			<li>
				<a href="https://grrr.tech/posts/2023/reduce-static-page-size-with-smart-next-components/">
					Reduce static page size with smart Next.js components (grrr.nl)
				</a>
			</li>
			<li>
				<a href="https://grrr.tech/posts/2022/why-use-refs-in-react/">
					Why use refs in React (grrr.nl)
				</a>
			</li>
			<li>
				<a href="https://grrr.tech/posts/2020/embedding-content-though-an-iframe/">
					Embedding content through an iframe (grrr.nl)
				</a>
			</li>
		</ol>
		External links and internal links
	</section>

	<section>
		<h2>Playground</h2>
		<ol>
			<li><a href="/playground/bauhaus">Bauhaus Logo with GRRR Grid</a></li>
			<li><a href="/playground/....">....</a></li>
		</ol>
	</section> -->
</article>

<style lang="scss">
	@import './style';
</style>
