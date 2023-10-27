<script type="ts">
	import type { PageData } from './$types';

	import Block from '$lib/layout/block/index.svelte';
	import Row from '$lib/layout/row/index.svelte';
	import Constrain from '$lib/layout/constrain/index.svelte';

	export let data: PageData;

	const posts = data.links;
</script>

<section>
	<div class="container">
		<h1>Blog</h1>
	</div>

	<Row size="small">
		<Block size="medium">
			<p>
				Most of my recent posts are written on the <a
					href="https://grrr.tech/authors/martijn-nieuwenhuizen/">GRRR tech blog</a
				>.
			</p>

			<ol>
				{#each posts as post}
					<li>
						<a href={post.url}>
							{post.date} - {post.label}
							{#if post.external}
								<span>↖︎</span>
							{/if}
						</a>
					</li>
				{/each}
			</ol>
		</Block>
	</Row>
</section>

<style>
	.container {
		overflow: hidden;
		max-width: 100vw;
	}
	h1 {
		line-height: 1.2;
		margin: 0;
		padding: 0;
		text-align: center;

		font-family: var(--serif);
		font-size: 61.18599999999993vw;
		/* Pull title up based on the vw, because the font-size is based on the vw. */
		margin-top: -10vw;

		/* font-family: var(--sans-serif);
		font-weight: var(--font-weight-normal);
		font-size: 49.816999999999986vw;
		transform: scale(1.1) translateX(-2%); */
	}

	a span {
		display: inline-block;
		transform: rotate(90deg);
	}
</style>
