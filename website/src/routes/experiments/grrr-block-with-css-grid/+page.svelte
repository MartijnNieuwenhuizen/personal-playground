<!-- 
	@TODO: Add data here like the GRRR blog with the date etc. 
	Autofill this date when the file is generated :) with the generator script.
-->
<script>
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	let title = 'GRRR Block mixin with CSS Grid';
	let description = `<p>At GRRR we have a block mixin that ensures an element has a <code>max-width</code> and will always be in the center of the screen. Sometimes, you want something to grow on the "overflow" on the left and right size of the container. So if the page is 1200px and the container is max 600px wide, one element is 600px wide and the other is 300px wide. See image.</p>`;
</script>

<ExperimentItem {title} {description}>
	<Block>
		<h2>With the GRRR container (no overflow)</h2>
	</Block>
	<div class="grrr-container">
		<div>
			<h3>Hello</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur voluptatibus explicabo
				eligendi iusto esse! Eius fuga iste, ratione molestiae quae cupiditate cumque vero repellat
				ad! Ipsa hic perspiciatis accusamus modi?
			</p>
		</div>

		<div class="overflowing-content"></div>
	</div>

	<Block>
		<h2>With CSS-grid (with overflow)</h2>
	</Block>
	<Row>
		<div class="css-grid-container">
			<div>
				<h3>Hello</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur voluptatibus
					explicabo eligendi iusto esse! Eius fuga iste, ratione molestiae quae cupiditate cumque
					vero repellat ad! Ipsa hic perspiciatis accusamus modi?
				</p>
			</div>

			<div class="overflowing-content"></div>
		</div>
	</Row>

	<Row>
		<div class="css-grid-container-one-column">
			<div>some label</div>
			<div>
				<h3>Hello</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur voluptatibus
					explicabo eligendi iusto esse! Eius fuga iste, ratione molestiae quae cupiditate cumque
					vero repellat ad! Ipsa hic perspiciatis accusamus modi?
				</p>
			</div>
		</div>
	</Row>
</ExperimentItem>

<style lang="scss">
	.overflowing-content {
		background-color: var(--primary-color);
	}

	/**
	 * GRRR Container solution
	 */
	.grrr-container {
		--padding: 2rem;
		max-width: calc(60rem + (var(--padding) * 2));
		margin: 0 auto;
		padding: 0 var(--padding);

		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	/**
	 * CSS-grid Container solution
	 */
	.css-grid-container {
		--padding: 2rem;
		--gap: 1rem;
		display: grid;

		grid-template-columns:
			var(--padding) auto 1fr var(--gap)
			auto 1fr var(--padding);
		grid-template-areas: '. . content-left  . content-right content-right content-right';

		// The moment that the container reaches it's max-width.
		@media screen and (min-width: 1024px) {
			grid-template-columns:
				var(--padding) 1fr 30rem var(--gap)
				30rem 1fr var(--padding);
		}
	}
	.css-grid-container > div:first-of-type {
		grid-area: content-left;
	}
	.css-grid-container > div:last-of-type {
		grid-area: content-right;
	}

	/**
	 * CSS-grid Container solution
	 */
	.css-grid-container-one-column {
		--padding: 2rem;
		--gap: 1rem;
		padding: 0 var(--padding);

		display: grid;
		gap: 1rem;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto auto;
		grid-template-areas:
			'. label .'
			'. content .';

		@media screen and (min-width: 1270px) {
			grid-template-areas: 'label content .';
			grid-template-columns: 1fr 60rem 1fr;
		}
	}
	.css-grid-container-one-column > div:first-of-type {
		grid-area: label;
	}
	.css-grid-container-one-column > div:last-of-type {
		grid-area: content;
		max-width: 40rem;
	}
</style>
