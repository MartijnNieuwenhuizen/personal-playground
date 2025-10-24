<script>
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import PreviewForList from '$lib/components/PreviewForList/index.svelte';
	import HoverFadeList from '$lib/components/HoverFadeList/index.svelte';

	let { data } = $props();
	const gists = data.gists;
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
						<PreviewForList
							url={`/gists/${gist.url}`}
							title={gist.title}
							type="clear"
							date={gist.humanDate}
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
		margin: 0;
		padding: 0;
		font-family: var(--serif);
		font-size: 55.63599999999994vw;
		font-size: 55.63599999999994cqw;
		line-height: 0.8;
		white-space: nowrap;
	}
</style>
