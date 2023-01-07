<script lang="ts">
	import type { PageData } from './$types';

	import Page from '../../components/layout/page/index.svelte';
	import FlexibleContent from '../../components/modules/FlexibleContent/index.svelte';

	export let data: PageData;
</script>

<Page>
	<h1>{data.page.title}</h1>

	<FlexibleContent sections={data.page.sections} />
</Page>
