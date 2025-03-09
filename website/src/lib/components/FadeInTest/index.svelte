<script>
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {string} [id]
	 */

	/** @type {Props} */
	let { id = '1' } = $props();

	let keyFrameName = $derived(`fade-in-with-move-${id}`);
	let animation = $derived(`@keyframes ${keyFrameName} {
		from {
			opacity: 0;
			transform: translateY(4rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}`);
</script>

<Row>
	<Block size="medium">
		<div style={`${animation}`}>
			<h2>This is a component</h2>
			<p>
				This component fades in with the new Scroll-timeline API. This component fades in with the
				new Scroll-timeline API. This component fades in with the new Scroll-timeline API. This
				component fades in with the new Scroll-timeline API. This component fades in with the new
				Scroll-timeline API.
			</p>
		</div>
	</Block>
</Row>

<style>
	div {
		/* Attach animation, linked to the  View Timeline */

		/* animation: linear fade-in-with-move both; */

		animation: linear fade-in-with-move-1 both;

		/* Create View Timeline */
		view-timeline-name: --revealing-component;
		view-timeline-axis: block;
		animation-timeline: --revealing-component;

		/* Tweak range when effect should run */
		animation-range: entry 15% cover 25%;
	}
</style>
