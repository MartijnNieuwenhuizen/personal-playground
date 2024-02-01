<script>
	/** @type {'ol' | 'ul'} */
	export let type = 'ul';
</script>

{#if type === 'ol'}
	<ol class="hover-fade-list">
		<slot />
	</ol>
{/if}

{#if type === 'ul'}
	<ul class="hover-fade-list">
		<slot />
	</ul>
{/if}

<style>
	.hover-fade-list {
		list-style: none;
		padding: 0;
		margin: 2rem 0 0;
		display: grid;
		grid-template-columns: 1fr auto;
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
