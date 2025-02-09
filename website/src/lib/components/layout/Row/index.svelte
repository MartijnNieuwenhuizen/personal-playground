<script>
	/**
	 * @typedef {Object} Props
	 * @property {'small' | 'medium' | 'large' | 'huge'} [size]
	 * @property {'both' | 'top' | 'bottom'} [area]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { size = 'medium', area = 'both', children } = $props();
</script>

<div class="row" data-size={size} data-area={area}>{@render children?.()}</div>

<style lang="scss">
	@import './style.scss';
</style>
