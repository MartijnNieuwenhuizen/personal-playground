<script type="ts">
	import type { PageData } from './$types';

	import tags from './tags';

	import Block from '$lib/layout/block/index.svelte';
	import Row from '$lib/layout/row/index.svelte';
	import Constrain from '$lib/layout/constrain/index.svelte';
	import PreviewForList from '$lib/components/PreviewForList/index.svelte';

	export let data: PageData;

	let currentTag = 'all';

	$: filteredLinks = data.links.filter((link) => {
		if (currentTag === 'all') return true;
		return link.tags.includes(currentTag);
	});

	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		currentTag = target.id;
	}

	const enrichedTags = Object.keys(tags)
		.map((tag) => ({
			tag,
			label: tags[tag],
			count: data.links.filter((item) => item.tags.includes(tag)).length
		}))
		.sort((a, b) => b.count - a.count);
</script>

<section data-current-tag={currentTag}>
	<div class="container">
		<h1>Playground</h1>
	</div>

	<Row size="medium">
		<Block size="medium">
			<Constrain size="small">
				<p>
					Throughout the day/week, you will need to try a lot of things. And it's important to get
					feedback as soon as possible in your workflow. This is what I use this playground for:
					Isolated tests, ideas. Some will be nice to look at, some will be boring.
				</p>
			</Constrain>
		</Block>

		<Row size="small" area="top">
			<form action="">
				<fieldset on:change={handleChange}>
					<div class="overflow">
						<div class="overflow-list">
							<legend class="sr-only">Filter by category</legend>

							<input type="radio" name="tag" id={'all'} data-active={currentTag === 'all'} />
							<label for={'all'}>All ({data.links.length})</label>
							{#each enrichedTags as tag}
								<input
									type="radio"
									name="tag"
									id={tag.tag}
									data-active={currentTag === 'all' || currentTag === tag.tag}
								/>
								<label for={tag.tag}>{tag.label} - {tag.count}</label>
							{/each}
						</div>
					</div>
				</fieldset>
			</form>
		</Row>

		<Block size="medium">
			<h2 class="sr-only">Playground items</h2>
			<ul>
				{#each filteredLinks as link}
					<li>
						<PreviewForList url={link.url} title={link.label} date={link.date} />
					</li>
				{/each}
			</ul>
		</Block>
	</Row>
</section>

<style>
	.container {
		overflow: hidden;
		max-width: 100vw;
	}

	h1 {
		line-height: 1.2;
		margin: 0;
		padding: 0;
		text-align: center;

		font-family: var(--serif);
		font-size: 22.472000000000055vw;

		/* font-family: var(--sans-serif);
		font-size: 19.480000000000018vw;
		font-weight: var(--font-weight-normal);
		transform: scale(1.065) translateX(-0.25%); */
	}

	fieldset {
		margin: 0;
		padding: 0;
		border: 0;
	}
	.overflow {
		overflow-x: auto;
		max-width: 100vw;
	}
	.overflow-list {
		display: flex;
		padding: 0 var(--block-padding) 1rem var(--block-padding);
	}
	legend {
		font-size: 14px;
	}

	input {
		position: absolute;
		opacity: 0;
	}
	label {
		white-space: nowrap;
		position: relative;
		display: inline-block;
		padding: 1em 1.1em;
		font-size: 14px;
		line-height: 1;
		text-decoration: none;
		border: 2px solid black;
		margin-left: -2px;
	}
	label:hover {
		cursor: pointer;
	}

	input[data-active='false'] + label {
		opacity: 0.5;
	}
	input[data-active='true'] + label {
		text-decoration: underline;
	}
	[data-current-tag='all'] input[data-active='true'] + label {
		text-decoration: none;
	}
	.overflow-list:hover input:not([data-active='true']) + label {
		opacity: 0.5;
	}
	.overflow-list:hover label:hover {
		opacity: 1 !important;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 2rem 0 0;
		display: grid;
		grid-template-columns: 1fr auto;
	}
	li {
		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1 / -1;
	}

	ul:hover li {
		opacity: 0.4;
	}

	ul:hover li:hover {
		opacity: 1;
	}
</style>
