<script lang="ts">
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	const title = 'Variable font animation based on mouse position';
	const description = '';

	let ytlc = $state(416);
	
	let ytuc = $state(528);
	
	let yopq = $state(25);
	

	function handleMouseMove(event: MouseEvent) {
		console.log('event: ', event);
		const { clientX, clientY, currentTarget } = event;
		const { offsetWidth, offsetHeight } = currentTarget as HTMLElement;
		const x = clientX / offsetWidth;
		const y = clientY / offsetHeight;
		ytlc = 570 - Math.round(y * (570 - 416));
		ytuc = 760 - Math.round(y * (760 - 528));
		yopq = 25 + Math.round(x * (135 - 25));
	}
</script>

<div
	onmousemove={handleMouseMove}
	role="presentation"
	style="--ytlc: {ytlc}; --ytuc: {ytuc}; --yopq: {yopq};"
>
	<ExperimentItem {title} {description} showPageEffect={true}>
		<h2>Move your mouse to move me.</h2>
	</ExperimentItem>
</div>

<style lang="scss">
	// Include variable font on this page
	@font-face {
		font-family: 'Roboto flex';
		src: url('./Roboto Flex Font.ttf') format('truetype');
		font-weight: 100 900;
		font-style: normal;
		font-variation-settings: 'YTLC' 416 570, 'YTUC' 528 760, 'YOPQ' 25 135;
	}

	h2 {
		text-align: center;
		padding: 10vh;
		font-family: 'Roboto flex';
		font-size: 10vw;
		font-variation-settings: 'YTLC' var(--ytlc, 416), 'YTUC' var(--ytuc, 528),
			'YOPQ' var(--yopq, 25);
	}
</style>
