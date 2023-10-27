<script type="ts">
	import Row from '$lib/layout/row/index.svelte';
	import Block from '$lib/layout/block/index.svelte';
	import PlaygroundItem from '$lib/components/PlaygroundItem/index.svelte';

	let title = 'Calculate the font-size for a full screen title with a specific font.';
	let description = `<p>The solution will output a <code>...vw</code> value.</p>`;

	let titleElement: HTMLHeadElement;
	let showValue: boolean = false;

	let value: number = 1;
	let precision: number = 10;

	function setNewFontSize(newValue: number) {
		customFontSize = `${newValue}vw`;
	}

	function maxThreeDecimals(value: number) {
		return Math.round(value * 1000) / 1000;
	}

	function initializeObserver() {
		const resizeObserver = new ResizeObserver((entries) => {
			if (entries[0].target.scrollWidth > window.innerWidth) {
				//Build up the precision
				if (precision === 10) {
					value = value - precision;
					precision = 1;

					return setNewFontSize(value - precision);
				} else if (precision === 1) {
					value = value - precision;
					precision = 0.5;

					return setNewFontSize(value - precision);
				} else if (precision === 0.5) {
					value = value - precision;
					precision = 0.1;

					return setNewFontSize(value - precision);
				} else if (precision === 0.1) {
					value = value - precision;
					precision = 0.01;

					return setNewFontSize(value - precision);
				} else if (precision === 0.01) {
					value = value - precision;
					precision = 0.001;

					return setNewFontSize(value - precision);
				}

				resizeObserver.disconnect();
				value = value - precision * 2;
				setNewFontSize(value - precision * 2);
			}

			// If the title is too small, we need to make it bigger
			value = value + precision;
			setNewFontSize(value + precision);
		});

		resizeObserver.observe(titleElement);
	}

	function handleSubmit(event) {
		// Set values for CSS variables
		title = event.target.title.value;
		fontFamily = event.target.font.value;

		// Start the calculation
		initializeObserver();

		// Reset the form
		showValue = true;
		value = 1;
		precision = 10;
		setNewFontSize(1);
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

			{#if showValue}
				<p>
					Your font size should be: <strong>{maxThreeDecimals(value)}vw</strong>
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
