<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Code from '$lib/components/Code/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';

	const title = 'Double drop shadow';
	const description = '';
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<Row>
		<Block size="small">
			<h2>This is what I kinda want to build.</h2>
			<img src="/images/double-drop-shadow/example.jpeg" alt="A word with a double drop shadow" />
			<p><a href="#final">Directly go to the result</a></p>
		</Block>
	</Row>

	<Row>
		<Block size="small-medium">
			<h3>Attempt 1: just a drop shadow</h3>
			<p>Conclusion: offset is too big.</p>
		</Block>
		<p class="charlie try-1">Charlie</p>
	</Row>

	<Row>
		<Block size="small-medium">
			<h3>Attempt 2: just a box shadow</h3>
			<p>Conclusion: works on the block element (afcourse). So no solution for this</p>
		</Block>
		<p class="charlie try-2">Charlie</p>
	</Row>

	<Row>
		<Block size="small-medium">
			<h3>Attempt 3: 1px offset for a lot of drop shadows</h3>
			<p>Conclusion: works oke'ish. But the smooth lines are still missing.</p>
		</Block>
		<p class="charlie try-3">Charlie</p>
	</Row>

	<Row>
		<Block size="small-medium">
			<h3>Attempt 4: Just use the blur</h3>
			<p>Conclusion: No way to stir the blur.</p>
		</Block>
		<p class="charlie try-4">Charlie</p>
	</Row>

	<Row>
		<Block size="small-medium">
			<h3>Attempt 5: even more pixels</h3>
			<p>
				Conclusion: This works. It fill like a hard job for the browser, but if you use it just
				sometimes, it should be fine!
			</p>
		</Block>
		<p class="charlie try-5">Charlie</p>
	</Row>

	<Row>
		<Block size="small-medium">
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
		</Block>

		<p class="charlie try-6">Charlie</p>
	</Row>

	<Row>
		<Block size="small-medium">
			<h3>Attempt 7: Less shadow</h3>
			<p>Still chashes the browser</p>
		</Block>
		<!-- <p class="charlie try-7">Charlie</p> -->
	</Row>

	<Row>
		<Block size="small-medium">
			<h3>
				Attempt 8: Add another word (with :before) on the same location and apply styles there
			</h3>
			<p>Nope: this turns into something really ugly!</p>
		</Block>
		<p class="charlie try-8">Charlie</p>
	</Row>

	<Row>
		<Block size="small-medium">
			<h3 id="final">
				Attempt 9: Add another word (in the HTML) on the same location and apply styles there
			</h3>
			<p>
				The best it can get! You need to put the word with the shadow as initial element in the
				HTML, otherwise the drop-shadow won't work well.
			</p>
		</Block>
		<div class="try-9-container">
			<p class="charlie try-9-a">Charlie</p>
			<p class="charlie try-9-b">Charlie</p>
		</div>
	</Row>
</ExperimentItem>

<style lang="scss">
	h3 {
		@include heading-3;

		max-width: 25ch;
		margin: 0 0 gap(4);
	}

	p:not(.charlie) {
		max-width: 60ch;
	}

	@font-face {
		font-family: 'Roboto flex' sans-serif;
		src: url('/fonts/Roboto Flex Font.ttf') format('truetype');
		font-weight: 100 900;
		font-style: normal;
		font-variation-settings:
			'YTLC' 416 570,
			'YTUC' 528 760,
			'YOPQ' 25 135;
	}

	.charlie {
		--experiment-color: #f75b43;

		margin: 0;
		font-family: sans-serif;
		font-family: 'Roboto flex', sans-serif;
		font-size: 16vw;
		letter-spacing: 1vw;
		text-align: center;
		text-transform: uppercase;
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

	.try-8 {
		position: relative;
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

	.try-8::before {
		content: 'Charlie';
		z-index: -1;
		position: absolute;
		top: 0;
		left: 50%;
		color: white;
		filter: drop-shadow(-1px 1px 0 rgb(0 0 0 / 20%)) drop-shadow(-1.5px 1.5px 0 rgb(0 0 0 / 20%))
			drop-shadow(-2px 2px 0 rgb(0 0 0 / 20%)) drop-shadow(-2.5px 2.5px 0 rgb(0 0 0 / 20%))
			drop-shadow(-3px 3px 0 rgb(0 0 0 / 20%)) drop-shadow(-3.5px 3.5px 0 rgb(0 0 0 / 20%))
			drop-shadow(-4px 4px 0 rgb(0 0 0 / 20%)) drop-shadow(-4.5px 4.5px 0 rgb(0 0 0 / 20%))
			drop-shadow(-5px 5px 0 rgb(0 0 0 / 20%));
		transform: translateX(-50%);
	}

	.try-9-container {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: auto 1fr auto;
		background-color: #c5dad9;
	}

	.try-9-a {
		grid-row: 1;
		grid-column: 2;
		filter: drop-shadow(-0.025rem 0.1rem 0 #90b3ad) drop-shadow(-0.05rem 0.2rem 0 #90b3ad)
			drop-shadow(-0.075rem 0.3rem 0 #90b3ad) drop-shadow(-0.1rem 0.4rem 0 #90b3ad)
			drop-shadow(-0.125rem 0.5rem 0 #90b3ad) drop-shadow(-0.15rem 0.6rem 0 #90b3ad)
			drop-shadow(-0.175rem 0.7rem 0 #90b3ad);
	}

	.try-9-b {
		grid-row: 1;
		grid-column: 2;
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
