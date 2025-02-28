<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import Code from '$lib/components/Code/index.svelte';

	const title = 'Utopia design system';
	const description =
		'<p>A copy (sort of) of the <a href="https://fresk.digital">fresk.digital</a> website with <a href="https://utopia.fyi/">Utopia</a> and the <a href="https://cube.fyi/">Cube CSS</a> methodology. Inspired by <a href="Andy Bell">this talk</a> of Andy Bell.</p> <p>All styles in the page below are first reset, then applied to ensure there are no project related styles.</p>';
</script>

<ExperimentItem {title} {description} showPageEffect={false}>
	<div class="experiment-body">
		<header class="flow region wrapper">
			<h2>Creating meaningful digital products, strategies and services for professionals</h2>
			<p>
				At fresk.digital we empower organisations to help their professional users work smarter with
				intuitive digital solutions tailored to their operational challenges.
			</p>
		</header>

		<section class="flow region wrapper">
			<h3>Cases</h3>

			<ul class="grid">
				<li>
					<article class="flow">
						<small>Case</small>
						<h4>NEN</h4>
						<p>
							Guiding customers through the complexity of standards by understanding their needs
						</p>
					</article>
				</li>
				<li>
					<article class="flow">
						<small>Case</small>
						<h4>Hertek</h4>
						<p>From business strategy to validated digital safety solutions</p>
					</article>
				</li>
				<li>
					<article class="flow">
						<small>Case</small>
						<h4>Rocsys</h4>
						<p>A human centred approach to a hands-free charging solution</p>
					</article>
				</li>
				<li>
					<article class="flow">
						<small>Article</small>
						<h4>Design</h4>
						<p>Behind the scenes of a service: how Service Blueprinting connects the dots</p>
					</article>
				</li>
				<li>
					<article class="flow">
						<small>Article</small>
						<h4>Design</h4>
						<p>
							From shadowing sessions to action points: Customer Journey Mapping at fresk.digital
						</p>
					</article>
				</li>
				<li>
					<article class="flow">
						<small>Article</small>
						<h4>Technology</h4>
						<p>
							How an Expert Review can identify pain points in your digital product; our work for
							NOC*NSF
						</p>
					</article>
				</li>
			</ul>
		</section>

		<section class="flow region wrapper">
			<h3>Clients</h3>

			<ul>
				<li>...</li>
			</ul>

			<p>
				Our clients are our partners, their goal is our goal. This helps us understand them well and
				at the same time bring them a fresh perspective on their challenges, so we can create the
				best solution.
			</p>
		</section>

		<section class="flow region wrapper" style="--wrapper-max-width: 80rem;">
			<h3>How we create meaningful digital products</h3>

			<div class="grid">
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
						We build the Minimum Meaningful Product that we shaped in close collaboration between
						our client and our multidisciplinary team. While we are working towards the launch, we
						guard the boundaries of our partnership and the product agreements we have made.
					</p>
					<a href="#">Learn how</a>
				</article>
				<article class="flow">
					<h4>Optimise & grow</h4>
					<p>
						We measure the Minimal Meaningful Product we have launched and learn from the
						interaction with users. This leads to key insights that we translate into concrete
						product optimisations that make the digital product more meaningful and help grow our
						clients business.
					</p>
					<a href="#">Learn how</a>
				</article>
			</div>
		</section>
	</div>
</ExperimentItem>

<Row>
	<Block size="small-medium">
		<article>
			<h2>Conclusion</h2>
			<p>
				I like it a lot. It kinda works the same as the CSS implementation at GRRR, but it prevents
				the duplication in your CSS. Resulting in a way smaller bundle.
			</p>
			<p>
				The mental model is also a bit different. Therefore, you will need less code to achieve the
				same result. And you focus on re-use instead of re-apply.
			</p>
			<p>
				There are more then enough options to tweak the things you need, without having to
				re-implement the total styling.
			</p>

			<h2>Open question(s)</h2>
			<p>
				The thing I'm wondering about is how you adjust (for instance) the <code
					>var(--region-space)</code
				>. If you have applied this class to an HTML element
			</p>
			<Code language="html" code={`<section class="region">...</section>`}></Code>
			<p>And you want to adjust the spacing, how do you do it?</p>

			<h3>1. Add an additional class</h3>
			<Code language="html" code={`<section class="region specific-name">...</section>`}></Code>
			<p>And update the <code>var(--region-space)</code> there?</p>
			<Code language="css" code={`.specific-name {  --region-space: 3rem;}`}></Code>

			<h3>2. Update the css variable as inline styles</h3>
			<Code
				language="html"
				code={`<section class="region specific-name" style="--region-space: var(--space-l);">...</section>`}
			></Code>

			<h3>3. Create utility classes for each version</h3>
			<Code language="html" code={`<section class="region region-l">...</section>`}></Code>

			<p>Not sure about this answer yet!</p>
		</article>
	</Block>
</Row>

<style lang="scss">
	@import './style.scss';
</style>
