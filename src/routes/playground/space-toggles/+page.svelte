<script lang="ts">
	import Block from '../../../components/layout/block/index.svelte';
	import Row from '../../../components/layout/row/index.svelte';
	import Constrain from '../../../components/layout/constrain/index.svelte';
	import Page from '../../../components/layout/page/index.svelte';

	import './style.scss';
</script>

<Page>
	<Block size="medium">
		<Row size="medium">
			<Constrain size="small">
				<h1>Space toggles</h1>
				<p>
					Based on <a href="https://www.bram.us/2023/06/14/cyclic-dependency-space-toggles/"
						>this article</a
					> by Brammus
				</p>

				<div>
					<label for="toggle">Toggle me</label>
					<input type="checkbox" id="toggle" class="space-toggles__toggle" />
					<div class="space-toggles preview-box" />
				</div>
			</Constrain>
		</Row>
	</Block>
</Page>
