<script lang="ts">
	import Block from '../../../components/layout/block/index.svelte';
	import Row from '../../../components/layout/row/index.svelte';

	export let type: 'large-text' = 'large-text';
	export let component: 'large-text' = 'large-text';

	export let text: string;
	export let linkLabel: string;
	export let linkUrl: string;
</script>

<div class={'large-text'}>
	<Block size={'medium'}>
		<Row size={'huge'}>
			<div class={'content'}>
				<p>{text}</p>
			</div>

			{#if linkUrl && linkLabel}
				<a href={linkUrl} class={'link'}>{linkLabel}</a>
			{/if}
		</Row>
	</Block>
</div>

<style lang="scss">
	@import './style.scss';
</style>
