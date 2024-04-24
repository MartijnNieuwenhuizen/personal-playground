<script>
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
</script>

<article class="page">
	<Block>
		<Row size="small">
			<header class="home-header">
				<h1>
					<span>Hi!</span>
					<span>I'm Martijn Nieuwenhuizen</span>
				</h1>
				<p>Front-end developer at <a href="http://fresk.digital/">Fresk.Digital</a>.</p>
				<!-- <p>Front-end developer @ <a href="https://grrr.nl/">GRRR</a>.</p> -->
				<!-- <p>Current blogposts are written for GRRR and use this as my personal playground.</p> -->
			</header>
		</Row>
	</Block>

	<Block size="medium">
		<Row size="small">
			<section class="about-this-site">
				<!-- <h2>⚠️ Good to know</h2> -->
				<h2>🚨 Good to know</h2>

				<p>
					<span>This site is <span>NOT</span> beautiful,</span>
					<span>This site is <span>NOT</span> good,</span>
					<span>This site does <span>NOT</span> reflect my day to day work,</span>
					<span>This site will <span>NOT</span> always work on any browser,</span>
					<!-- <span>This site will <span>NOT</span> be up-to-date,</span> -->
					<span>But I <span>DID</span> try a lot of unnecessary, fun, dumb and cool stuff!</span>
				</p>
			</section>
		</Row>
	</Block>

	<!-- <Block>
		<Row size="small"> -->
	<section class="details-scroller">
		<h2 class="sr-only">More about me</h2>
		<div>
			<ul>
				<li>📍 Bergen NH</li>
				<li>🏃🏼 Runner</li>
				<li>🚴🏻‍♂️ Cyclist</li>
				<li>🧑🏼‍🌾 Gardener</li>
				<li>👨🏼‍💻 Front-end developer</li>
				<li>👨🏼‍🏫 Co-teacher</li>
				<li>👨🏼‍🍳 Used to be a chef</li>

				<!-- Just for the effect -->
				<li aria-hidden="true">📍 Bergen NH</li>
				<li aria-hidden="true">🏃🏼 Runner</li>
				<li aria-hidden="true">🚴🏻‍♂️ Cyclist</li>
				<li aria-hidden="true">🧑🏼‍🌾 Gardener</li>
				<li aria-hidden="true">👨🏼‍💻 Front-end developer</li>
				<li aria-hidden="true">👨🏼‍🏫 Co-teacher</li>
				<li aria-hidden="true">👨🏼‍🍳 Used to be a chef</li>

				<li aria-hidden="true">📍 Bergen NH</li>
				<li aria-hidden="true">🏃🏼 Runner</li>
				<li aria-hidden="true">🚴🏻‍♂️ Cyclist</li>
				<li aria-hidden="true">🧑🏼‍🌾 Gardener</li>
				<li aria-hidden="true">👨🏼‍💻 Front-end developer</li>
				<li aria-hidden="true">👨🏼‍🏫 Co-teacher</li>
				<li aria-hidden="true">👨🏼‍🍳 Used to be a chef</li>
			</ul>
		</div>
	</section>

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
	@import './style.scss';
</style>
