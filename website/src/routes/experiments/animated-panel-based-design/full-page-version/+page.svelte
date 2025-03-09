<script>
	import Row from '$lib/components/layout/Row/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';

	let cards = [
		{
			title: 'Forrest',
			image: '/images/page-transition/forrest.webp',
			url: '/experiments/card-to-header-page-transition/forrest',
			color: '#656769'
		},
		{
			title: 'Sea',
			image: '/images/page-transition/sea.webp',
			url: '/experiments/card-to-header-page-transition/sea',
			color: '#81C4EE'
		},
		{
			title: 'Leaves',
			image: '/images/page-transition/leaves.webp',
			url: '/experiments/card-to-header-page-transition/leaves',
			color: '#E6D5A9'
		},
		{
			title: 'Forrest',
			image: '/images/page-transition/forrest.webp',
			url: '/experiments/card-to-header-page-transition/forrest',
			color: '#656769'
		},
		{
			title: 'Sea',
			image: '/images/page-transition/sea.webp',
			url: '/experiments/card-to-header-page-transition/sea',
			color: '#81C4EE'
		},
		{
			title: 'Leaves',
			image: '/images/page-transition/leaves.webp',
			url: '/experiments/card-to-header-page-transition/leaves',
			color: '#E6D5A9'
		},
		{
			title: 'Forrest',
			image: '/images/page-transition/forrest.webp',
			url: '/experiments/card-to-header-page-transition/forrest',
			color: '#656769'
		},
		{
			title: 'Sea',
			image: '/images/page-transition/sea.webp',
			url: '/experiments/card-to-header-page-transition/sea',
			color: '#81C4EE'
		},
		{
			title: 'Leaves',
			image: '/images/page-transition/leaves.webp',
			url: '/experiments/card-to-header-page-transition/leaves',
			color: '#E6D5A9'
		}
	];

	let showFloatingPanelCssGrid = $state(false);

	let showSidePanelCssGrid = $state(false);

	let showAnnotationPanelCssGrid = $state(false);
</script>

