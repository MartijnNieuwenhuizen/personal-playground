<script>
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import PreviewForList from '$lib/components/PreviewForList/index.svelte';
	import HoverFadeList from '$lib/components/HoverFadeList/index.svelte';
	import gists from './gists.js';
</script>

<section>
	<div class="container">
		<h1>Gists</h1>
	</div>

	<Row size="small">
		<Block size="medium">
			<HoverFadeList>
				{#each gists as gist}
					<li>
						<PreviewForList url={gist.url} title={gist.label} type="clear" date={gist.date} />
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
		line-height: 0.8;
		margin: 0;
		padding: 0;

		font-size: 55.63599999999994vw;
		font-family: var(--serif);
		white-space: nowrap;
	}
</style>
