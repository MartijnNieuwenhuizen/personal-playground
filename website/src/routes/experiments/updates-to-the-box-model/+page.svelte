<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	import Row from '$lib/components/layout/Row/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';

	const title = 'Updates to the box model';
	const description = '';

	$: showPaddingInline = true;
	$: showPaddingInlineStart = true;
	$: showPaddingInlineEnd = true;

	$: showPaddingBlock = true;
	$: showPaddingBlockStart = true;
	$: showPaddingBlockEnd = true;

	$: showMarginInline = true;
	$: showMarginInlineStart = true;
	$: showMarginInlineEnd = true;

	$: showMarginBlock = true;
	$: showMarginBlockStart = true;
	$: showMarginBlockEnd = true;
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<Block size="small">
		<h2>Using Margin, Border and Padding</h2>

		<div class="old-way">
			<div class="old-way-margin">
				<p>Margin</p>
				<div class="old-way-border">
					<p>border</p>
					<div class="old-way-padding">
						<p>padding</p>
						<div class="old-way-content">
							<p>Content</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Row size="small">
			<p>
				This is the (for a long long time) known known box model using <code>Margin</code>,
				<code>Border</code>
				and <code>Padding</code>
			</p>

			<h2>Updates to the box model</h2>
			<p>But right now, there are some new properties that have influence on the box-model.</p>
			<ul>
				<li><code>margin-block</code></li>
				<li><code>margin-block-start</code></li>
				<li><code>margin-block-end</code></li>
			</ul>
			<ul>
				<li><code>margin-inline</code></li>
				<li><code>margin-inline-start</code></li>
				<li><code>margin-inline-end</code></li>
			</ul>
			<ul>
				<li><code>padding-block</code></li>
				<li><code>padding-block-start</code></li>
				<li><code>padding-block-end</code></li>
			</ul>
			<ul>
				<li><code>padding-inline</code></li>
				<li><code>padding-inline-start</code></li>
				<li><code>padding-inline-end</code></li>
			</ul>

			<section>
				<h2>margin-block</h2>
				<form action="">
					<input type="checkbox" id="margin-block" bind:checked={showMarginBlock} />
					<label for="margin-block">Toggle</label>
				</form>
				<div class="margin-block" data-enable={showMarginBlock} data-location="both">
					<div class="margin-block-inner">
						<p>margin-block</p>
					</div>
				</div>

				<form action="">
					<input type="checkbox" id="margin-block-start" bind:checked={showMarginBlockStart} />
					<label for="margin-block-start">Toggle</label>
				</form>
				<div class="margin-block" data-enable={showMarginBlockStart} data-location="start">
					<div class="margin-block-inner">
						<p>margin-block-start</p>
					</div>
				</div>

				<form action="">
					<input type="checkbox" id="margin-block-end" bind:checked={showMarginBlockEnd} />
					<label for="margin-block-end">Toggle</label>
				</form>
				<div class="margin-block" data-enable={showMarginBlockEnd} data-location="end">
					<div class="margin-block-inner">
						<p>margin-block-end</p>
					</div>
				</div>
			</section>

			<section>
				<h2>margin-inline</h2>
				<form action="">
					<input type="checkbox" id="margin-inline" bind:checked={showMarginInline} />
					<label for="margin-inline">Toggle</label>
				</form>
				<div class="margin-inline" data-enable={showMarginInline} data-location="both">
					<div class="margin-inline-inner">
						<p>margin-inline</p>
					</div>
				</div>

				<form action="">
					<input type="checkbox" id="margin-inline-start" bind:checked={showMarginInlineStart} />
					<label for="margin-inline-start">Toggle</label>
				</form>
				<div class="margin-inline" data-enable={showMarginInlineStart} data-location="start">
					<div class="margin-inline-inner">
						<p>margin-inline-start</p>
					</div>
				</div>

				<form action="">
					<input type="checkbox" id="margin-inline-end" bind:checked={showMarginInlineEnd} />
					<label for="margin-inline-end">Toggle</label>
				</form>
				<div class="margin-inline" data-enable={showMarginInlineEnd} data-location="end">
					<div class="margin-inline-inner">
						<p>margin-inline-end</p>
					</div>
				</div>
			</section>

			<section>
				<h2>padding-block</h2>
				<form action="">
					<input type="checkbox" id="padding-block" bind:checked={showPaddingBlock} />
					<label for="padding-block">Toggle</label>
				</form>
				<div class="padding-block" data-enable={showPaddingBlock} data-location="both">
					<div class="padding-block-inner">
						<p>padding-block</p>
					</div>
				</div>

				<form action="">
					<input type="checkbox" id="padding-block-start" bind:checked={showPaddingBlockStart} />
					<label for="padding-block-start">Toggle</label>
				</form>
				<div class="padding-block" data-enable={showPaddingBlockStart} data-location="start">
					<div class="padding-block-inner">
						<p>padding-block-start</p>
					</div>
				</div>

				<form action="">
					<input type="checkbox" id="padding-block-end" bind:checked={showPaddingBlockEnd} />
					<label for="padding-block-end">Toggle</label>
				</form>
				<div class="padding-block" data-enable={showPaddingBlockEnd} data-location="end">
					<div class="padding-block-inner">
						<p>padding-block-end</p>
					</div>
				</div>
			</section>

			<section>
				<h2>padding-inline</h2>
				<form action="">
					<input type="checkbox" id="padding-inline" bind:checked={showPaddingInline} />
					<label for="padding-inline">Toggle</label>
				</form>
				<div class="padding-inline" data-enable={showPaddingInline} data-location="both">
					<div class="padding-inline-inner">
						<p>padding-inline</p>
					</div>
				</div>

				<form action="">
					<input type="checkbox" id="padding-inline-start" bind:checked={showPaddingInlineStart} />
					<label for="padding-inline-start">Toggle</label>
				</form>
				<div class="padding-inline" data-enable={showPaddingInlineStart} data-location="start">
					<div class="padding-inline-inner">
						<p>padding-inline-start</p>
					</div>
				</div>

				<form action="">
					<input type="checkbox" id="padding-inline-end" bind:checked={showPaddingInlineEnd} />
					<label for="padding-inline-end">Toggle</label>
				</form>
				<div class="padding-inline" data-enable={showPaddingInlineEnd} data-location="end">
					<div class="padding-inline-inner">
						<p>padding-inline-end</p>
					</div>
				</div>
			</section>
		</Row>
	</Block>
