<script lang="ts">
	import { page } from '$app/state';
	import { primaryMenu, secondaryMenu } from '$lib/config/menu';
</script>

<nav class="primary-menu">
	<ul>
		{#each primaryMenu as menuItem}
			<li>
				<a
					href={menuItem.url}
					data-active={menuItem.url === '/'
						? page.url.pathname === menuItem.url
						: page.url.pathname.includes(menuItem.url)}>{menuItem.label}</a
				>
			</li>
		{/each}
	</ul>
</nav>
<nav class="secondary-menu">
	<ul>
		{#each secondaryMenu as menuItem}
			<li>
				<a
					href={menuItem.url}
					data-active={menuItem.url === '/'
						? page.url.pathname === menuItem.url
						: page.url.pathname.includes(menuItem.url)}>{menuItem.label}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	ul {
		@include bare-list;

		display: flex;
		flex-direction: column;
		gap: gap(2);
		color: white;
	}

	nav + nav {
		margin-top: gap(8);
	}

	a {
		position: relative;
		text-decoration: none;
	}

	a::before {
		content: '👉🏻';
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
