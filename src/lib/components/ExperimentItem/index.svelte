<script lang="ts">
	import Block from '$lib/layout/Block/index.svelte';
	import Row from '$lib/layout/Row/index.svelte';
	import Constrain from '$lib/layout/Constrain/index.svelte';

	export let title: string;
	export let description: string;
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

<style>
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

	@media (min-width: 800px) {
		section {
			--experiment-item-border-radius: 60px;
		}
	}

	section[data-show-page-effect='true'] {
		--experiment-item-border-radius: 40px;
		--experiment-item-padding: 40px;
	}
</style>
