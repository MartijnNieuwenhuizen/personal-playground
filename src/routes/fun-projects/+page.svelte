<script>
	import Block from '$lib/layout/Block/index.svelte';
	import Row from '$lib/layout/Row/index.svelte';
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
				<!-- <li>
					<PreviewForList
						url={''}
						title={'Nice job for 2024 to add a view items here!'}
						date={'2024'}
					/>
				</li> -->
			</HoverFadeList>
			<h2>Nice job for 2024 to add a view items here!</h2>
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
		/* text-align: center; */

		font-size: 21.38700000000006vw;
		font-family: var(--serif);
		white-space: nowrap;

		/* font-size: 18.16800000000002vw;
		font-weight: var(--font-weight-normal);
		font-family: var(--sans-serif);
		transform: scale(1.05) translateX(-0.25%); */
	}
</style>
