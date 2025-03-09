<script>
	import tags from './tags';

	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import Constrain from '$lib/components/layout/Constrain/index.svelte';
	import PreviewForList from '$lib/components/PreviewForList/index.svelte';
	import HoverFadeList from '$lib/components/HoverFadeList/index.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {import('./$types').PageData} data
	 */

	/** @type {Props} */
	let { data } = $props();

	let currentTag = $state('all');

	let filteredExperiments = $derived(
		data.experiments.filter((experiment) => {
			if (currentTag === 'all') return true;
			return experiment.tags.includes(currentTag);
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
			label: tags[tag],
			count: data.experiments.filter((item) => item.tags.includes(tag)).length
		}))
		.sort((a, b) => b.count - a.count);
</script>

<section data-current-tag={currentTag}>
	<div class="container">
		<h1>Experiments</h1>
	</div>

	<Row size="medium">
		<Block size="medium">
			<Constrain size="small">
				<p>
					Throughout the day/week, you will need to try a lot of things. And it's important to get
					feedback as soon as possible in your workflow. This is what I use these experiments for:
					Isolated tests, ideas. Some will be nice to look at, some will be boring.
				</p>
			</Constrain>
		</Block>

		<Row size="small" area="top">
			<form action="">
				<fieldset onchange={handleChange}>
					<div class="overflow">
						<div class="overflow-list">
							<legend class="sr-only">Filter by category</legend>

							<input type="radio" name="tag" id={'all'} data-active={currentTag === 'all'} />
							<label for={'all'}>All ({data.experiments.length})</label>
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
			<h2 class="sr-only">Experiments</h2>

			<HoverFadeList>
				{#each filteredExperiments as link}
					<li>
						<PreviewForList url={link.url} title={link.label} date={link.date} />
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
		padding: 0;
		font-family: var(--serif);
		font-size: 20.982000000000056vw;
		font-size: 20.982000000000056cqw;
		line-height: 1.2;
		text-align: center;

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

	.overflow-list:hover label:hover,
	.overflow-list:hover input:focus + label {
		opacity: 1 !important;
		box-shadow: inset 0 0 0 1px black;
	}

	.overflow-list:hover input:not([data-active='true']) + label {
		opacity: 0.5;
	}
</style>
