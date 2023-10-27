<script type="ts">
	import Bauhaus from '$lib/components/Bauhaus/index.svelte';
	import PlaygroundItem from '$lib/components/PlaygroundItem/index.svelte';

	let title = 'Bauhaus';
	let description = `<p>The bauhaus logo build with CSS Grid</p>`;
</script>

<PlaygroundItem {title} {description}>
	<div>
		<Bauhaus />
	</div>
</PlaygroundItem>

<style>
	div {
		max-width: 40rem;
		margin: 0 auto;
		padding: 4rem;
	}
</style>
