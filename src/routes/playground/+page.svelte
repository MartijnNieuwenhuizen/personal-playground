<script type="ts">
	import Block from '$lib/layout/block/index.svelte';
	import Row from '$lib/layout/row/index.svelte';
	import Constrain from '$lib/layout/constrain/index.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	console.log('data: ', data);
</script>

<Block size="medium">
	<Row size="medium">
		<Constrain size="small">
			<section>
				<h2>Playground</h2>
				<p>
					Throughout the day/week, you will need to try a lot of things. And it's important to get
					feedback as soon as possible in your workflow. This is what I use this playground for:
					Isolated tests, ideas. Some will be nice to look at, some will be boring.
				</p>

				<ul>
					{#each data.links as link}
						<!-- content here -->
						<li><a href={`/playground/${link}`}>{link}</a></li>
					{/each}
				</ul>
				<section />
			</section></Constrain
		>
	</Row>
</Block>

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
