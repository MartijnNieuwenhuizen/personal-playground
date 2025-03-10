<script>
	import Row from '$lib/components/layout/Row/index.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {string} title
	 * @property {string} image
	 * @property {string} color
	 */

	/** @type {Props} */
	let { title, image, color } = $props();

	let titleLetters = $derived(title.split(''));
</script>

<Row size="small">
	<header style={`--background-color: ${color}`}>
		<h1>
			{#each titleLetters as letter}
				<span>{letter}</span>
			{/each}
		</h1>
		<img style={`view-transition-name: image-${title.toLowerCase()};`} src={image} alt="" />

		<div class="background" style={`view-transition-name: color-${title.toLowerCase()};`}></div>
	</header>
</Row>

<style lang="scss">
	@keyframes fade-in {
		0% {
			transform: translateY(100%) rotate(3deg);
		}

		100% {
			transform: translateY(0) rotate(0deg);
		}
	}

	h1 {
		@include heading-1;

		overflow: hidden;
		z-index: 1;
		position: relative;
		margin: 0;
		padding-left: var(--block-padding);
		line-height: 1;
		text-align: center;
	}

	h1 span {
		position: relative;
		display: inline-block;
	}

	@for $i from 1 through 10 {
		// This doesn't hide the letters!
		:global(html::view-transition-new(title-#{$i})) {
			transform: translateY(100%) rotate(3deg);
			animation: fade-in 0.2s #{0.1 + ($i * 0.05)}s ease-out forwards;
		}

		h1 span:nth-of-type(#{$i}) {
			view-transition-name: title-#{$i};
		}

		// This will hide the letters. But this isn't what I want!
		// h1 span:nth-of-type(#{$i}) {
		// 	transform: translateY(100%) rotate(3deg);
		// 	animation: fade-in 0.2s #{0.1 + ($i * 0.05)}s ease-out forwards;
		// }
	}

	header {
		position: relative;
		display: grid;
		gap: 2rem;

		@include bp-min(tiny) {
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}
	}

	img {
		z-index: 1;
		width: 100%;
	}

	.background {
		position: absolute;
		background-color: var(--background-color);
		inset: 0;
	}
</style>
