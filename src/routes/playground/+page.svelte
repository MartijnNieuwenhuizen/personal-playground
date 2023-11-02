<script type="ts">
	import type { PageData } from './$types';

	import Block from '$lib/layout/block/index.svelte';
	import Row from '$lib/layout/row/index.svelte';
	import Constrain from '$lib/layout/constrain/index.svelte';
	import tags from './tags';

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

<section>
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
								<input type="radio" name="tag" id={tag.tag} data-active={currentTag === tag.tag} />
								<label for={tag.tag}>{tag.label} - {tag.count}</label>
							{/each}
						</div>
					</div>
				</fieldset>
			</form>
		</Row>

		<Block size="medium">
			<Constrain size="small">
				<ul>
					{#each filteredLinks as link}
						<!-- content here -->
						<li>
							<a href={link.url}>
								<span>{link.date}</span>
								<span>{link.label}</span>
								<span>
									{#each link.tags as tag}
										<span> - {tags[tag]} </span>
									{/each}
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</Constrain>
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
		gap: 0.5rem;
		padding: 0 var(--block-padding) 1rem var(--block-padding);
	}
	legend {
		font-size: 14px;
	}

	input {
		position: absolute;
		opacity: 0;
	}
	input:focus + label {
		background: var(--highlight-color);
	}
	label {
		white-space: nowrap;
		position: relative;
		display: inline-block;
		padding: 0.65em 1.1em 0.7em;
		border-radius: 50px;
		font-size: 14px;
		line-height: 1;
		text-decoration: none;
		background: #fff;
		transition: background-color 0.2s;
		transition-property: background, color, border-color, opacity, transform, width, height;
		transition-duration: 0.2s;
		transition-timing-function: linear;
	}
	label:hover {
		background: var(--highlight-color);
		cursor: pointer;
	}

	input[data-active='true'] + label {
		background: var(--highlight-color);
	}
</style>