<div class="page-reset">
	<div class="container">
		<div class="control-panel">
			<form>
				<div>
					<input type="checkbox" id="show-side-panel" bind:checked={showSidePanelCssGrid} />
					<label for="show-side-panel">Show side panel</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="show-annotation-panel"
						bind:checked={showAnnotationPanelCssGrid}
					/>
					<label for="show-annotation-panel">Show annotation panel</label>
				</div>
				<div>
					<input type="checkbox" id="show-floating-panel" bind:checked={showFloatingPanelCssGrid} />
					<label for="show-floating-panel">Show floating panel</label>
				</div>
			</form>
		</div>

		<div class="panels" data-grid={`${showSidePanelCssGrid}-${showAnnotationPanelCssGrid}`}>
			<div class="side-panel" data-visible={showSidePanelCssGrid}></div>
			<div class="main-panel">
				<section class="main-panel-content">
					<div class="main-panel-intro">
						<h2>Main panel</h2>
						<p>This could include a collection of cards.</p>
					</div>

					<ul class="cards">
						{#each cards as card}
							<li style={`--background-color: ${card.color}`}>
								<figure>
									<img
										src={card.image}
										alt="Page 1"
										style={`view-transition-name: image-${card.title.toLowerCase()};`}
									/>
									<figcaption style={`view-transition-name: color-${card.title.toLowerCase()};`}>
										<span>{card.title}</span>
									</figcaption>
								</figure>
								<a href={card.url}><span class="sr-only">{card.title}</span></a>
							</li>
						{/each}
					</ul>
				</section>
			</div>
			<div class="floating-panel" data-visible={showFloatingPanelCssGrid}>
				<section><h2>Action panel</h2></section>
			</div>
			<div class="annotation-panel" data-visible={showAnnotationPanelCssGrid}></div>
		</div>

		<div class="side-panel-content">
			<h2>This is the content of the side panel!</h2>
		</div>
		<div class="annotation-panel-content">
			<h2>This is the content of the annotation panel panel!</h2>
			<ul>
				<li>Entry a</li>
				<li>Entry b</li>
				<li>Entry c</li>
			</ul>
		</div>
	</div>
</div>

<style lang="scss">
	.page-reset {
		--floating-panel-offset: 4vh;
		--side-panel-size: 0vw;
		--annotation-panel-size: 0vw;

		/* Ensure the pabels are overflowing the default UI (no way to remove this with the svelte layout files) */
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		padding: 2rem;
		background-color: #172635;
	}

	.panels {
		display: grid;
		grid-template-areas: 'side-panel main-panel annotation-panel';
		grid-template-columns: var(--side-panel-size) 1fr var(--annotation-panel-size);
		background-color: rgb(255 255 255 / 10%);
		color: white;
		border-radius: 1rem;
		transition: grid-template-columns 0.2s cubic-bezier(0.83, 0, 0.17, 1);
	}

	.panels * {
		font-family: sans-serif;
	}

	.panels h2 {
		margin: 0;
		padding: 0;
		line-height: 1;
	}

	.control-panel {
		grid-area: control-panel;
		margin-bottom: 2rem;
	}

	.control-panel form {
		z-index: 99;
		position: relative;
		display: flex;
		gap: 2rem;
		justify-content: center;
		color: white;
	}

	.side-panel {
		grid-area: side-panel;
		background-color: #d78000;
		color: white;
		border-radius: 1rem;
		transition: transform cubic-bezier(0.83, 0, 0.17, 1) 0.2s;
	}

	.main-panel {
		grid-area: main-panel;
	}

	.main-panel-intro {
		padding-bottom: 2rem;
	}

	.annotation-panel {
		grid-area: annotation-panel;
		background-color: white;
		border-radius: 1rem;
		transition: transform cubic-bezier(0.83, 0, 0.17, 1) 0.2s;
	}

	.floating-panel {
		position: fixed;
		bottom: var(--floating-panel-offset);
		left: 50vw;
		grid-area: action-panel;
		min-width: 60vw;
		padding: 1rem;
		background-color: #23a1be;
		color: white;
		border-radius: 16px;
		transform: translate(-50%, 0);
		transition: transform cubic-bezier(0.83, 0, 0.17, 1) 0.2s;
	}

	.floating-panel[data-visible='false'] {
		transform: translate(-50%, calc(var(--floating-panel-offset) + 100%));
	}

	.panels[data-grid='true-false'] {
		--side-panel-size: 20vw;
		--annotation-panel-size: 0vw;
	}

	.panels[data-grid='false-true'] {
		--side-panel-size: 0vw;
		--annotation-panel-size: 40vw;
	}

	.panels[data-grid='true-true'] {
		--side-panel-size: 20vw;
		--annotation-panel-size: 40vw;
	}

	/* Quick cards styling, used from another experiment. */
	.cards {
		display: grid;
		grid-gap: 1rem;
		margin: 0;
		padding: 0;
		list-style: none;
		text-align: center;

		@include bp-min(small) {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
	}

	.cards li {
		position: relative;
	}

	.cards img {
		width: 100%;
	}

	.cards figcaption {
		@include heading-3;

		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		padding: 1rem;
		background-color: var(--background-color);
		transform: skewX(-10deg) rotate(-10deg) translateY(-2rem);
	}

	.cards span {
		display: block;
		transition: transform 0.2s ease-out;
	}

	.cards li:hover figcaption span {
		text-decoration: underline;
		transform: skewX(10deg);
	}

	.cards a {
		z-index: 2;
	}

	.cards a::after {
		content: '';
		position: absolute;
		inset: 0;
	}

	.main-panel-content {
		padding: 2rem;
	}

	// Side panels content
	.container {
		overflow: hidden;
		position: relative;
	}

	.side-panel-content,
	.annotation-panel-content {
		position: absolute;
		top: 0;

		// This 4 is calculated based on the bottom-padding of the form and the padding of the main panel.
		// That's not what we want here. It should scale based on the container. Should be improved!
		padding: 4rem 2rem;
		transition: transform 0.2s cubic-bezier(0.83, 0, 0.17, 1);
	}

	.side-panel-content {
		left: 0;

		// width: var(--side-panel-size);
		width: 20vw;
		transform: translateX(-100%);
	}

	.annotation-panel-content {
		right: 0;

		// width: var(--annotation-panel-size);
		width: 40vw;
		transform: translateX(100%);
	}

	.panels[data-grid='true-false'] ~ .side-panel-content,
	.panels[data-grid='false-true'] ~ .annotation-panel-content,
	.panels[data-grid='true-true'] ~ .side-panel-content,
	.panels[data-grid='true-true'] ~ .annotation-panel-content {
		transform: translateX(0%);
	}
</style>
