<script>
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import PreviewForList from '$lib/components/PreviewForList/index.svelte';
	import HoverFadeList from '$lib/components/HoverFadeList/index.svelte';
</script>

<section>
	<div class="container">
		<h1>Fun projects</h1>
	</div>

	<Row size="small">
		<Block size="medium">
			<HoverFadeList type="ol">
				<li>
					<PreviewForList
						url={'https://www.narug.nl/'}
						title={'Hoeveel dagen na rug (narug.nu)'}
						date={'2022-2023'}
					/>
				</li>

				<li>
					<PreviewForList
						url={'https://chromewebstore.google.com/detail/duplicate-content/lelfnogjdcdgannnoddmgepkajiebpdg?pli=1'}
						title={'Duplicate Content (Chrome extension)'}
						date={'2017-2018'}
					/>
				</li>
				<!-- <li>
					<PreviewForList
						url={''}
						title={'Nice job for 2024 to add a view items here!'}
						date={'2024'}
					/>
				</li> -->
			</HoverFadeList>
			<h2>Nice job for 2024 to add a few items here!</h2>
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
		font-size: 21.38700000000006vw;
		font-size: 21.38700000000006cqw;
		line-height: 1.2;
		white-space: nowrap;
	}
</style>
