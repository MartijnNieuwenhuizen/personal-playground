<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';

	const title = 'Prevent collapse with container-type';
	const description =
		'<code>container-type: size</code> will collapse the children of the container. This is by design to prevent an infinite loop inside query-container. But sometimes not what you want. How can we prevent this?';

	const text = `	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
</script>

<ExperimentItem {title} {description} showPageEffect={false}>
	<Row>
		<Block>
			<h2>This is without <code>container-type: size;</code></h2>
		</Block>
		<div class="container">
			<div class="container-item">
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
			<div class="container-item">
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
			<div class="container-item">
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
			<div class="container-item">
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
			<div class="container-item">
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
			<div class="container-item">
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
		</div>
	</Row>

	<Row>
		<Block>
			<h2>This is with <code>container-type: size;</code></h2>
		</Block>
		<div class="container container--with-type">
			<div class="container-item">
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
			<div class="container-item">
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
			<div class="container-item">
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
			<div class="container-item">
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
			<div class="container-item">
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
			<div class="container-item">
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
		</div>
	</Row>

	<Row>
		<Block>
			<h2>This is with <code>container-type: size;</code> and the fix</h2>
			<p>
				By adding <code>container-type: size;</code>, the container cannot size itself based on the
				size of it's children. So, you need to set a fixed size. This can be done with
			</p>
			<ul>
				<li>CSS Grid - (<code>grid-template-columns: repeat(5, 40rem);</code>)</li>
				<li>Width/height - (<code>width: 40rem;</code>)</li>
				<li>Aspect-ratio - (<code>aspect-ratio: 1 / 4;</code>)</li>
			</ul>
			<p>
				<a
					href="https://stackoverflow.com/questions/73975889/container-query-collapses-width-of-element/73980194#73980194"
					>This comment</a
				> explains it very well.
			</p>
		</Block>
		<div class="container container--with-type container--with-fix">
			<!-- Set CSS variable inline -->
			<div class="container-item" style={'--column-count: 5;'}>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
			<div class="container-item" style={'--column-count: 5;'}>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
			<div class="container-item" style={'--column-count: 5;'}>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
			<div class="container-item" style={'--column-count: 5;'}>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
			<div class="container-item" style={'--column-count: 5;'}>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
			<div class="container-item" style={'--column-count: 5;'}>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
				<p>{text}</p>
			</div>
		</div>
	</Row>
</ExperimentItem>

<style lang="scss">
	.container {
		overflow-x: auto;
		display: flex;
		max-width: 100vw;
	}

	.container-item {
		display: grid;
		flex-shrink: 0;
		grid-auto-flow: column;
		gap: 4rem;
		min-height: 60vh;
		padding: 5rem;
	}

	.container-item p {
		flex-shrink: 0;
		width: 100%;
		max-width: 40rem;
	}

	.container-item:nth-of-type(1) {
		background-color: red;
	}

	.container-item:nth-of-type(2) {
		background-color: blue;
	}

	.container-item:nth-of-type(3) {
		background-color: green;
	}

	.container-item:nth-of-type(4) {
		background-color: yellow;
	}

	.container-item:nth-of-type(5) {
		background-color: purple;
	}

	.container-item:nth-of-type(6) {
		background-color: pink;
	}

	/**
	 * With type
	 */
	.container--with-type .container-item {
		container-type: size;
	}

	.container--with-fix .container-item {
		// width: 100%; // Won't work because this will make the container 100vw, not the full width of the content.
		// width: max-content; // Has no effect
		// width: 200cqb;

		// A possible fix: Set a fixed with through grid.
		// But we want an intrinsic width, not a fixed one.
		// This isn't possible! See comment: https://stackoverflow.com/questions/73975889/container-query-collapses-width-of-element/73980194#73980194
		grid-template-columns: repeat(var(--column-count), 40rem);
	}
</style>
