<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Button from '$lib/components/Button/index.svelte';

	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import Code from '$lib/components/Code/index.svelte';

	const title = 'popover animations';
	const description = 'Create a fade-in, but more importantly, create a fade-out animation.';
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<Block size="medium">
		<Row size="medium">
			<h2>Popover</h2>
			<p>This experiment shows a popover with a fade-in and fade-out animation.</p>
			<p>
				The fade-out animation, with just CSS, is great! But do note that an element with a popover
				attribute (and opened/closed with the current methods), will not be a modal with (with focus
				trap). For that, you need to use <strong>dialog</strong> element and use the
				<code>showModal()</code> method.
			</p>
		</Row>
		<Row size="medium" area="bottom">
			<div popover="auto" id="popover-id" aria-labelledby="popover-id">
				<h2>Popover content</h2>
				<Button popovertarget="popover-id" popovertargetaction="hide">Close popover</Button>
			</div>

			<Button popovertarget="popover-id" popovertargetaction="show">Open popover</Button>
		</Row>
		<Row size="medium" area="bottom">
			<h2>Tips</h2>
			<p>Look Ma, no JavaScript!</p>
			<Code
				code={`
✅ Apply allow-discrete.

This ensures you can animate the popover. 
Why? By default the popover is hidden with display: none;
With transition-behavior: allow-discrete; you can animate the display property. 

[popover] {
	transition-behavior: allow-discrete;
}`}
				language="css"
			/>

			<Code
				code={`
✅ Apply a starting-style to ensure a fade-in animation.

[popover]:popover-open {
	@starting-style {
		opacity: 0;
		transform: translateY(var(--animation-transform-offset));
	}

	opacity: 1;
	...
}`}
				language="css"
			/>

			<Code
				code={`
✅ Use button attributes to open and close the popover instead of JavaScript.

<div popover="auto" id="popover-id" aria-labelledby="popover-id">
...
</div>

<button popovertarget="popover-id" popovertargetaction="show">Open popover</button>
<button popovertarget="popover-id" popovertargetaction="hide">Close popover</button>
`}
				language="html"
			/>

			<Code
				code={`
❌ Don't set the display to flex/grid/block etc. as default style on a element with a popover attribute.

Ensures the popover is on top of your content. 
Even if it's hidden in this case due to the opacity: 0;
This ensures you cannot interact with your content.

[popover] {
	display: flex;
}`}
				language="css"
			/>
		</Row>
	</Block>
</ExperimentItem>

<style lang="scss">
	[popover] {
		--animation-duration: 0.2s;
		--animation-timing-function: ease-in-out;
		--animation-transform-offset: 0.5rem;

		opacity: 0;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: max(35rem, 60vw);
		margin: auto;
		padding: gap(6);
		border: 0;
		transform: translateY(var(--animation-transform-offset));
		transition: transform, opacity, display, overlay;
		transition-duration: var(--animation-duration);
		transition-timing-function: var(--animation-timing-function);
		transition-behavior: allow-discrete;
	}

	[popover]:popover-open {
		@starting-style {
			opacity: 0;
			transform: translateY(var(--animation-transform-offset));
		}

		opacity: 1;
		display: flex;
		transform: translateY(0);
	}

	[popover]::backdrop {
		opacity: 0;
		background-color: rgb(0 0 0 / 50%);
		transition:
			opacity var(--animation-duration) var(--animation-timing-function),
			display var(--animation-duration) var(--animation-timing-function);
		transition-behavior: allow-discrete;
	}

	[popover]:popover-open::backdrop {
		@starting-style {
			opacity: 0;
		}

		opacity: 1;
	}
</style>
