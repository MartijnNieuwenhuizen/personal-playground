<script>
	/**
	 * @typedef {Object} Props
	 * @property {'ol' | 'ul'} [type]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { type = 'ul', children } = $props();
</script>

{#if type === 'ol'}
	<ol class="hover-fade-list">
		{@render children?.()}
	</ol>
{/if}

{#if type === 'ul'}
	<ul class="hover-fade-list">
		{@render children?.()}
	</ul>
{/if}

<style>
	.hover-fade-list {
		display: grid;
		grid-template-columns: 1fr auto;
		margin: 2rem 0 0;
		padding: 0;
		list-style: none;
	}

	:global(.hover-fade-list li) {
		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1 / -1;
	}

	:global(.hover-fade-list:hover li) {
		opacity: 0.4;
	}

	:global(.hover-fade-list:hover li:hover) {
		opacity: 1;
	}

	:global(.hover-fade-list a) {
		color: inherit;
	}
</style>
