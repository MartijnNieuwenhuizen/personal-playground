<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import CustomUnderline from '$lib/components/CustomUnderline/index.svelte';
	import CustomSquiggle from '$lib/components/CustomSquiggle/index.svelte';
	import Code from '$lib/components/Code/index.svelte';

	const title = 'Hand drawn lines and squiggles';
	const description =
		'Custom lines and squiggles are possible with SVGs. Do keep in mind that the words that are underlined or squiggled cannot wrap over multiple lines';

	const squiggleSvg = `<svg
  class="circle"
  aria-hidden="true"
  focusable="false"
  viewBox="0 0 141 53"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none" // Important!
>
  <path
	vector-effect="non-scaling-stroke" // Important!
	d="M127.704 5.33938C71.5519 -3.68651 -14.7461 5.34096 4.83422 35.3926C21.6716 61.2344 137.517 51.7062 138.966 30.5825C140.817 3.60319 66.3215 2.02061 25.7926 5.34062"
	stroke="currentColor"
	stroke-width="4"
	stroke-linecap="round">
  </path>
</svg>`;
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<Block size="small-medium">
		<h2><CustomUnderline>Lines</CustomUnderline></h2>
		<p>
			You would like to
			<CustomUnderline>underline a word</CustomUnderline>
			but don't use <span class="default-underline">the default browser underline</span>. I get
			that. In that case, you can use a line SVG.
		</p>
		<Row size="small" area="bottom">
			<h2><CustomSquiggle>Squiggles</CustomSquiggle></h2>
			<p>
				Or, you would like to have a <CustomSquiggle>squiggle around a word</CustomSquiggle>, and
				there is no default browser squiggle. In that case, you can use a <CustomSquiggle
					>circle</CustomSquiggle
				> SVG.
			</p>
		</Row>
		<Row size="small" area="bottom">
			<h2>How?</h2>
			<p>
				You can inspect the elements on this page to figure out the CSS. But here is the SVG, as
				this is where the magic happens.
			</p>

			<Code code={squiggleSvg} language="xml" />

			<p>
				If you don't set the <CustomSquiggle><code>preserveAspectRatio="none"</code></CustomSquiggle
				> attribute, the drawn shape will always have the same aspect ratio. Even if the text is wider,
				the shape will be the same. We want to stretch the shape to the width of the text.
			</p>

			<p>
				If we stretch the shape, the width of the line should always stay the same. Just like you
				draw a line with a ballpoint pen. To ensure this, we set the <CustomSquiggle
					><code>vector-effect="non-scaling-stroke"</code></CustomSquiggle
				> attribute.
			</p>
		</Row>
	</Block>
</ExperimentItem>

<style lang="scss">
	.default-underline {
		text-decoration: underline;
		text-decoration-skip-ink: auto;
	}
</style>
