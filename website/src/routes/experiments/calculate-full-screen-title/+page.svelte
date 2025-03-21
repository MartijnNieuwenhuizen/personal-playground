<script>
	import { preventDefault } from 'svelte/legacy';

	import Row from '$lib/components/layout/Row/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Code from '$lib/components/Code/index.svelte';

	let experimentTitle = 'Calculate the font-size for a full screen title with a specific font.';
	let description = `<p>The solution will output a <code>...vw</code> value.</p>`;

	/** @type {HTMLHeadElement} */
	let titleElement = $state();
	/** @type {HTMLDivElement} */
	let containerElement = $state();
	/** @type {boolean} */
	let showValue = $state(false);

	/** @type {number} */
	let value = $state(1);
	/** @type {number} */
	let precision = 10;

	let title = $state('');

	let fontFamily = $state('');

	let fontWeight = $state('');

	let letterSpacing = $state('');

	let customFontSize = $state(`1vw`);

	/**
	 * @param {number} newValue
	 */
	function setNewFontSize(newValue) {
		customFontSize = `${newValue}vw`;
	}

	/**
	 * @param {number} value
	 */
	function maxThreeDecimals(value) {
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

	/**
	 * @TODO: Fix this type!
	 * @param {any} event
	 */
	function handleSubmit(event) {
		if (!event.target) return;

		// Set values for CSS variables
		title = event.target.title.value;
		fontFamily = event.target.font.value;
		fontWeight = event.target.fontWeight.value;
		letterSpacing = event.target.letterSpacing.value;

		if (event.target.customFont && event.target.customFont) {
			const fontFile = event.target.customFont.files[0];

			// @TODO: Validate input

			const reader = new FileReader();
			reader.onload = function (readerEvent) {
				if (!readerEvent.target) return;

				const fontData = readerEvent.target.result;
				titleElement.style.fontFamily = 'CustomFont';

				containerElement.innerHTML = `@font-face {
            font-family: 'CustomFont';
            src: url("${fontData}");
        }`;
			};

			reader.readAsDataURL(fontFile);
		}

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

	let htmlCode = $derived(`<div class="title-container">
  <h2 class="title">{title}</h2>
</div>`);

	let cssCode = $derived(`.title-container {
  overflow: hidden;
  max-width: 100vw;
}
.title {
  font-size: ${maxThreeDecimals(value)}vw;
  font-family: "${fontFamily}";
  font-weight: "${fontWeight}";
  letter-spacing: "${letterSpacing}";
  line-height: 1.2;
  white-space: nowrap;
}
`);

	let showCustomFontInput = $derived(fontFamily === 'customFont');

	let customProperties = $derived(
		`--full-screen-tool-font-size: ${customFontSize}; --full-screen-tool-font-family: ${fontFamily}; --full-screen-tool-font-weight: ${fontWeight};  --full-screen-tool-letter-spacing: ${letterSpacing};`
	);

	/**
	 * @TODO: Fix this type!
	 * @param {any} event
	 */
	function handleFontFamilyChange(event) {
		if (!event.target) return;
		fontFamily = event.target.value;
	}
</script>

<ExperimentItem title={experimentTitle} {description}>
	<Row area="top">
		<Block>
			<h2>Select your options</h2>

			<form onsubmit={preventDefault(handleSubmit)}>
				<div>
					<label for="title">Title</label>
					<input type="text" id="title" value="My personal title" />
				</div>

				<div>
					<label for="font">Font</label>
					<select name="font" id="font" onchange={handleFontFamilyChange}>
						<option value="Crimson-Text">Crimson-Text</option>
						<option value="Lato">Lato</option>
						<option value="customFont">CustomFont</option>
					</select>
				</div>

				{#if showCustomFontInput}
					<label for="customFont">Custom font</label>
					<input type="file" name="customFont" id="customFont" />
				{/if}

				<div>
					<label for="fontWeight">Font weight</label>
					<select name="fontWeight" id="fontWeight" value="700">
						<option value="100">100</option>
						<option value="200">200</option>
						<option value="300">300</option>
						<option value="400">400</option>
						<option value="500">500</option>
						<option value="600">600</option>
						<option value="700">700</option>
						<option value="800">800</option>
						<option value="900">900</option>
					</select>
				</div>

				<div>
					<label for="letterSpacing">Letter spacing</label>
					<input type="text" id="letterSpacing" value="" />
				</div>

				<button type="submit">Calculate</button>
			</form>

			{#if showValue}
				<p>
					Your font size should be: <strong>{maxThreeDecimals(value)}vw</strong>
					<button type="button" onclick={copyToClipboard}>Copy value to clipboard</button>
				</p>
			{/if}
		</Block>
	</Row>

	<Row area="bottom">
		<div class="container">
			<!-- stylelint-disable-next-line no-empty-source -->
			<style bind:this={containerElement}>
				/* stylelint-disable no-empty-source */
			</style>
			<h2 class="output" bind:this={titleElement} style={customProperties}>
				{title}
			</h2>
		</div>
	</Row>

	<Row area="bottom">
		<Block size="medium">
			<h3>Code</h3>

			<Code code={htmlCode} language="xml" />

			<Code code={cssCode} language="css" />
		</Block>
	</Row>
</ExperimentItem>

<style>
	.container {
		overflow: auto visible;
		max-width: 100vw;
		font-size: var(--full-screen-tool-font-size);
	}

	.output {
		margin: 0;
		padding: 0;
		font-family: var(--full-screen-tool-font-family);
		font-weight: var(--full-screen-tool-font-weight);
		font-size: var(--full-screen-tool-font-size);
		line-height: 1;
		letter-spacing: var(--full-screen-tool-letter-spacing);
		text-align: center;
		white-space: nowrap;
	}
</style>
