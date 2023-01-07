<script lang="ts">
	import LargeText from '../../flexibles/LargeText/index.svelte';

	export let sections: any[] = [];
</script>

<ul>
	{#each sections as section}
		{#if section.component === 'large-text'}
			<LargeText {...section} />
		{/if}
	{/each}
</ul>
