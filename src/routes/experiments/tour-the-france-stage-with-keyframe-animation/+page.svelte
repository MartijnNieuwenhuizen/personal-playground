<!-- 
	@TODO: Add data here like the GRRR blog with the date etc. 
	Autofill this date when the file is generated :) with the generator script.
-->
<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	let title = 'Tour the france stage';
	let description = `<p>A outline of the Tour the France. Made with CSS. The cyclist is moved with CSS scroll-timeline.</p>`;
</script>

<ExperimentItem {title} {description}>
	<div class="container">
		<div class="sticky">
			<div class="stage-outline">
				<div class="stage-scroller" />
			</div>

			<div class="runner"><span>🚴🏻</span></div>
		</div>
	</div>
</ExperimentItem>

<style lang="scss">
	:global(html) {
		/* @TODO: Make this scoped to a component! */
		scroll-timeline: --stage-timeline;
	}

	.container {
		position: relative;
		min-height: 600vh;
	}
	.sticky {
		position: sticky;
		top: 30%;

		/* Create container so we can use container-relative units */
		container-type: size;
		aspect-ratio: 4 / 1;
	}

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

	.stage-outline {
		width: 100%;
		height: 100%;
		background-color: hsla(64, 80%, 77%);
		opacity: 0.5;
		aspect-ratio: 4 / 1;

		clip-path: polygon($test);
	}

	@keyframes stage-scroller {
		from {
			transform: scaleX(0);
		}
		to {
			transform: scaleX(100%);
		}
	}

	.stage-scroller {
		background-color: lime;
		width: 100%;
		height: 100%;

		transform-origin: left;
		animation: stage-scroller auto linear;
		animation-timeline: --stage-timeline;
	}

	@keyframes runner-path {
		@for $i from 1 through length($stage-dots) {
			$item: nth($stage-dots, $i);

			// Prevent getting the item after the last item.
			$nextItemIndex: $i + 1;
			@if $nextItemIndex > length($stage-dots) {
				$nextItemIndex: $i;
			}
			$nextItem: nth($stage-dots, $nextItemIndex);

			// Correct calculation, but wrong result.
			// We want to use the first value in the array (for a reason I cannot understand yet).
			// $keyframePercentage: round((($i / length($stage-dots)) * 100%));

			// Calculate the percentage of the keyframe.
			$keyframePercentage: (nth($item, 1) * 1%);
			$nextKeyframePercentage: (nth($nextItem, 1) * 1% - 0.01%);

			// Check if the cyclist is going up-hil, downhill or flat.
			$orientation: 'flat';
			$rotate: 0deg;
			@if $i < length($stage-dots) {
				@if nth($nextItem, 2) > nth($item, 2) {
					$orientation: 'uphill';
					$rotate: 45deg;
				}
				@if nth($nextItem, 2) < nth($item, 2) {
					$orientation: 'downhill';
					$rotate: -45deg;
				}
			}

			// Create as many keyframes as there are items in the list.
			#{$keyframePercentage} {
				transform-origin: center;
				transform: translateX(calc(#{nth($item, 1)}cqw - 50%))
					translateY(calc(#{nth($item, 2)}cqh - 50%))
					rotate($rotate);
			}
			// Create a next keyframe that's almost the same as the next item in the loop.
			// But the orientation is the one of the current item in the loop.
			// This ensures the cyclist is keeping the correct rotation throughout the entire part of the animation.
			#{$nextKeyframePercentage} {
				transform-origin: center;
				transform: translateX(calc(#{nth($nextItem, 1)}cqw - 50%))
					translateY(calc(#{nth($nextItem, 2)}cqh - 50%))
					rotate($rotate);
			}
		}
	}

	/* 
		@TODO: Use prettier colors.
		@TODO: Write how this works on the page.
		@TODO: Make even more dynamic so I can add multiple stages on this page! :).
		@TODO: Check if I can improve this with https://developer.mozilla.org/en-US/docs/Web/CSS/offset-path !!!!!
	*/

	.runner {
		position: absolute;
		top: 0;
		left: 0;

		transform-origin: left;
		animation: runner-path auto linear;
		animation-timeline: --stage-timeline;
		font-size: 1.5rem;
	}

	.runner span {
		display: block;
		transform: rotateY(180deg);
	}
</style>
