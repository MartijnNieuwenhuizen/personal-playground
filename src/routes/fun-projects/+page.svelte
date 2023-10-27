<script type="ts">
	import Block from '$lib/layout/block/index.svelte';
	import Row from '$lib/layout/row/index.svelte';
</script>

<section>
	<div class="container">
		<h1>Fun projects</h1>
	</div>

	<Row size="small">
		<Block size="medium">
			<p>...</p>
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
