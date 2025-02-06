<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	let title = 'Screen width with CSS';
	let description = `<p>How to get the screen width with just CSS? <a href="https://css-tip.com/screen-dimension/">this article</a> describes the code, this experiment is to find out what each CSS function does.</p>`;
</script>

<ExperimentItem {title} {description}>
	<section>
		<h2>The screen width = <span></span></h2>
	</section>
</ExperimentItem>

<style>
	@property --width {
		syntax: '<length>';
		inherits: true;
		initial-value: 100vw;
	}
	@property --height {
		syntax: '<length>';
		inherits: true;
		initial-value: 100vh;
	}
	:root {
		--screen-width: tan(atan2(var(--width), 1px));
		--screen-height: tan(atan2(var(--height), 1px));
	}

	h2 {
		text-align: center;
	}
	section {
		min-height: 40vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	span:after {
		content: "Sorry, your browser doesn't support CSS functions";
		counter-reset: width var(--screen-width);
		content: counter(width);
	}
</style>
