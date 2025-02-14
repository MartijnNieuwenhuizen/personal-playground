<script>
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Button from '$lib/components/Button/index.svelte';

	const title = 'Badging api';
	const description = 'Add a badge to your PWA icon';

	let count = $state(0);

	const addBadge = () => {
		if ('setAppBadge' in navigator) {
			count++;
			navigator.setAppBadge(count);
		}
	};

	const removeBadge = () => {
		if ('clearAppBadge' in navigator) {
			count = 0;
			navigator.clearAppBadge();
		}
	};
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<Block size="small">
		<h2>How to use it?</h2>
		<ol>
			<li>Ensure your website is a PWA</li>
			<li>Download your PWA and open it</li>
			<li>Hit the button</li>
			<li>Check the icon of the app</li>
		</ol>
		<p>Note: You can download this website as PWA and try it yourself!</p>

		<Row size="small">
			<div class="grid">
				<Button type="button" onclick={addBadge}>Add the badge</Button>
				<Button type="button" onclick={removeBadge}>Remove the badge</Button>
			</div>
		</Row>
	</Block>
</ExperimentItem>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: repeat(
			var(--grid-placement, auto-fill),
			minmax(var(--grid-min-item-size, 16rem), 1fr)
		);
		gap: var(--gutter, gap(6));
	}
</style>
