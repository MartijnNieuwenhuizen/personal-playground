<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	const title = 'Grid auto fit and auto fill';
	const description =
		'See the difference between grid-auto-fit and grid-auto-fill, so you can remind yourself of the difference.';
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<section class="region flow">
		<h2>Auto fit</h2>
		<p>Try to spread the items in the grid as wide as possible.</p>

		<div class="grid grid-auto-fit">
			<article class="flow">
				<h4>Discover & strategise</h4>
				<p>
					We define the dot on the horizon and shape the Minimum Meaningful Product we need to
					create in order to deploy and learn as soon as possible. This is fueled by understanding
					user needs, desired business outcomes and the technical landscape.
				</p>
				<a href="#">Learn how</a>
			</article>
			<article class="flow">
				<h4>Create & launch</h4>
				<p>
					We build the Minimum Meaningful Product that we shaped in close collaboration between our
					client and our multidisciplinary team. While we are working towards the launch, we guard
					the boundaries of our partnership and the product agreements we have made.
				</p>
				<a href="#">Learn how</a>
			</article>
			<article class="flow">
				<h4>Optimise & grow</h4>
				<p>
					We measure the Minimal Meaningful Product we have launched and learn from the interaction
					with users. This leads to key insights that we translate into concrete product
					optimisations that make the digital product more meaningful and help grow our clients
					business.
				</p>
				<a href="#">Learn how</a>
			</article>
		</div>
	</section>

	<section class="region flow">
		<h2>Auto fill</h2>
		<p>Try to fit as many grid-items as possible.</p>
		<div class="grid grid-auto-fill">
			<article class="flow">
				<h4>Discover & strategise</h4>
				<p>
					We define the dot on the horizon and shape the Minimum Meaningful Product we need to
					create in order to deploy and learn as soon as possible. This is fueled by understanding
					user needs, desired business outcomes and the technical landscape.
				</p>
				<a href="#">Learn how</a>
			</article>
			<article class="flow">
				<h4>Create & launch</h4>
				<p>
					We build the Minimum Meaningful Product that we shaped in close collaboration between our
					client and our multidisciplinary team. While we are working towards the launch, we guard
					the boundaries of our partnership and the product agreements we have made.
				</p>
				<a href="#">Learn how</a>
			</article>
			<article class="flow">
				<h4>Optimise & grow</h4>
				<p>
					We measure the Minimal Meaningful Product we have launched and learn from the interaction
					with users. This leads to key insights that we translate into concrete product
					optimisations that make the digital product more meaningful and help grow our clients
					business.
				</p>
				<a href="#">Learn how</a>
			</article>
		</div>
	</section>
</ExperimentItem>

<style lang="scss">
	.flow > * {
		margin-bottom: 0;
	}
	.flow > * + * {
		margin-top: var(--flow-space, 1rem);
		margin-bottom: 0;
	}
	.region {
		padding-top: var(--region-space, var(--space-l-2xl));
		padding-bottom: var(--region-space, var(--space-l-2xl));
	}
	.wrapper {
		--gutter: var(--space-l);
		margin-left: auto;
		margin-right: auto;
		max-width: var(--wrapper-max-width, 65rem);
		padding-left: var(--gutter);
		padding-right: var(--gutter);
		position: relative;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(
			var(--grid-placement, auto-fit),
			minmax(var(--grid-min-item-size, 16rem), 1fr)
		);
		gap: var(--gutter, var(--space-s-l));

		list-style: none;
	}
	.grid-auto-fit {
		--grid-placement: auto-fit;
	}
	.grid-auto-fill {
		--grid-placement: auto-fill;
	}
</style>
