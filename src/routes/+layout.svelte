<script>
	import SiteFooter from '$lib/components/SiteFooter/index.svelte';
</script>

<div class="page">
	<header>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/blog">Blog</a></li>
				<li><a href="/playground">Playground</a></li>
			</ul>
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<SiteFooter />
	</footer>

	<div class="name-slider" aria-hidden="true">
		<div class="name-slider-inner">
			<span>Martijn Nieuwenhuizen</span>
			<span>Martijn Nieuwenhuizen</span>
			<span>Martijn Nieuwenhuizen</span>
			<span>Martijn Nieuwenhuizen</span>
			<span>Martijn Nieuwenhuizen</span>
			<span>Martijn Nieuwenhuizen</span>
			<span>Martijn Nieuwenhuizen</span>
			<span>Martijn Nieuwenhuizen</span>
			<span>Martijn Nieuwenhuizen</span>
		</div>
	</div>
</div>

<style lang="scss">
	:global {
		@import '../styles/globals.scss';
	}
	:global(html) {
		scroll-timeline: --page-scroll;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	nav {
		padding: 1.5rem;
	}
	nav ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin: 0 auto;
	}

	.page {
		--primary-color: #eef0ea;
		--name-slider-height: 5rem;

		overflow: hidden;

		display: grid;
		grid-template-columns: var(--name-slider-height) 1fr;
		grid-template-rows: auto 1fr auto;
		grid-template-areas:
			'header header'
			'name-slider main'
			'footer footer';

		min-height: 100vh;

		background-color: var(--primary-color);
	}

	@keyframes scroll-other-direction {
		from {
			transform: translateY(calc(-50% - 100vh));
		}
		to {
			transform: translateY(0%);
		}
	}
	.name-slider {
		grid-area: name-slider;
		font-size: calc((var(--name-slider-height) / 100) * 90);
		font-weight: 400;
		line-height: 1;

		animation: scroll-other-direction auto linear;
		animation-timeline: --page-scroll;
	}
	.name-slider-inner {
		display: flex;
		flex-direction: row;
		gap: 1rem;

		transform: rotate(90deg) translateY(-100%);
		transform-origin: top left;
	}
	.name-slider span {
		white-space: nowrap;
	}
	header {
		grid-area: header;
	}
	main {
		grid-area: main;
	}
	footer {
		grid-area: footer;
	}
</style>
