<script lang="ts">
	import LargeText from '../../flexibles/LargeText/index.svelte';
	import TextMedia from '../../flexibles/TextMedia/index.svelte';
	import RichText from '../../flexibles/RichText/index.svelte';

	export let sections: any[] = [];
</script>

<ul>
	{#each sections as section}
		{#if section.component === 'large-text'}
			<LargeText {...section} />
		{/if}
		{#if section.component === 'text-media'}
			<TextMedia {...section} />
		{/if}
		{#if section.component === 'rich-text'}
			<RichText {...section} />
		{/if}
	{/each}
</ul>
