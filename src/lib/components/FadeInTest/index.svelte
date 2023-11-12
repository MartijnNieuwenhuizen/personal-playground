<script>
	import Block from '$lib/layout/Block/index.svelte';
	import Row from '$lib/layout/Row/index.svelte';

	/** @type {string} */
	export let id = '1';

	$: keyFrameName = `fade-in-with-move-${id}`;
	$: animation = `@keyframes ${keyFrameName} {
		from {
			opacity: 0;
			transform: translateY(4rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}`;
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
		/* Create View Timeline */
		view-timeline-name: --revealing-component;
		view-timeline-axis: block;

		/* Attach animation, linked to the  View Timeline */
		/* animation: linear fade-in-with-move both; */

		animation: linear fade-in-with-move-1 both;
		animation-timeline: --revealing-component;

		/* Tweak range when effect should run*/
		animation-range: entry 15% cover 25%;
	}
</style>
