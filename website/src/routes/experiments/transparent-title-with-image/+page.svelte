<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';

	const title = 'Transparent title with image';
	const description = 'Add a description';
</script>

<ExperimentItem {title} {description} showPageEffect={false}>
	<Row>
		<Block size="small">
			<h2>The inspiration</h2>
			<img src="/images/transparent-title-with-image/inspiration.jpg" alt="" />
		</Block>
	</Row>

	<Row>
		<Block size="small">
			<h2>The implementation - Part 1</h2>
			<h3>Title with a background image</h3>
		</Block>

		<h3 class="transparent-title">Yellow</h3>
	</Row>

	<Row>
		<Block size="small">
			<h2>The implementation - Part 2</h2>
			<h3>
				Title with a background image combined with the image (but ignoring the positioning of the
				image)
			</h3>
		</Block>

		<div>
			<header>
				<h3 class="transparent-title">Yellow</h3>
			</header>
			<img
				class="background-image"
				src="/images/transparent-title-with-image/background.jpeg"
				alt=""
			/>
		</div>
	</Row>

	<Row>
		<Block size="small">
			<h2>The implementation - Part 3</h2>
			<h3>Positioning the background image to match the real image</h3>
		</Block>

		<div>
			<header>
				<h3 class="transparent-title transparent-title-with-proper-alignment">Yellow</h3>
			</header>
			<img
				class="background-image"
				src="/images/transparent-title-with-image/background.jpeg"
				alt=""
			/>
		</div>
	</Row>
</ExperimentItem>

<style lang="scss">
	img {
		width: 100%;
	}
	div {
		overflow: hidden;
		container-type: inline-size;

		display: grid;
		grid-template-rows: 1fr auto 4fr;
	}
	.transparent-title {
		margin: 0;
		padding: 0;
		font-family: var(--sans-serif);
		line-height: 1;
		font-size: 33.24099999999995cqw;

		background-image: url('/images/transparent-title-with-image/background.jpeg');
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
	}

	.transparent-title-with-proper-alignment {
		background-position: 0% 30.6%;
		background-repeat: no-repeat;
		background-size: cover;
	}

	header {
		font-size: 33.24099999999995cqw;
		z-index: 1;
		position: relative;
		grid-column: 1;
		grid-row: 3;
		box-shadow:
			0rem -20rem 0 0 var(--expressive-color),
			0rem 1.45ch 0 0 var(--expressive-color) inset;
	}
	.background-image {
		grid-column: 1;
		grid-row: 1 / span 3;

		width: 100%;
		height: 100%;
	}
</style>
