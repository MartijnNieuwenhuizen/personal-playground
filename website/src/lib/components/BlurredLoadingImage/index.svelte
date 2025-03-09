<script>
	import { onMount } from 'svelte';

	/** @type {HTMLElement} */
	let trigger = $state();

	/** @type {HTMLImageElement} */
	let blurredImage = $state();
	/** @type {HTMLImageElement} */
	let sharpImage = $state();

	let imageIsInView = false;
	let sharpImageIsLoaded = false;

	function showSharpImageWhenReadyAndVisible() {
		if (imageIsInView && sharpImageIsLoaded) {
			blurredImage.setAttribute('data-hidden', 'true');
		}
	}

	function handleImageLoad() {
		sharpImageIsLoaded = true;

		showSharpImageWhenReadyAndVisible();
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						imageIsInView = true;
						observer.unobserve(entry.target);

						showSharpImageWhenReadyAndVisible();
					}
				});
			},
			{
				// Ensure the observer is triggered when the element is within 20% of the bottom of the viewport
				// rootMargin: '-10% 0px',
				rootMargin: '-15% 0px',
				threshold: 0.1
			}
		);

		observer.observe(trigger);

		// Only add the event listener if the image is not already loaded
		if (sharpImage.complete) {
			handleImageLoad();
		} else {
			sharpImage.addEventListener('load', () => handleImageLoad);
		}

		// Ensure the image isn't already a tiny bit visible when we enable the blurred image.
		const sharpImageRect = sharpImage.getBoundingClientRect();
		const sharpImageIsInView = sharpImageRect.top < window.innerHeight && sharpImageRect.bottom > 0;

		if (!sharpImageIsInView) {
			blurredImage?.setAttribute('data-hidden', 'false');
		}
	});

	/**
	 * @typedef {Object} Props
	 * @property {string} sharpSrc
	 * @property {string} blurredSrc
	 */

	/** @type {Props} */
	let { sharpSrc, blurredSrc } = $props();
</script>

<figure bind:this={trigger}>
	<img src={sharpSrc} alt="" bind:this={sharpImage} />
	<img aria-hidden="true" data-hidden="true" src={blurredSrc} alt="" bind:this={blurredImage} />
</figure>

<style lang="scss">
	figure {
		position: relative;
	}

	figure img[aria-hidden='true'] {
		pointer-events: none;
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		inset: 0;
	}

	:is(:global(img[data-hidden='true'])) {
		opacity: 0;
		transition: opacity 500ms ease 0s;
	}
</style>