</ExperimentItem>

<style lang="scss">
	/**
	 * Old way
	 */
	.old-way {
		--padding: 1rem 3rem 3rem 3rem;
		--border-radius: 15px;

		background-color: #f7cca1;
		padding: var(--padding);
		border-radius: var(--border-radius);
	}
	.old-way-border {
		background-color: #fbdc9e;
		padding: var(--padding);
		border-radius: var(--border-radius);
	}
	.old-way-padding {
		background-color: #c4ce8d;
		padding: var(--padding);
		border-radius: var(--border-radius);
	}
	.old-way-content {
		background-color: #8db6c1;
		padding: 1rem 1rem 0 1rem;
		border-radius: var(--border-radius);
	}
	.old-way p {
		text-align: center;
		transform: translateY(-25%);
	}

	p {
		margin: 0;
		padding: 0;
	}

	/**
	 * Padding-inline
	 */
	.padding-inline {
		--theme-color: #f7cca1;
		padding-bottom: 1rem;
	}
	.padding-inline-inner {
		border: 5px solid darkslategrey;
		background: repeating-linear-gradient(
			45deg,
			var(--theme-color),
			var(--theme-color) 10px,
			white 10px,
			white 20px
		);
	}
	.padding-inline-inner p {
		padding: 0.5rem 1rem;
		background-color: #8db6c1;
	}
	.padding-inline[data-enable='true'][data-location='both'] .padding-inline-inner {
		padding-inline: 2rem;
	}
	.padding-inline[data-enable='true'][data-location='start'] .padding-inline-inner {
		padding-inline-start: 2rem;
	}
	.padding-inline[data-enable='true'][data-location='end'] .padding-inline-inner {
		padding-inline-end: 2rem;
	}

	/**
	 * Padding-block
	 */
	.padding-block {
		--theme-color: #f7cca1;
		padding-bottom: 1rem;
	}
	.padding-block-inner {
		border: 5px solid darkslategrey;
		background: repeating-linear-gradient(
			45deg,
			var(--theme-color),
			var(--theme-color) 10px,
			white 10px,
			white 20px
		);
	}
	.padding-block-inner p {
		padding: 0.5rem 1rem;
		background-color: #8db6c1;
	}
	.padding-block[data-enable='true'][data-location='both'] .padding-block-inner {
		padding-block: 2rem;
	}
	.padding-block[data-enable='true'][data-location='start'] .padding-block-inner {
		padding-block-start: 2rem;
	}
	.padding-block[data-enable='true'][data-location='end'] .padding-block-inner {
		padding-block-end: 2rem;
	}

	/**
	 * Margin-inline
	 */
	.margin-inline {
		--theme-color: #f7cca1;
		margin-bottom: 1rem;
		background: repeating-linear-gradient(
			45deg,
			var(--theme-color),
			var(--theme-color) 10px,
			white 10px,
			white 20px
		);
	}
	.margin-inline-inner {
		border: 5px solid darkslategrey;
	}
	.margin-inline-inner p {
		padding: 0.5rem 1rem;
		background-color: #8db6c1;
	}
	.margin-inline[data-enable='true'][data-location='both'] .margin-inline-inner {
		margin-inline: 2rem;
	}
	.margin-inline[data-enable='true'][data-location='start'] .margin-inline-inner {
		margin-inline-start: 2rem;
	}
	.margin-inline[data-enable='true'][data-location='end'] .margin-inline-inner {
		margin-inline-end: 2rem;
	}

	/**
	 * Margin-block
	 */
	.margin-block {
		--theme-color: #f7cca1;
		margin-bottom: 1rem;
		border: 1px solid white;
		background: repeating-linear-gradient(
			45deg,
			var(--theme-color),
			var(--theme-color) 10px,
			white 10px,
			white 20px
		);
	}
	.margin-block-inner {
		border: 5px solid darkslategrey;
	}
	.margin-block-inner p {
		padding: 0.5rem 1rem;
		background-color: #8db6c1;
	}
	.margin-block[data-enable='true'][data-location='both'] .margin-block-inner {
		margin-block: 2rem;
	}
	.margin-block[data-enable='true'][data-location='start'] .margin-block-inner {
		margin-block-start: 2rem;
	}
	.margin-block[data-enable='true'][data-location='end'] .margin-block-inner {
		margin-block-end: 2rem;
	}
</style>
