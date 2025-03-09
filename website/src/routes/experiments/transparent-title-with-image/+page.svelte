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
		display: grid;
		grid-template-rows: 1fr auto 4fr;
		container-type: inline-size;
	}

	.transparent-title {
		margin: 0;
		padding: 0;
		background-image: url('/images/transparent-title-with-image/background.jpeg');
		background-clip: text;
		font-family: var(--sans-serif);
		font-size: 33.24099999999995cqw;
		line-height: 1;
		-webkit-text-fill-color: transparent;
	}

	.transparent-title-with-proper-alignment {
		background-position: 0% 30.6%;
		background-size: cover;
		background-repeat: no-repeat;
	}

	header {
		z-index: 1;
		position: relative;
		grid-row: 3;
		grid-column: 1;
		font-size: 33.24099999999995cqw;
		box-shadow:
			0 -30rem 0 0 var(--expressive-color),
			0 1.45ch 0 0 var(--expressive-color) inset;
	}

	.background-image {
		grid-row: 1 / span 3;
		grid-column: 1;
		width: 100%;
		height: 100%;
	}
</style>
