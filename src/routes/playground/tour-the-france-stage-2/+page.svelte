<!-- 
	@TODO: Add data here like the GRRR blog with the date etc. 
	Autofill this date when the file is generated :) with the generator script.
-->
<script>
	import PlaygroundItem from '$lib/components/PlaygroundItem/index.svelte';
	import CyclingStage from '$lib/components/CyclingStage/index.svelte';

	let title = 'Tour the france stage';
	let description = `<p>A outline of the Tour the France. Made with CSS. The cyclist is moved with CSS scroll-timeline.</p>`;
</script>

<PlaygroundItem {title} {description} hidePageEffect={true}>
	<div class="stage-21">
		<CyclingStage
			title="Tour the France 2021, stage 21 (Oyonnax - Le Grand-Bornand)"
			totalDistance={150}
		/>
	</div>
</PlaygroundItem>

<style type="scss">
	$stage-dots: (
		(0, 63),
		(3, 48),
		(12, 76),
		(15, 72),
		(20, 81),
		(21, 73),
		(25, 72),
		(27, 84),
		(35, 80),
		(44, 58),
		(46, 63),
		(50, 52),
		(59, 75),
		(65, 75),
		(69, 47),
		(75, 74),
		(82, 28),
		(85, 47),
		(90, 15),
		(98, 51),
		(100, 51)
	);

	// Create a new list with percentages.
	// Outcome: 0%, 63%, 3%, 48%, 12%, 76% etc.
	$test: ();
	@for $i from 1 through length($stage-dots) {
		$item: nth($stage-dots, $i);
		$test: append($test, calc(#{nth($item, 1)} * 1%) calc(#{nth($item, 2)} * 1%), comma);
	}
	// Append the two missing shapes for the clip-path (bottom-right and bottom-left).
	$test: append($test, 100% 100%, comma);
	$test: append($test, 0% 100%, comma);

	.stage-21 {
		// --stage-dots: #{$test};
		--stage-dots: 0% 63%, (3, 48), (12, 76), (15, 72), (20, 81), (21, 73), (25, 72), (27, 84),
			(35, 80), (44, 58), (46, 63), (50, 52), (59, 75), (65, 75), (69, 47), (75, 74), (82, 28),
			(85, 47), (90, 15), (98, 51), (100, 51);
	}
</style>
