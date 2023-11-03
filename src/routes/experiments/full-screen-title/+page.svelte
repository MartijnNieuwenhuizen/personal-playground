<script type="ts">
	import Row from '$lib/layout/row/index.svelte';
	import Block from '$lib/layout/block/index.svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	let title = 'Make a full screen title';
	let description = `
<ul>
    <li>It should be responsive</li>
    <li>Should work without transforming the title into an SVG or something like that</li>
    <li>It's oke if each font needs a different "preset"</li>
</ul>
<h2>Challenges</h2>
<ul>
    <li>Each letter has a different width</li>
    <li>Each font is different</li>
</ul>
`;
</script>

<ExperimentItem {title} {description}>
	<Row>
		<Block>
			<h2>You can find the attempts below</h2>
			<p>
				But this didn't work nice, so I made a tool for this to calculate the right value for each
				title/font pairing. You can find it here: <a href="/experiments/calculate-full-screen-title"
					>Calculate full screen title</a
				>
			</p>
		</Block>
	</Row>

	<Row>
		<Block>
			<p>
				Because the <code>ch</code> value works based on the specific letter <strong>0</strong>,
				let's start with a title with only that "letter" (30 times).
				<br />
				<quote>ch - The advance measure (width) of the glyph "0" of the element's font. (MDN)</quote
				>
				<br />
				<code>font-size: calc((100vw / 30) * 1ch)</code>
			</p>
		</Block>

		<h2 class="attempt-1">000000000000000000000000000000</h2>
		<h2 class="attempt-1">This is a title with 30 charss</h2>
	</Row>

	<Row>
		<Block>
			<p>Let's ditch the use vw.</p>
		</Block>

		<h2 class="attempt-2">00000000000000000000000000000000000000000000000000</h2>
		<h2 class="attempt-2">This s a title with 50 characters including spaces</h2>
	</Row>

	<Row>
		<Block>
			<p>Let's hand-pick a vw value for each title.</p>
			<p>This works for a developer, but not really for a CMS.</p>
		</Block>

		<h2 class="attempt-3">This s a title with 50 characters including spaces</h2>
	</Row>

	<Row>
		<Block>
			<p>Let's do the same, but with ch and based on the amount of letters.</p>
			<p>This doesn't work. Let's make a tool for this!</p>
		</Block>

		<h2 class="attempt-4">
			0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
		</h2>
	</Row>
</ExperimentItem>

<style>
	.attempt-1 {
		font-size: calc((100vw / 30) * 1ch);
	}
	.attempt-2 {
		font-size: 4vw;
	}
	.attempt-3 {
		font-size: 5.64vw;
		text-align: center;
	}

	.attempt-4 {
		--amount-of-letters: 50;

		font-size: 2.04vw;
		text-align: center;
	}
</style>
