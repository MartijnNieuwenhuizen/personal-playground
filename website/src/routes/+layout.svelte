<script>
	import { beforeNavigate } from '$app/navigation';
	import SiteHeader from '$lib/components/SiteHeader/index.svelte';
	import SiteFooter from '$lib/components/SiteFooter/index.svelte';
	import SecondaryMenu from '$lib/components/PopOutMenu/index.svelte';
	import { menuState } from '$lib/states/MenuState/index.svelte';

	let { data, children } = $props();

	let showNameScroller = $derived(data.showNameScroller);

	beforeNavigate(() => {
		menuState.menuIsOpen = false;
	});
</script>

<div class="page" data-show-name-scroller={showNameScroller} data-show-menu={menuState.menuIsOpen}>
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

	<header>
		<SiteHeader />
	</header>

	<div class="layout-test">
		<div>
			<main id="content">
				{@render children?.()}
			</main>
		</div>

		<div>
			<aside><SecondaryMenu /></aside>
		</div>
	</div>

	<footer>
		<SiteFooter />
	</footer>
</div>

<style lang="scss">
	@import '../../styles/globals';

	:global(html) {
		scroll-timeline: --page-scroll;
	}

	.page {
		--menu-size: 0rem;
		--open-menu-size: 20rem;
		--primary-color: #eef0ea;
		--name-slider-height: 5rem;

		min-height: 100vh;
		background-color: var(--primary-color);
	}

	.page[data-show-menu='true'] {
		--menu-size: var(--open-menu-size);
	}

	.page[data-show-name-scroller='true'] {
		overflow: hidden;

		@include bp-min(medium) {
			display: grid;
			grid-template: auto 1fr auto / var(--name-slider-height) 1fr;
			grid-template-areas:
				'header header'
				'. main'
				'footer footer';
		}
	}

	@keyframes scroll-other-direction-horizontal {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(-50%);
		}
	}

	@keyframes scroll-other-direction-vertical {
		from {
			transform: translateY(calc(-50% - 100vh));
		}

		to {
			transform: translateY(0%);
		}
	}

	.name-slider {
		font-weight: 400;
		font-size: calc((var(--name-slider-height) / 100) * 90);
		line-height: 1;
		animation: scroll-other-direction-horizontal auto linear;
		animation-timeline: --page-scroll;

		@include bp-min(medium) {
			animation: scroll-other-direction-vertical auto linear;
			animation-timeline: --page-scroll;
		}
	}

	.name-slider-inner {
		display: none;

		@include bp-min(medium) {
			display: flex;
			flex-direction: row;
			gap: 1rem;
			transform: rotate(90deg) translateY(-100%);
			transform-origin: top left;
		}
	}

	.name-slider span {
		color: transparent;
		white-space: nowrap;
		-webkit-text-stroke: 1px black;
	}

	header {
		grid-area: header;
	}

	main {
		grid-area: main;
		width: 100%;
		container-type: inline-size;
	}

	footer {
		grid-area: footer;
	}

	aside {
		z-index: 2;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: calc(var(--open-menu-size) - gap(4));
		padding: gap(13) gap(10);
		background: linear-gradient(-45deg, var(--expressive-color-dark), var(--expressive-color));
		background-color: var(--expressive-color);
		border-top-left-radius: 2rem;
		border-bottom-left-radius: 2rem;
		transform: translateX(100%);
		transition: transform 0.2s cubic-bezier(0.83, 0, 0.17, 1);
	}

	[data-show-menu='true'] aside {
		transform: translateX(0);
	}

	.layout-test {
		display: grid;
		grid-template-columns: 1fr var(--menu-size);
		transition: grid-template-columns 0.2s cubic-bezier(0.83, 0, 0.17, 1);
	}
</style>
