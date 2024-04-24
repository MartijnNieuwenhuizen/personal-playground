<script>
	import { onMount } from 'svelte';

	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';

	const title = 'Appearing footer';
	const description =
		'The footer should appear when the main scrolls by. This is done, but with JS at the moment. Would like to refactor this to CSS only!';

	/** @type {HTMLElement} */
	let main;
	/** @type {HTMLElement} */
	let footer;

	onMount(() => {
		const handleResize = () => {
			if (!footer || !main) return;

			const { height } = footer.getBoundingClientRect();

			footer.style.setProperty('--position', `fixed`);
			main.style.setProperty('--footer-margin', `${Math.floor(height)}px`);
		};

		// @TODO: Add debounce for window resizer.
		window.addEventListener('resize', handleResize);
		handleResize();
	});
</script>

<ExperimentItem {title} {description} showPageEffect={false}>
	<header>
		<Row>
			<Block size="small">
				<h1>This is the header</h1>
			</Block>
		</Row>
	</header>
	<main bind:this={main}>
		<Row>
			<Block size="small">
				<h2>This is the main content</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sapiente veritatis nam
					nemo repudiandae quos natus repellat provident quas ex quo minus corrupti culpa libero,
					facilis at impedit possimus dolore.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sapiente veritatis nam
					nemo repudiandae quos natus repellat provident quas ex quo minus corrupti culpa libero,
					facilis at impedit possimus dolore.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sapiente veritatis nam
					nemo repudiandae quos natus repellat provident quas ex quo minus corrupti culpa libero,
					facilis at impedit possimus dolore.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sapiente veritatis nam
					nemo repudiandae quos natus repellat provident quas ex quo minus corrupti culpa libero,
					facilis at impedit possimus dolore.
				</p>
			</Block>
		</Row>
	</main>
	<footer bind:this={footer}>
		<Row>
			<Block size="small">
				<h2>Footer</h2>
				<p>This footer should appear when the <code>main</code> scrolls past.</p>
			</Block>
		</Row>
	</footer>
</ExperimentItem>

<style lang="scss">
	header {
		z-index: 2;
		position: relative;
		background-color: gainsboro;
	}
	main {
		--footer-margin: 0px;

		z-index: 2;
		position: relative;
		background-color: white;
		margin-bottom: var(--footer-margin);
	}
	footer {
		--position: relative;

		position: var(--position);
		bottom: 0;
		left: 0;
		right: 0;

		background-color: goldenrod;
	}
</style>
