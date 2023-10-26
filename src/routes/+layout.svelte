<script lang="ts">
	import SiteHeader from '$lib/components/SiteHeader/index.svelte';
	import SiteFooter from '$lib/components/SiteFooter/index.svelte';

	export let data;

	$: showNameScroller = data.showNameScroller;
</script>

<div class="page" data-show-name-scroller={showNameScroller}>
	<header>
		<SiteHeader />
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<SiteFooter />
	</footer>

	{#if showNameScroller}
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
	{/if}
</div>

<style lang="scss">
	:global {
		@import '../styles/globals.scss';
	}
	:global(html) {
		scroll-timeline: --page-scroll;
	}

	.page {
		--primary-color: #eef0ea;
		--name-slider-height: 5rem;

		min-height: 100vh;
		background-color: var(--primary-color);
	}

	.page[data-show-name-scroller='true'] {
		overflow: hidden;

		display: grid;
		grid-template-columns: var(--name-slider-height) 1fr;
		grid-template-rows: auto 1fr auto;
		grid-template-areas:
			'header header'
			'name-slider main'
			'footer footer';
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
		// grid-area: name-slider;
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
		color: transparent;
		-webkit-text-stroke: 1px black;
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
