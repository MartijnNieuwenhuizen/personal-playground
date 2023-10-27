<script type="ts">
	import Row from '$lib/layout/row/index.svelte';
	import Block from '$lib/layout/block/index.svelte';
	import PlaygroundItem from '$lib/components/PlaygroundItem/index.svelte';

	let title = 'Calculate the font-size for a full screen title with a specific font.';
	let description = `<p>The solution will output a <code>...vw</code> value.</p>`;

	let titleElement: HTMLHeadElement;
	let isDone: boolean = false;

	function recursivelyCalculatePreciseFontSize(value: number, precision: number = 10) {
		// Set the font size
		customFontSize = `${value}vw`;

		// Wait for the font-size to be applied
		// @TODO: Refactor this to an observer instead of a timeout
		setTimeout(() => {
			// If the title is too wide, we need to make it smaller
			if (titleElement.scrollWidth > window.innerWidth) {
				//Build up the precision
				if (precision === 10) {
					return recursivelyCalculatePreciseFontSize(value - precision, 1);
				} else if (precision === 1) {
					return recursivelyCalculatePreciseFontSize(value - precision, 0.5);
				} else if (precision === 0.5) {
					return recursivelyCalculatePreciseFontSize(value - precision, 0.1);
				} else if (precision === 0.1) {
					return recursivelyCalculatePreciseFontSize(value - precision, 0.01);
				} else if (precision === 0.01) {
					return recursivelyCalculatePreciseFontSize(value - precision, 0.001);
				}

				// When there's a good enough value, pick the previous version (because this one is overflowing)
				customFontSize = `${value - precision}vw`;

				// End recursion
				isDone = true;
				return;
			}

			// If the title is too small, we need to make it bigger
			return recursivelyCalculatePreciseFontSize(value + precision, precision);
		}, 100);
	}

	function handleSubmit(event) {
		// Reset state
		isDone = false;

		// Set values for CSS variables
		title = event.target.title.value;
		fontFamily = event.target.font.value;

		// Start the calculation
		recursivelyCalculatePreciseFontSize(1, 10);
	}

	function copyToClipboard() {
		navigator.clipboard.writeText(customFontSize);
	}

	$: title = '';
	$: fontFamily = '';
	$: customFontSize = `1vw`;
</script>

<PlaygroundItem {title} {description} hidePageEffect={true}>
	<Row area="top">
		<Block>
			<h2>Select your options</h2>

			<form on:submit|preventDefault={handleSubmit}>
				<div>
					<label for="title">Title</label>
					<input type="text" id="title" value="My personal title" />
				</div>

				<div>
					<label for="font">Font</label>
					<select name="font" id="font">
						<option value="Crimson-Text">Crimson-Text</option>
						<option value="Lato">Lato</option>
					</select>
				</div>
				<button type="submit">Calculate</button>
			</form>

			{#if isDone}
				<p>
					Your font size should be: <strong>{customFontSize}</strong>
					<button type="button" on:click={copyToClipboard}>Copy value to clipboard</button>
				</p>
			{/if}
		</Block>
	</Row>

	<Row area="bottom">
		<div class="container">
			<h2
				class="output"
				bind:this={titleElement}
				style="--full-screen-tool-font-size: {customFontSize}; --full-screen-tool-font-family: {fontFamily}"
			>
				{title}
			</h2>
		</div>
	</Row>
</PlaygroundItem>

<style>
	.container {
		font-size: var(--full-screen-tool-font-size);

		overflow-x: auto;
		overflow-y: visible;
		max-width: 100vw;
		min-height: 50ex;
	}
	.output {
		font-family: var(--full-screen-tool-font-family);
		font-size: var(--full-screen-tool-font-size);
		line-height: 1;
		margin: 0;
		padding: 0;
		white-space: nowrap;
	}
</style>
