<script>
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import Constrain from '$lib/components/layout/Constrain/index.svelte';
	import PreviewForList from '$lib/components/PreviewForList/index.svelte';
	import HoverFadeList from '$lib/components/HoverFadeList/index.svelte';
	let { data } = $props();

	let currentTag = $state('all');

	const { bookmarks, tags } = data;

	let filteredLinks = $derived(
		bookmarks.filter((link) => {
			if (currentTag === 'all') return true;
			return link.tags.includes(currentTag);
		})
	);

	// @param {import('svelte').Event<HTMLFormElement>} event
	/**
	 * @param {any} event
	 */
	function handleChange(event) {
		/** @type {HTMLInputElement} */
		const target = event.target;
		currentTag = target.id;
	}

	const enrichedTags = Object.keys(tags)
		.map((tag) => ({
			tag,
			label: tag,
			count: bookmarks.filter((item) => item.tags.includes(tag)).length
		}))
		.sort((a, b) => b.count - a.count);
</script>

<section>
	<div class="container">
		<h1>Bookmarks</h1>
	</div>

	<Row size="small" area="top">
		<Block size="medium">
			<Constrain size="small">
				<p>A list of links I like, want to keep or share.</p>
			</Constrain>
		</Block>
	</Row>

	<!-- <Row size="small" area="top">
		<form action="">
			<fieldset on:change={handleChange}>
				<div class="overflow">
					<div class="overflow-list">
						<legend class="sr-only">Filter by category</legend>

						<input type="radio" name="tag" id={'all'} data-active={currentTag === 'all'} />
						<label for={'all'}>All ({bookmarks.length})</label>
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
	</Row> -->

	<Row size="small">
		<Block size="medium">
			<!-- Make a hover for each Bookmark. When hovering, show a radius of tags. -->

			<HoverFadeList type="ol">
				{#each filteredLinks as bookmark}
					<li>
						<PreviewForList
							url={bookmark.url}
							title={bookmark.label}
							isExternal={true}
							type="list"
						/>
					</li>
				{/each}
			</HoverFadeList>
		</Block>
	</Row>
</section>

<style>
	.container {
		overflow: hidden;
		max-width: 100vw;
	}

	h1 {
		margin: 0;

		/* Pull title up based on the vw, because the font-size is based on the vw. */
		margin-top: -3vw;
		padding: 0;
		font-family: var(--serif);
		font-size: 23.982vw;
		font-size: 23.982cqw;
		line-height: 1.2;
		text-align: center;

		/* font-family: var(--sans-serif);
		font-weight: var(--font-weight-normal);
		font-size: 49.816999999999986vw;
		transform: scale(1.1) translateX(-2%); */
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
		padding: 0 0.2rem 1rem;
	}

	legend {
		font-size: 14px;
	}

	input {
		opacity: 0;
		position: absolute;
	}

	label {
		position: relative;
		display: inline-block;
		margin-left: -2px;
		padding: 1em 1.1em;
		font-size: 14px;
		line-height: 1;
		text-decoration: none;
		white-space: nowrap;
		border: 2px solid black;
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
</style>
