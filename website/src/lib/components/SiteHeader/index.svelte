<script>
	import { page } from '$app/stores';
	import SkipLink from '$lib/components/SkipLink/index.svelte';

	const primaryMenuItems = [
		{
			url: '/',
			label: '🏠',
			ariaLabel: 'Home'
		},
		{
			url: '/experiments',
			label: 'Experiments'
		},
		{
			url: '/blog',
			label: 'Blog'
		},
		{
			url: '/gists',
			label: 'Gists'
		}
	];

	// const secondaryMenuItems = [
	// 	{
	// 		url: '/bookmarks',
	// 		label: 'Bookmarks'
	// 	},
	// 	{
	// 		url: '/fun-projects',
	// 		label: 'Fun projects'
	// 	}
	// ];
</script>

<SkipLink id="content" label="skip the main navigation" />

<nav class="primary-menu">
	<ul>
		{#each primaryMenuItems as menuItem}
			<li>
				<a
					href={menuItem.url}
					data-active={menuItem.url === '/'
						? $page.url.pathname === menuItem.url
						: $page.url.pathname.includes(menuItem.url)}
				>
					{menuItem.label}
					{#if menuItem.ariaLabel}
						<span class="sr-only">{menuItem.ariaLabel}</span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<!-- <nav class="secondary-menu">
	<ul>
		{#each secondaryMenuItems as menuItem}
			<li>
				<a
					href={menuItem.url}
					data-active={menuItem.url === '/'
						? $page.url.pathname === menuItem.url
						: $page.url.pathname.includes(menuItem.url)}>{menuItem.label}</a
				>
			</li>
		{/each}
	</ul>
</nav> -->

<style lang="scss">
	.primary-menu {
		overflow-x: auto;
	}
	.primary-menu ul {
		list-style: none;
		display: flex;
		align-items: center;
		gap: 0.5rem 2rem;
		margin: 0 auto;
		padding: 1rem var(--block-padding);

		@media screen and (min-width: 550px) {
			justify-content: center;
			gap: 0.5rem 3rem;
		}
	}

	li {
		flex-shrink: 0;
		flex-grow: 0;
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
</style>
