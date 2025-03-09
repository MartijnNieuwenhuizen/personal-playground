<script>
	import { onNavigate } from '$app/navigation';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import Code from '$lib/components/Code/index.svelte';
	import { onMount } from 'svelte';

	const title = 'Card to Header page transition';
	const description =
		'A simple page transition where the title and image from a card move to the header of the page.';

	let cards = [
		{
			title: 'Forrest',
			image: '/images/page-transition/forrest.webp',
			url: '/experiments/card-to-header-page-transition/forrest',
			color: '#656769'
		},
		{
			title: 'Sea',
			image: '/images/page-transition/sea.webp',
			url: '/experiments/card-to-header-page-transition/sea',
			color: '#81C4EE'
		},
		{
			title: 'Leaves',
			image: '/images/page-transition/leaves.webp',
			url: '/experiments/card-to-header-page-transition/leaves',
			color: '#E6D5A9'
		}
	];

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	/** @type {HTMLVideoElement} */
	let videoElementAttempt = $state();
	/** @type {HTMLVideoElement} */
	let videoElementGoal = $state();

	onMount(() => {
		videoElementAttempt.playbackRate = 0.5;
		videoElementGoal.playbackRate = 0.5;
	});

	let cssCodeGoal = `h1 span:nth-of-type(1) {
  transform: translateY(100%) rotate(3deg);
  animation: fade-in 0.2s #{0.1 + ($i * 0.05)}s ease-out forwards;
}`;
	let cssCodeAttempt = `html::view-transition-new(title-1) {
  transform: translateY(100%) rotate(3deg);
  animation: fade-in 0.2s #{0.1 + ($i * 0.05)}s ease-out forwards;
}

h1 span:nth-of-type() {
  view-transition-name: title-1;
}`;
</script>

<ExperimentItem {title} {description} showPageEffect={false}>
	<Row>
		<Block>
			<a href="#explanation">👇 Go straight to the article/explanation</a>
			<h2 id="demo">Demo</h2>
			<ul class="cards">
				{#each cards as card}
					<li style={`--background-color: ${card.color}`}>
						<figure>
							<img
								src={card.image}
								alt="Page 1"
								style={`view-transition-name: image-${card.title.toLowerCase()};`}
							/>
							<figcaption style={`view-transition-name: color-${card.title.toLowerCase()};`}>
								<span>{card.title}</span>
							</figcaption>
						</figure>
						<a href={card.url}><span class="sr-only">{card.title}</span></a>
					</li>
				{/each}
			</ul>
		</Block>
	</Row>

	<Row>
		<Block size="small-medium">
			<h2 id="explanation">Explanation</h2>
			<p>
				I'm trying to create the following effect when you click on one of the cards and move to the
				new page.
			</p>

			<ol>
				<li>
					Image animation - Let the image move from the old position to the new position (this is
					the thing that should relate the old and the new)
				</li>
				<li>
					Custom animation - Create a custom animation for the title (no relation with the title of
					the card)
				</li>
				<li>Color animation - Animation the background color (not done yet)</li>
			</ol>

			<h2>1. Image animation</h2>
			<p>
				If your browser supports <code>view-transition</code>s, this isn't very hard. This
				experiment will not focus on fallbacks. I see this as an enhancement, no need to have it in
				IE11 as well.
			</p>

			<p>
				First, add the <code>view-transition-name</code> to the image in the cards list and the image
				on the new page. The value of this property should be the same on both locations, but unique
				for each card/page. Because the cards are rendered inside a loop, I use inline styles to crate
				unique names based on the title:
			</p>
			<Code
				code="{'<img style={`view-transition-name: image-${card.title.toLowerCase()};`/>'}}"
				language="css"
			/>

			<p>This will automatically move the image from the old position to the new position! Yeey!</p>

			<h2>2. Custom animation</h2>
			<p>
				Now, let's animate the title. But, I don't want this title to animate everytime (just like
				you would place an <code>animation</code> property on an element). It should only animate when
				there is a page-transition, not a page-refresh.
			</p>
			<p>This is the animation that I'm trying to make. The letter appear from behind something.</p>
			<video
				autoplay={true}
				muted={true}
				playsinline={true}
				loop={true}
				src="/videos/page-transition/goal.mov"
				bind:this={videoElementGoal}
			></video>
			<p>The code would look something like this (and then repeat for every letter).</p>
			<Code code={cssCodeGoal} language="css" />

			<p>But I want something like this:</p>
			<Code code={cssCodeAttempt} language="css" />

			<p>
				By using <code>html::view-transition-new</code> and <code>view-transition-name</code>, you
				ensure that the animation is only executed for a page transition and not just on load!
			</p>
			<p>Unfortunately, the effect of this code looks like this</p>
			<video
				autoplay={true}
				muted={true}
				playsinline={true}
				loop={true}
				src="/videos/page-transition/attempt.mov"
				bind:this={videoElementAttempt}
			></video>
			<p>
				The letters in this animation don't appear from behind something, they just move up! But
				why?
			</p>
			<p>
				Nic whore <a href="https://www.nicchan.me/blog/view-transitions-and-stacking-context/"
					>a post</a
				>
				about this. In short, view-transtions work with screenshots. The browser make a screenshot of
				the current page and on of the new page. Then it animates the elements from the old to the new
				position. But the <code>element</code> here isn't a HTML element, but an element of the
				screenshot. Meaning, you don't have all the nice CSS things that we're use-to like
				<code>stacking-context</code>. This means that you can move elements or make them appear
				with `opacity`. But you cannot hide something behind an element and let it appear.
			</p>
			<p>as soon as I found a way, I will update this post.</p>

			<h2>3. Color animation</h2>
			<p>
				This sounded so simple, but here, you can also see the issue with the screenshot and
				stacking-context.
			</p>
			<p>
				First of all, it's not possible the animate a background-color when you use <code
					>html::view-transition-new</code
				>
				as a selector. The solution is to create an element for the background (blegh) and animate this.
				Afcourse, you cannot animate the <code>background-color</code> of this as well, but you can
				animate the <code>opacity</code>! Due to the stacking-context issue, the animation isn't
				very pretty. <a href="#demo">☝️ Take a look yourself here</a>!
			</p>
		</Block>
	</Row>
</ExperimentItem>

<style lang="scss">
	// :global(view-transition-group(root)) {
	// 	animation-duration: 2s;
	// }

	h2 {
		@include bp-min(medium) {
			max-width: 75%;
		}
	}

	.cards {
		display: grid;
		grid-gap: 1rem;
		margin: 0;
		padding: 0;
		list-style: none;
		text-align: center;

		@include bp-min(small) {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
	}

	.cards li {
		position: relative;
	}

	.cards img {
		width: 100%;
	}

	.cards figcaption {
		@include heading-3;

		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		padding: 1rem;
		background-color: var(--background-color);
		transform: skewX(-10deg) rotate(-10deg) translateY(-2rem);
	}

	.cards span {
		display: block;
		transition: transform 0.2s ease-out;
	}

	.cards li:hover figcaption span {
		text-decoration: underline;
		transform: skewX(10deg);
	}

	.cards a {
		z-index: 2;
	}

	.cards a::after {
		content: '';
		position: absolute;
		inset: 0;
	}
</style>
