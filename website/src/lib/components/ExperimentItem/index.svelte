<script>
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import Constrain from '$lib/components/layout/Constrain/index.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {string} title
	 * @property {string} description
	 * @property {boolean} [showPageEffect]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { title, description, showPageEffect = false, children } = $props();
</script>

<section data-show-page-effect={showPageEffect}>
	<Block size="medium">
		<Row size="medium">
			<Constrain size="small">
				<h1 class="title">{title}</h1>
				<div class="description">{@html description}</div>
			</Constrain>
		</Row>
	</Block>

	<div class="new-content-part">
		{@render children?.()}
	</div>
</section>

<style lang="scss">
	section {
		--experiment-item-border-radius: 0px;
		--experiment-item-padding: 0px;

		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	}

	.new-content-part {
		padding: var(--experiment-item-padding);
		background-color: white;
		border-radius: var(--experiment-item-border-radius) var(--experiment-item-border-radius) 0 0;
	}

	section[data-show-page-effect='true'] {
		--experiment-item-border-radius: 40px;
		--experiment-item-padding: 40px;

		@media (width >= 800px) {
			--experiment-item-border-radius: 60px;
		}
	}
</style>
