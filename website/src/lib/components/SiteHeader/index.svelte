<script>
	import { page } from '$app/state';
	import SkipLink from '$lib/components/SkipLink/index.svelte';
	import MenuToggleButton from '$lib/components/MenuToggleButton/index.svelte';
	import { primaryMenu } from '$lib/config/menu';
</script>

<SkipLink id="content" label="skip the main navigation" />

<div class="site-header">
	<nav class="primary-menu">
		<ul>
			<li>
				<a href="/" data-active={page.url.pathname === '/'}>
					🏠<span class="sr-only">Home</span>
				</a>
			</li>

			{#each primaryMenu as menuItem}
				<li class="hidden-on-smaller-screens">
					<a
						href={menuItem.url}
						data-active={menuItem.url === '/'
							? page.url.pathname === menuItem.url
							: page.url.pathname.includes(menuItem.url)}
					>
						{menuItem.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="menu-toggle">
		<MenuToggleButton />
	</div>
</div>

<style lang="scss">
	.site-header {
		display: grid;
		grid-template-columns: 1fr auto;
	}

	.menu-toggle {
		z-index: 10;
		position: relative;
		padding: gap(5);
	}

	.primary-menu ul {
		display: flex;
		gap: 0.5rem 2rem;
		align-items: center;
		margin: 0 auto;
		padding: 1rem var(--block-padding);
		list-style: none;

		@include bp-min(small) {
			gap: 0.5rem 3rem;
			justify-content: center;
		}
	}

	li {
		flex-grow: 0;
		flex-shrink: 0;
	}

	a {
		position: relative;
		text-decoration: none;
	}

	a::before {
		content: '👉';
		opacity: 0;
		transform: translateX(calc((100% + 1rem) * -1));
		transition:
			opacity 0.2s,
			transform 0.2s;
	}

	a:hover::before,
	a:focus::before,
	a[data-active='true']::before {
		opacity: 1;
		transform: translateX(calc((100% + 0.3rem) * -1));
	}

	.hidden-on-smaller-screens {
		display: none;

		@include bp-min(small) {
			display: block;
		}
	}
</style>
