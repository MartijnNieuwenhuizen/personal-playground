<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	import Block from '../../../components/layout/block/index.svelte';
	import Constrain from '../../../components/layout/constrain/index.svelte';
	import Row from '../../../components/layout/row/index.svelte';

	export let order: 'text-image' | 'image-text';
	export let text: string;
	export let image: string;
	export let imageAlt: string;

	// @TODO: This should be optional! Also visible within the type!
	export let title: string;

	export let component: 'text-media';
</script>

<Block size="medium">
	<Row size="huge">
		<section class="text-media" data-order={order}>
			{#if title}
				<h2 class="title">{title}</h2>
			{/if}

			<div class="text">
				<Constrain size="small">
					<SvelteMarkdown source={text} />
				</Constrain>
			</div>

			<figure class="image-container">
				<img src={image} alt={imageAlt} class="image" />
			</figure>
		</section>
	</Row>
</Block>

<style lang="scss">
	@import './style.scss';
</style>
