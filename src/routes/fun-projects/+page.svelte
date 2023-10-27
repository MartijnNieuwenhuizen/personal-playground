<script type="ts">
	import Block from '$lib/layout/block/index.svelte';
	import Row from '$lib/layout/row/index.svelte';
</script>

<section>
	<h1>Fun projects</h1>
	<Row size="small">
		<Block size="medium">
			<p>...</p>
		</Block>
	</Row>
</section>

<style>
	/* @TODO: Make the title as wide as the screen! */
	h1 {
		font-family: var(--sans-serif);
		font-size: var(--heading-1);
		line-height: 1.4;
		font-weight: var(--font-weight-normal);
		margin: 0;
		padding: 0;
	}
</style>
