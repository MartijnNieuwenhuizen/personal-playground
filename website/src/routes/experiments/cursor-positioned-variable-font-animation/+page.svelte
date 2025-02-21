<script lang="ts">
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import FontAnimationBasedOnCursorPosition from '../../../routes/experiments/cursor-positioned-variable-font-animation/font-animation-based-on-cursor-position/index.svelte';

	const title = 'Variable font animation based on mouse position';
	const description = '';
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<h2>
		<FontAnimationBasedOnCursorPosition>
			Move your mouse to move me.
		</FontAnimationBasedOnCursorPosition>
	</h2>
</ExperimentItem>

<style lang="scss">
	h2 {
		text-align: center;
		padding: 10vh;
	}
</style>
