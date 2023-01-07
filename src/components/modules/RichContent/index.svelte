<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	export let content: string;
</script>

<div class="rich-content">
	<SvelteMarkdown source={content} />
</div>

<style lang="scss">
	@import './style.scss';
</style>
