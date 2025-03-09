<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} url
	 * @property {string} title
	 * @property {string} [date]
	 * @property {boolean} [isExternal]
	 * @property {'h2' | 'h3' | 'h4'} [headingType]
	 * @property {'box' | 'list' | 'clear'} [type]
	 * @property {boolean} [noBottom]
	 */

	/** @type {Props} */
	let {
		url,
		title,
		date = '',
		isExternal = false,
		headingType = 'h3',
		type = 'box',
		noBottom = false
	} = $props();
</script>

<div data-type={type} data-no-bottom={noBottom}>
	<a href={url}>
		{#if headingType === 'h2'}<h2>
				{title}
				{#if isExternal}<span>↖︎</span>{/if}
			</h2>{/if}
		{#if headingType === 'h3'}<h3>
				{title}
				{#if isExternal}<span>↖︎</span>{/if}
			</h3>{/if}
		{#if headingType === 'h4'}<h4>
				{title}
				{#if isExternal}<span>↖︎</span>{/if}
			</h4>{/if}
	</a>

	{#if date}
		<span class="date">{date}</span>
	{/if}
</div>

<style lang="scss">
	div {
		position: relative;
		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1 / -1;
		align-items: center;
		margin-top: -2px;
		container-type: block;
	}

	h2,
	h3,
	h4 {
		@include heading-3;

		margin: 0;
		padding: 1rem 0;
	}

	a {
		@include expand-clickable-area;

		text-decoration: none;
	}

	a:focus {
		text-decoration: underline;
		outline: none;
	}

	.date {
		@include body-4;

		@container (min-width: 500px) {
			display: block;
		}

		display: none;
		padding: 0 1rem;
	}

	a span {
		display: inline-block;
		vertical-align: top;
		padding-left: 0.5rem;
		font-size: 1rem;
		line-height: 1;
		transform: rotate(90deg);
	}

	[data-type='box'] {
		border: 2px solid black;
	}

	[data-type='box'] h2,
	[data-type='box'] h3,
	[data-type='box'] h4 {
		@container (min-width: 500px) {
			border-right: 2px solid black;
		}

		padding: 1rem;
	}

	[data-type='list'][data-no-bottom='false'] {
		border-bottom: 2px solid black;
	}

	[data-type='clear'] h2,
	[data-type='clear'] h3,
	[data-type='clear'] h4 {
		padding: 0.5rem 0;
	}
</style>
