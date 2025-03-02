<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	let {
		children
	}: {
		children: Snippet;
	} = $props();

	let ytlc = $state(416);
	let ytuc = $state(528);
	let yopq = $state(25);

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
			ytlc = 570 - Math.round(y * (570 - 416));
			ytuc = 760 - Math.round(y * (760 - 528));
			yopq = 25 + Math.round(x * (135 - 25));
		}
		window.onmousemove = handleMouseMove;
	});
</script>

<span role="presentation" style="--ytlc: {ytlc}; --ytuc: {ytuc}; --yopq: {yopq};">
	<span class="animation-element">{@render children()}</span>
</span>

<style lang="scss">
	// Include variable font on this page
	@font-face {
		font-family: 'Roboto flex';
		src: url('/fonts/Roboto Flex Font.ttf') format('truetype');
		font-weight: 100 900;
		font-style: normal;
		font-variation-settings:
			'YTLC' 416 570,
			'YTUC' 528 760,
			'YOPQ' 25 135;
	}

	.animation-element {
		font-family: 'Roboto flex';
		font-size: 10vw;

		font-variation-settings:
			'YTLC' var(--ytlc, 416),
			'YTUC' var(--ytuc, 528),
			'YOPQ' var(--yopq, 25);

		@media (prefers-reduced-motion) {
			font-variation-settings: normal;
		}
	}
</style>
