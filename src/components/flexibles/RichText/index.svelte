<script lang="ts">
	import Block from '../../../components/layout/block/index.svelte';
	import Row from '../../../components/layout/row/index.svelte';
	import RichContent from '../../../components/modules/RichContent/index.svelte';

	export let title: string;
	export let text: string;
</script>

<Block size="medium">
	<Row size="medium">
		<section class={'rich-text'}>
			{#if title}
				<h2 class={'title'}>{title}</h2>
			{/if}

			<div class={'content'}>
				<RichContent content={text} />
			</div>
		</section>
	</Row>
</Block>

<style lang="scss">
	@import './style.scss';
</style>
