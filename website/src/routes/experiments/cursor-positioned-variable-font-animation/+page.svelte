<script lang="ts">
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import PrefersReduceMotionWarning from '$lib/components/PrefersReduceMotionWarning/index.svelte';

	import FontAnimationBasedOnCursorPosition from '$lib/components/font-animation-based-on-cursor-position/index.svelte';

	const title = 'Variable font animation based on mouse position';
	const description = '';
</script>

<PrefersReduceMotionWarning />

<ExperimentItem {title} {description} showPageEffect={true}>
	<h2>
		<FontAnimationBasedOnCursorPosition>
			Move your mouse to move me.
		</FontAnimationBasedOnCursorPosition>
	</h2>
</ExperimentItem>

<style lang="scss">
	h2 {
		padding: 10vh;
		text-align: center;
	}
</style>
