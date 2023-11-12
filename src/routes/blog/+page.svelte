<script>
	import Block from '$lib/layout/Block/index.svelte';
	import Row from '$lib/layout/Row/index.svelte';
	import PreviewForList from '$lib/components/PreviewForList/index.svelte';
	import HoverFadeList from '$lib/components/HoverFadeList/index.svelte';

	export let data;

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

			<HoverFadeList type="ol">
				{#each posts as post}
					<li>
						<PreviewForList
							url={post.url}
							title={post.label}
							date={post.date}
							isExternal={post.external}
						/>
					</li>
				{/each}
			</HoverFadeList>
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
</style>
