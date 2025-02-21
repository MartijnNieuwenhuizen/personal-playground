<script lang="ts">
	import { onMount } from 'svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';

	const title = '3dletter animation with drop shadow';
	const description =
		'Can you create a 3D text animation with drop shadow? Inspired by <a href="https://cydstumpel.nl/">Cyd Stumpel</a>';

	let rotationX = 0;
	let rotationY = 0;

	let innerWidth = null;
	let innerHeight = null;

	onMount(() => {
		function handleResize() {
			const { innerWidth: newInnerWidth, innerHeight: newInnerHeight } = window;
			innerWidth = newInnerWidth;
			innerHeight = newInnerHeight;
		}

		window.onresize = handleResize;
		handleResize();

		function handleMouseMove(event: MouseEvent) {
			const { clientX, clientY, view } = event;
			const { innerWidth, innerHeight } = view as Window;
			const x = clientX / innerWidth;
			const y = clientY / innerHeight;
			rotationX = (y - 0.5) * 20; // Increase the range of rotation
			rotationY = (0.5 - x) * 20; // Increase the range of rotation
		}
		window.onmousemove = handleMouseMove;
	});
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<Block size="medium">
		<h2>Is this possible?</h2>

		<p>As it turns out, <strong>yes</strong>.</p>
		<!-- <p>
			If you want to use this effect in production, please add some throttling to the <code
				>window.onmousemove</code
			>
			handler.
		</p> -->
		<p>There are 3 steps to this experiment. Move your mouse to see them in actions</p>
	</Block>
	<Row size="medium">
		<h3 class="rotate" style="--rotation-x: {rotationX}; --rotation-y: {rotationY};">Rotate me!</h3>
	</Row>
	<Row size="medium">
		<h3 class="rotate drop-shadow" style="--rotation-x: {rotationX}; --rotation-y: {rotationY};">
			Drop shadow
		</h3>
	</Row>
	<Row size="medium">
		<h3
			class="rotate drop-shadow rotate-drop-shadow"
			style="--rotation-x: {rotationX}; --rotation-y: {rotationY};"
		>
			Rotate all
		</h3>
	</Row>
</ExperimentItem>

<style lang="scss">
	h3 {
		color: var(--expressive-color);
		font-size: 14vw;
		text-align: center;
		text-transform: uppercase;
	}

	.rotate {
		transform: rotateX(calc(var(--rotation-x) * 1deg)) rotateY(calc(var(--rotation-y) * 1deg));

		@media (prefers-reduced-motion: reduce) {
			transform: none;
		}
	}
	.drop-shadow {
		color: white;

		--drop-shadow-color: var(--expressive-color);
		-webkit-text-stroke: 0.05rem var(--expressive-color);
		filter: drop-shadow(0.25rem 0.25rem 0 var(--drop-shadow-color))
			drop-shadow(0.5rem 0.5rem 0 var(--drop-shadow-color))
			drop-shadow(0.75rem 0.75rem 0 var(--drop-shadow-color));
	}
	.rotate-drop-shadow {
		--perspective-x: calc(var(--rotation-x) / 4);
		--perspective-y: calc(var(--rotation-y) / 4);

		--offset-1: 0.1rem;
		--offset-2: 0.2rem;
		--offset-3: 0.3rem;

		filter: drop-shadow(
				calc(var(--offset-1) * var(--perspective-x)) calc(var(--offset-1) * var(--perspective-y)) 0
					var(--drop-shadow-color)
			)
			drop-shadow(
				calc(var(--offset-2) * var(--perspective-x)) calc(var(--offset-2) * var(--perspective-y)) 0
					var(--drop-shadow-color)
			)
			drop-shadow(
				calc(var(--offset-3) * var(--perspective-x)) calc(var(--offset-3) * var(--perspective-y)) 0
					var(--drop-shadow-color)
			);

		@media (prefers-reduced-motion: reduce) {
			filter: none;
		}
	}
</style>
