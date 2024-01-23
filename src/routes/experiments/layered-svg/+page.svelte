<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';

	const title = 'Layered svg';
	const description = `I want to separate the layers of an SVG and show them on top of each other.`;
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<Row area="bottom">
		<Block size="medium">
			<h2>Layered divs</h2>
			<p>Let's start with 3 colored div's to create the CSS that's needed to show these layers.</p>

			<div class="version-1">
				<div class="version-1__item" />
				<div class="version-1__item" />
				<div class="version-1__item" />
			</div>
		</Block>
	</Row>
</ExperimentItem>

<style lang="scss">
	.version-1 {
		// --skew: skew(-35deg, -15deg);
		--skew: skew(-40deg, -10deg);
		--offset: min(5rem, 10vw);
		--size: min(20rem, 30cqw);

		display: grid;
		grid-template-rows: var(--size);
		grid-template-columns: var(--size);
		padding: calc(var(--offset) * 2);

		// Ensure we can use container sizes.
		container-type: inline-size;
	}
	.version-1__item {
		// Ensure they are all on the same position.
		grid-column: 1;
		grid-row: 1;
	}
	.version-1__item:nth-of-type(1) {
		background-color: goldenrod;
		transform: var(--skew) translate(var(--offset), var(--offset));
	}
	.version-1__item:nth-of-type(2) {
		background-color: lime;
		transform: var(--skew) translate(0rem, 0rem);
	}
	.version-1__item:nth-of-type(3) {
		background-color: blueviolet;
		transform: var(--skew) translate(calc(var(--offset) * -1), calc(var(--offset) * -1));
	}
</style>
