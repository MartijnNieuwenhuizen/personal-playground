<script>
	/** @type {string} */
	export let url;
	/** @type {string} */
	export let title;
	/** @type {string} */
	export let date;
	/** @type {boolean} */
	export let isExternal = false;
	/** @type {'h2' | 'h3' | 'h4'} */
	export let headingType = 'h3';
</script>

<div>
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

	<span class="date">{date}</span>
</div>

<style lang="scss">
	div {
		position: relative;
		display: grid;
		grid-template-columns: subgrid;
		align-items: center;
		grid-column: 1 / -1;
		border: 2px solid black;
		margin-top: -2px;
	}

	h2,
	h3,
	h4 {
		@include heading-3;
		margin: 0;
		padding: 1rem;
		border-right: 2px solid black;
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
</style>
