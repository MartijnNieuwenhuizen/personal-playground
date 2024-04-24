<script>
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import Constrain from '$lib/components/layout/Constrain/index.svelte';

	/** @type {string} */
	export let title;
	/** @type {string} */
	export let description;
	/** @type {boolean} */
	export let showPageEffect = false;
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
		<slot />
	</div>
</section>

<style lang="scss">
	section {
		--experiment-item-border-radius: 0px;
		--experiment-item-padding: 0px;

		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr;
	}
	.new-content-part {
		border-radius: var(--experiment-item-border-radius) var(--experiment-item-border-radius) 0 0;
		padding: var(--experiment-item-padding);
		background-color: white;
	}

	section[data-show-page-effect='true'] {
		--experiment-item-border-radius: 40px;
		--experiment-item-padding: 40px;

		@media (min-width: 800px) {
			--experiment-item-border-radius: 60px;
		}
	}
</style>
