<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Code from '$lib/components/Code/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';

	const title = 'Double drop shadow';
	const description = 'Add a description';
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<Row>
		<Block size="small">
			<h2>This is what I kinda want to build.</h2>
			<img src="/images/double-drop-shadow/example.jpeg" alt="A word with a double drop shadow" />
		</Block>
	</Row>

	<Row>
		<h3>Attempt 1: just a drop shadow</h3>
		<p>Conclusion: offset is too big.</p>
		<p class="charlie try-1">Charlie</p>
	</Row>

	<Row>
		<h3>Attempt 2: just a box shadow</h3>
		<p>Conclusion: works on the block element (afcourse). So no solution for this</p>
		<p class="charlie try-2">Charlie</p>
	</Row>

	<Row>
		<h3>Attempt 3: 1px offset for a lot of drop shadows</h3>
		<p>Conclusion: works oke'ish. But the smooth lines are still missing.</p>
		<p class="charlie try-3">Charlie</p>
	</Row>

	<Row>
		<h3>Attempt 4: Just use the blur</h3>
		<p>Conclusion: No way to stir the blur.</p>
		<p class="charlie try-4">Charlie</p>
	</Row>

	<Row>
		<h3>Attempt 5: even more pixels</h3>
		<p>
			Conclusion: This works. It fill like a hard job for the browser, but if you use it just
			sometimes, it should be fine!
		</p>
		<p class="charlie try-5">Charlie</p>
	</Row>

	<Row>
		<h3>Attempt 6: Add the shadow effect</h3>
		<p>This crashes the browser, so pro tip: don't use this!</p>

		<Code
			language="css"
			code={`.try-6 {
	color: white;
	filter: drop-shadow(1px 1px 0 var(--experiment-color))
		drop-shadow(1.5px 1.5px 0 var(--experiment-color))
		drop-shadow(2px 2px 0 var(--experiment-color))
		drop-shadow(2.5px 2.5px 0 var(--experiment-color))
		drop-shadow(3px 3px 0 var(--experiment-color))
		drop-shadow(3.5px 3.5px 0 var(--experiment-color))
		drop-shadow(4px 4px 0 var(--experiment-color))
		drop-shadow(4.5px 4.5px 0 var(--experiment-color))
		drop-shadow(5px 5px 0 var(--experiment-color)) 
		drop-shadow(-1px 1px 0 rgba(0, 0, 0, 0.2))
		drop-shadow(-1.5px 1.5px 0 rgba(0, 0, 0, 0.2)) 
		drop-shadow(-2px 2px 0 rgba(0, 0, 0, 0.2))
		drop-shadow(-2.5px 2.5px 0 rgba(0, 0, 0, 0.2)) 
		drop-shadow(-3px 3px 0 rgba(0, 0, 0, 0.2))
		drop-shadow(-3.5px 3.5px 0 rgba(0, 0, 0, 0.2)) 
		drop-shadow(-4px 4px 0 rgba(0, 0, 0, 0.2))
		drop-shadow(-4.5px 4.5px 0 rgba(0, 0, 0, 0.2)) 
		drop-shadow(-6px 6px 0 rgba(0, 0, 0, 0.2))
		drop-shadow(-6.5px 6.5px 0 rgba(0, 0, 0, 0.2)) 
		drop-shadow(-7px 7px 0 rgba(0, 0, 0, 0.2))
		drop-shadow(-7.5px 7.5px 0 rgba(0, 0, 0, 0.2)) 
		drop-shadow(-8px 8px 0 rgba(0, 0, 0, 0.2));

	-webkit-text-stroke: 0.05rem var(--experiment-color);
}
`}
		></Code>

		<p class="charlie try-6">Charlie</p>
	</Row>
</ExperimentItem>

<style lang="scss">
	.charlie {
		--experiment-color: #f75b43;
		font-family: sans-serif;
		font-size: 20vw;
		text-align: center;
	}
	.try-1 {
		color: white;
		filter: drop-shadow(0.5rem 0.5rem 0 var(--experiment-color));
		-webkit-text-stroke: 0.05rem var(--experiment-color);
	}
	.try-2 {
		color: white;
		box-shadow: 0.5rem 0.5rem 0 var(--experiment-color);
		-webkit-text-stroke: 0.05rem var(--experiment-color);
	}
	.try-3 {
		color: white;
		filter: drop-shadow(1px 1px 0 var(--experiment-color))
			drop-shadow(2px 2px 0 var(--experiment-color)) drop-shadow(3px 3px 0 var(--experiment-color))
			drop-shadow(4px 4px 0 var(--experiment-color)) drop-shadow(5px 5px 0 var(--experiment-color));
		-webkit-text-stroke: 0.05rem var(--experiment-color);
	}
	.try-4 {
		color: white;
		filter: drop-shadow(1px 1px 0.5rem var(--experiment-color));
		-webkit-text-stroke: 0.05rem var(--experiment-color);
	}
	.try-5 {
		color: white;
		filter: drop-shadow(1px 1px 0 var(--experiment-color))
			drop-shadow(1.5px 1.5px 0 var(--experiment-color))
			drop-shadow(2px 2px 0 var(--experiment-color))
			drop-shadow(2.5px 2.5px 0 var(--experiment-color))
			drop-shadow(3px 3px 0 var(--experiment-color))
			drop-shadow(3.5px 3.5px 0 var(--experiment-color))
			drop-shadow(4px 4px 0 var(--experiment-color))
			drop-shadow(4.5px 4.5px 0 var(--experiment-color))
			drop-shadow(5px 5px 0 var(--experiment-color));
		-webkit-text-stroke: 0.05rem var(--experiment-color);
	}
</style>
