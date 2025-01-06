<script>
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import PreviewForList from '$lib/components/PreviewForList/index.svelte';
	import HoverFadeList from '$lib/components/HoverFadeList/index.svelte';

	const pages = [
		{
			url: '/gists/svelte-global-selector',
			label: 'Svelte global selector',
			date: '06-01-2025',
			tags: ['css']
		}
	];
</script>

<section>
	<div class="container">
		<h1>Gists</h1>
	</div>

	<Row size="small">
		<Block size="medium">
			<HoverFadeList>
				{#each pages as link}
					<li>
						<PreviewForList url={link.url} title={link.label} date={link.date} />
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

		font-size: 55.63599999999994vw;
		font-family: var(--serif);
		white-space: nowrap;
	}
</style>
