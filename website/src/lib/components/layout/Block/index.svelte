<script>
	/**
	 * @typedef {Object} Props
	 * @property {'tiny' | 'small' | 'small-medium' | 'medium' | 'large' | 'full'} [size]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { size = 'large', children } = $props();
</script>

<div class="block" data-size={size}>{@render children?.()}</div>

<style lang="scss">
	@import './style.scss';
</style>
