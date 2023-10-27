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
		font-family: var(--sans-serif);
		font-size: 18.16800000000002vw;
		line-height: 1.2;
		font-weight: var(--font-weight-normal);
		margin: 0;
		padding: 0;

		text-align: center;
		transform: scale(1.05) translateX(-0.25%);
	}
</style>
