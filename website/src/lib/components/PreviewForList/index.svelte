<script>
	/** @type {string} */
	export let url;
	/** @type {string} */
	export let title;
	/** @type {string} */
	export let date = '';
	/** @type {boolean} */
	export let isExternal = false;
	/** @type {'h2' | 'h3' | 'h4'} */
	export let headingType = 'h3';
	/** @type {'box' | 'list' | 'clear'} */
	export let type = 'box';
	/** @type {boolean} */
	export let noBottom = false;
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
		align-items: center;
		grid-column: 1 / -1;
		margin-top: -2px;
	}

	h2,
	h3,
	h4 {
		@include heading-3;
		margin: 0;
		padding: 1rem;
	}

	a {
		@include expand-clickable-area;
		text-decoration: none;
	}

	a:focus {
		outline: none;
		text-decoration: underline;
	}

	.date {
		padding: 0 1rem;
	}

	a span {
		display: inline-block;
		transform: rotate(90deg);
		padding-left: 0.5rem;
		font-size: 1rem;
		line-height: 1;
		vertical-align: top;
	}

	[data-type='box'] {
		border: 2px solid black;
	}
	[data-type='box'] h2,
	[data-type='box'] h3,
	[data-type='box'] h4 {
		border-right: 2px solid black;
	}

	[data-type='list'][data-no-bottom='false'] {
		border-bottom: 2px solid black;
	}
</style>
