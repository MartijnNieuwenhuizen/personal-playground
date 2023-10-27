<script type="ts">
	import type { PageData } from './$types';

	import Block from '$lib/layout/block/index.svelte';
	import Row from '$lib/layout/row/index.svelte';
	import Constrain from '$lib/layout/constrain/index.svelte';

	export let data: PageData;
</script>

<section>
	<div class="container">
		<h1>Playground</h1>
	</div>

	<Block size="medium">
		<Row size="medium">
			<Constrain size="small">
				<p>
					Throughout the day/week, you will need to try a lot of things. And it's important to get
					feedback as soon as possible in your workflow. This is what I use this playground for:
					Isolated tests, ideas. Some will be nice to look at, some will be boring.
				</p>

				<ul>
					{#each data.links as link}
						<!-- content here -->
						<li><a href={link.url}>{link.date} - {link.label}</a></li>
					{/each}
				</ul>
			</Constrain>
		</Row>
	</Block>
</section>

<!-- <Page>
	<Block size="medium">
		<h1>This is the playground</h1>
		<p>
			This is the location where I try some things out, play with some tech or make demo's for
			others.
		</p>
	</Block>

	<Block size="tiny">
		<p>
			Here is the content inside of the block from the template. There are multiple sizes within
			this page as a demo of this component implementation.
		</p>
	</Block>
	<Block size="small">
		<p>
			Here is the content inside of the block from the template. There are multiple sizes within
			this page as a demo of this component implementation.
		</p>
	</Block>
	<Block size="small-medium">
		<p>
			Here is the content inside of the block from the template. There are multiple sizes within
			this page as a demo of this component implementation.
		</p>
	</Block>
	<Block size="medium">
		<p>
			Here is the content inside of the block from the template. There are multiple sizes within
			this page as a demo of this component implementation.
		</p>
	</Block>
	<Block size="large">
		<p>
			Here is the content inside of the block from the template. There are multiple sizes within
			this page as a demo of this component implementation.
		</p>
	</Block>
	<Block size="full">
		<p>
			Here is the content inside of the block from the template. There are multiple sizes within
			this page as a demo of this component implementation.
		</p>
	</Block>
</Page> -->
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
		font-size: 22.472000000000055vw;

		/* font-family: var(--sans-serif);
		font-size: 19.480000000000018vw;
		font-weight: var(--font-weight-normal);
		transform: scale(1.065) translateX(-0.25%); */
	}
</style>
