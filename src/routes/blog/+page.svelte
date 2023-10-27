<script type="ts">
	import type { PageData } from './$types';

	import Block from '$lib/layout/block/index.svelte';
	import Row from '$lib/layout/row/index.svelte';
	import Constrain from '$lib/layout/constrain/index.svelte';

	export let data: PageData;

	const posts = data.links;
</script>

<section>
	<h1>Blog</h1>
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
	h1 {
		font-family: var(--sans-serif);
		font-size: var(--heading-1);
		line-height: 1.4;
		font-weight: var(--font-weight-normal);
		margin: 0;
		padding: 0;
	}

	a span {
		display: inline-block;
		transform: rotate(90deg);
	}
</style>
