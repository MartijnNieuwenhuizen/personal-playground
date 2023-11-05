<script>
	import { page } from '$app/stores';

	const menuItems = [
		{
			url: '/',
			label: 'Home'
		},
		{
			url: '/blog',
			label: 'Blog'
		},
		{
			url: '/fun-projects',
			label: 'Fun projects'
		},
		{
			url: '/experiments',
			label: 'Experiments'
		}
	];
</script>

<nav>
	<ul>
		{#each menuItems as menuItem}
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
</nav>

<style lang="scss">
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
		gap: 0.5rem 2rem;
		margin: 0 auto;

		@media screen and (min-width: 550px) {
			gap: 0.5rem 3rem;
		}
	}

	a {
		position: relative;
		text-decoration: none;
	}
	a::before {
		content: '👉';
		opacity: 0;
		position: absolute;
		left: 0;
		transform: translateX(calc((100% + 1rem) * -1));
		transition: opacity 0.2s, transform 0.2s;
	}

	a:hover::before,
	a:focus::before,
	a[data-active='true']::before {
		opacity: 1;
		transform: translateX(calc((100% + 0.3rem) * -1));
	}
</style>
