<script>
	/** @type {function} */
	export let shouldShowWarning;
	/** @type {string} */
	export let link;

	import { onMount } from 'svelte';

	let showWarning = false;

	onMount(() => {
		showWarning = shouldShowWarning();
	});
</script>

<aside data-visible={showWarning} aria-hidden={!showWarning}>
	<h2>⚠️ Browser support issue ⚠️</h2>
	<p>
		A feature is used that isn't supported in your browser. If you want to see this in action, you
		can check <a href={link}>the browser support here</a>.
	</p>
</aside>

<style lang="scss">
	aside {
		z-index: 999;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: gap(6);
		background-color: $white;
		box-shadow: 0 0 10px rgba($black, 0.1);
		border-radius: 5px;
		text-align: center;

		display: none;
	}
	aside[data-visible='true'] {
		display: block;
	}
</style>
