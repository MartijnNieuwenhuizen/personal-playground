<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	let title = 'Screen width with CSS';
	let description = `<p>How to get the screen width with just CSS? <a href="https://css-tip.com/screen-dimension/">this article</a> describes the code, this experiment is to find out what each CSS function does.</p>`;
</script>

<ExperimentItem {title} {description}>
	<section>
		<h2>The screen width = <span class="screen-width"></span></h2>
		<h2>The container width = <span class="container-width"></span></h2>
		<p>container doesn't work yet.</p>
	</section>
</ExperimentItem>

<style>
	@property --screen-width {
		syntax: '<length>';
		inherits: true;
		initial-value: 100vw;
	}

	@property --container-width {
		syntax: '<length>';
		inherits: true;
		initial-value: 100cqw;
	}

	h2 {
		text-align: center;
	}

	section {
		--final-screen-width: tan(atan2(var(--screen-width), 1px));
		--final-container-width: tan(atan2(var(--container-width), 1px));

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 40vh;
		container-type: inline-size;
	}

	.screen-width::after {
		content: "Sorry, your browser doesn't support CSS functions";
		content: counter(screen-width);
		counter-reset: screen-width var(--final-screen-width);
	}

	.container-width::after {
		content: "Sorry, your browser doesn't support CSS functions";
		content: counter(container-width);
		counter-reset: container-width var(--final-container-width);
	}
</style>
