<script lang="ts">
	import Block from '$lib/layout/block/index.svelte';
	import Row from '$lib/layout/row/index.svelte';
	import Constrain from '$lib/layout/constrain/index.svelte';

	export let title: string;
	export let description: string;
</script>

<section>
	<Block size="medium">
		<Row size="medium">
			<Constrain size="small">
				<h2 class="title">{title}</h2>
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
		--border-radius: 40px;
		--padding: 40px;

		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr;
	}
	.new-content-part {
		border-radius: var(--border-radius) var(--border-radius) 0 0;
		padding: var(--padding);
		background-color: white;
	}

	@media (min-width: 800px) {
		section {
			--border-radius: 60px;
		}
	}
</style>
