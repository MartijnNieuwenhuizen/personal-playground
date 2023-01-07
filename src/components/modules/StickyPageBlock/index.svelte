<script lang="ts">
	// 3th party imports
	import { onMount } from 'svelte';

	// Components
	import Block from '../../../components/layout/block/index.svelte';
	import Row from '../../../components/layout/row/index.svelte';

	// Props
	export let enhanceStickiness = true;
	export let theme: string = '#b9fbc0ff';
	export let title: string;
	export let text: string;

	// Ref
	let ref: HTMLElement;

	// Reactive variables
	$: backgroundColor = theme;
	$: enableStickiness = false;

	// Hooks
	onMount(() => {
		// Enable sticky-behavior;
		enableStickiness = true;

		if (!enhanceStickiness) return;
		const handleResize = () => {
			const { height } = ref.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			ref.style.top = height > windowHeight ? `${Math.round(windowHeight - height)}px` : `0px`;
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<section
	class="sticky-page-block"
	bind:this={ref}
	style="--background-color: {backgroundColor};"
	data-stickiness-enabled={enableStickiness}
>
	<Row size="medium">
		<Block size="medium">
			<h2>{title}</h2>

			<div>{@html text}</div>

			<div class="sticky-page-block__ruler">
				<span class="sticky-page-block__ruler-item">10</span>
				<span class="sticky-page-block__ruler-item">20</span>
				<span class="sticky-page-block__ruler-item">30</span>
				<span class="sticky-page-block__ruler-item">40</span>
				<span class="sticky-page-block__ruler-item">50</span>
				<span class="sticky-page-block__ruler-item">60</span>
				<span class="sticky-page-block__ruler-item">70</span>
				<span class="sticky-page-block__ruler-item">80</span>
				<span class="sticky-page-block__ruler-item">90</span>
				<span class="sticky-page-block__ruler-item">100</span>
			</div>
		</Block>
	</Row>
</section>

<style lang="scss">
	@import './style.scss';
</style>
