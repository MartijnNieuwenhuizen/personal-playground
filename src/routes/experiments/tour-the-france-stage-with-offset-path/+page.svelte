<!-- 
	@TODO: Add data here like the GRRR blog with the date etc. 
	Autofill this date when the file is generated :) with the generator script.
-->
<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import CyclingStage from '$lib/components/CyclingStage/index.svelte';
	import ScrollTimelineWarning from '$lib/components/ScrollTimelineWarning/index.svelte';

	let title = 'Tour the france stage';
	let description = `
	<p>A outline of the Tour the France. Made with CSS. The cyclist is moved with CSS scroll-timeline.</p>
	<h2>Learnings</h2>
	<ul>
		<li>❌ Can you store a SCSS List in a CSS variable -> Yes <ul><li>But you cannot use it as a SCSS list, not revert it from a CSS variable to SCSS list</li></ul></li>
		<li>✅ Can you use 1 path for both the outline of the mountains and the cyclists path <ul>
			<li>For the runner's path: <code>offset-path: polygon(var(--stage-path))</code></li>
			<li>For the mountains outline: <code>clip-path: polygon(var(--stage-path))</code> (this needs 2 additional points)</li>
			</ul></li>
			</ul>
			`;
</script>

<ScrollTimelineWarning />

<ExperimentItem {title} {description}>
	<div class="stage-21">
		<CyclingStage
			title="Tour the France 2021, stage 21 (Oyonnax - Le Grand-Bornand)"
			totalDistance={150}
		/>
	</div>
</ExperimentItem>

<style lang="scss">
	.stage-21 {
		// --stage-dots: #{$test};
		--stage-dots: 0% 63%, 3% 48%, 12% 76%, 15% 72%, 20% 81%, 21% 73%, 25% 72%, 27% 84%, 35% 80%,
			44% 58%, 46% 63%, 50% 52%, 59% 75%, 65% 75%, 69% 47%, 75% 74%, 82% 28%, 85% 47%, 90% 15%,
			98% 51%, 100% 51%;
	}
</style>
