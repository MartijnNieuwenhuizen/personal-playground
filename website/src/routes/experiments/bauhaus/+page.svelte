<script>
	import Bauhaus from '$lib/components/Bauhaus/index.svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	let title = 'Bauhaus';
	let description = `<p>The bauhaus logo build with CSS Grid</p>`;
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<div>
		<Bauhaus />
	</div>
</ExperimentItem>

<style>
	div {
		max-width: 40rem;
		margin: 0 auto;
		padding: 4rem;
	}
</style>
