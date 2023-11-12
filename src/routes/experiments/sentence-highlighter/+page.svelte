<script>
	import { onMount } from 'svelte';

	import Row from '$lib/layout/Row/index.svelte';
	import Block from '$lib/layout/Block/index.svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	const title = 'Sentence highlighter';
	const description = 'Highlight each line of text.';

	/** @type {HTMLElement | null} */
	let parentNode = null;

	/** @type {boolean} */
	let isSupported = true;

	onMount(() => {
		if (!parentNode) return;

		const textContent = parentNode.textContent;
		// const words = textContent.split(/\s+/).filter((word) => word.trim() !== '');

		// for (const word of words) {
		// 	const fooTestElement = document.createElement('foo-test');
		// 	fooTestElement.textContent = word;

		// 	const regex = new RegExp(`\\b${word}\\b`, 'g');
		// 	parentNode.innerHTML = parentNode.innerHTML.replace(regex, fooTestElement.outerHTML);
		// }

		const words = Array.from(parentNode.querySelectorAll('foo-test'));

		// combine all words that are on the same visual line
		const foo = words.reduce((haystag, needle) => {
			const { y } = needle.getBoundingClientRect();
			// const needleRect = needle.getBoundingClientRect();
			// if (haystagRect.top === needleRect.top) {
			// 	haystag.textContent += ` ${needle.textContent}`;
			// 	needle.remove();
			// }
			// return needle;
		}, []);

		// --------------------------------------------

		// function getWordCoordinates() {
		// 	const textContent = parentNode.textContent;
		// 	const words = textContent.split(/\s+/).filter((word) => word.trim() !== '');

		// 	for (const word of words) {
		// 		const tempSpan = document.createElement('span');
		// 		tempSpan.textContent = word;
		// 		document.body.appendChild(tempSpan);

		// 		const rect = tempSpan.getBoundingClientRect();
		// 		const x = rect.left;
		// 		const y = rect.top;

		// 		console.log(`Word: "${word}" - X: ${x}, Y: ${y}`);

		// 		document.body.removeChild(tempSpan);
		// 	}
		// }

		// // Call the function to get word coordinates
		// getWordCoordinates();
		// --------------------------------------------
		// // Check if the Highlight API is supported in the browser.
		// if (!CSS.highlights) {
		// 	isSupported = false;
		// 	return;
		// }

		// if (!parentNode) return;

		// const words = parentNode.textContent?.split(' ');
		// const indexes = words?.map((word) => {
		// 	const index = parentNode.textContent?.indexOf(word);
		// 	return index;
		// });

		// const ranges = indexes?.map((wordIndex, index) => {
		// 	const matchingWord = words?.[index];

		// 	console.log('wordIndex: ', wordIndex);
		// 	console.log('wordIndex + matchingWord.length: ', wordIndex + matchingWord.length);

		// 	const range = new Range();
		// 	range.setStart(parentNode, wordIndex);
		// 	range.setEnd(parentNode, wordIndex + matchingWord.length);

		// 	return range;
		// });

		// console.log('ranges: ', ranges);

		// const highlight = new Highlight(...ranges);

		// CSS.highlights.set('all', highlight);
	});
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<Row>
		<Block size="small">
			{#if !isSupported}
				<p>🚨⚠️ Your browser doesn't support this feature yet ⚠️🚨</p>
			{/if}

			<section bind:this={parentNode}>
				<h2>A lot of dummy content</h2>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>

				<h2>Even more dummy content!</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas eligendi ipsa corporis
					labore dolore iste quasi nihil nemo cum velit cupiditate aperiam eius nobis ad deserunt,
					esse, veritatis reprehenderit?
				</p>
				<foo-test>TEST without JS</foo-test>
			</section>
		</Block>
	</Row>
</ExperimentItem>

<style>
	:global(foo-test) {
		background-color: yellow;
		color: black;
	}

	::highlight(all) {
		background-color: yellow;
		color: black;
	}
</style>
