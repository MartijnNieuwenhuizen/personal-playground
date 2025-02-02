<script>
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import Code from '$lib/components/Code/index.svelte';

	const cssExampleBad = `.some-element {
  background-color: var(--primary-color);
  top: 0;
  position: absolute;
  width: var(--toggle-size);
  transform: scale(1.29) translateX(0%);
  left: 0;
  height: var(--toggle-size);
  border-radius: 50px;
  content: "";
  transition: transform $ease-in-out $pace-quick, background-color $pace-page-transition ease-in-out;

  @include high-contrast {
    border: 2px solid var(--black);
    box-shadow: 0 0 0 1px var(--white);
  }
}`;
	const cssExampleGood = `.some-element {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: var(--toggle-size);
  height: var(--toggle-size);
  background-color: var(--primary-color);
  border-radius: 50px;
  transform: scale(1.29) translateX(0%);
  transition: transform $ease-in-out $pace-quick, background-color $pace-page-transition ease-in-out;

  @include high-contrast {
    border: 2px solid var(--black);
    box-shadow: 0 0 0 1px var(--white);
  }
}`;
	const cssExampleBest = `.some-element {
  content: "";

  position: absolute;
  top: 0;
  left: 0;

  width: var(--toggle-size);
  height: var(--toggle-size);

  background-color: var(--primary-color);
  border-radius: 50px;

  transform: scale(1.29) translateX(0%);
  transition: transform $ease-in-out $pace-quick, background-color $pace-page-transition ease-in-out;

  @include high-contrast {
    border: 2px solid var(--black);
    box-shadow: 0 0 0 1px var(--white);
  }
}`;
</script>

<article>
	<Block size="medium">
		<header>
			<h1>Enforcing a Consistent CSS Property Order with Stylelint</h1>
		</header>
	</Block>
	<Block size="small">
		<Row area="bottom" size="small">
			<section>
				<p>
					As developers, we have many tools to ensure our code is valid, properly formatted, and
					consistently written. However, the order in which things are declared is often overlooked.
				</p>
				<p>
					For example, you can declare all your variables at the top of your JavaScript/CSS files,
					or scatter them between other code. While both approaches might work, having a consistent
					structure across your files significantly improves <strong>readability</strong>
					and <strong>maintainability</strong>.
				</p>
				<p>
					The same principle applies to CSS. By enforcing a specific order for CSS property
					declarations within a selector, you always know where to find a specific property. This
					consistency makes your code easier to read and maintain.
				</p>
				<p>
					This can be done with Stylelint. It can enforce the property order and automatically fix
					this order for you.
				</p>
			</section>
		</Row>

		<section>
			<h2>Why Does Order Matter?</h2>
			<p>Let’s take a look at an example.</p>

			<Row area="bottom" size="small">
				<h3>Before</h3>
				<Code code={cssExampleBad} language="css" />
			</Row>
			<Row area="bottom" size="small">
				<h3>After</h3>
				<Code code={cssExampleGood} language="css" />
			</Row>
			<Row area="bottom" size="small">
				<h3>Adding Whitespace for Clarity</h3>
				<p>Personally, I also prefer adding whitespace between logical groups of properties:</p>
				<Code code={cssExampleBest} language="css" />
			</Row>

			<Row area="bottom" size="small">
				<p>
					What do you think of the difference? The second example is much easier to read, right? It
					easier to find the property you want to change.
				</p>
				<p>
					Imagine the CSS within every selector is always in the same structure and is grouped
					logically. Sounds good?
				</p>
			</Row>
		</section>

		<Row area="bottom" size="small">
			<section>
				<h2>The Benefits for Teams</h2>
				<p>
					While enforcing a standard for yourself is useful, the real value shines when applied to a <strong
						>team</strong
					>
					or a <strong>large codebase</strong>.
				</p>
				<ul>
					<li>Every developer adheres to the same structure.</li>
					<li>Consistency improves throughout the codebase.</li>
					<li>
						Code reviews become faster since reviewers don’t need to focus on the readabillity of
						the order.
					</li>
				</ul>
			</section>
		</Row>

		<section>
			<Row area="bottom" size="small">
				<h2>Getting Started with Stylelint</h2>
				<p>Let’s set it up!</p>

				<h3>1. Install Dependencies</h3>
				<p>Install the following dependencies:</p>
				<ul>
					<li>
						<a href="https://www.npmjs.com/package/stylelint">stylelint</a>:
						<code>npm install stylelint --save-dev</code>
					</li>
					<li>
						<a href="https://www.npmjs.com/package/stylelint-order">stylelint-order</a>:
						<code>npm install stylelint-order --save-dev</code>
					</li>
					<li>
						<a href="https://www.npmjs.com/package/stylelint-scss">stylelint-scss</a> (if you use
						SCSS):
						<code>npm install stylelint-scss --save-dev</code>
					</li>
				</ul>
			</Row>
			<Row area="bottom" size="small">
				<h3>2. Create a Stylelint Configuration</h3>
				<p>Create a <code>.stylelintrc.js</code> file and add your settings.</p>
			</Row>
			<Row area="bottom" size="small">
				<h3>3. Define the Property Order</h3>
				<p>
					Within the <code>rules</code> property, define an <code>"order/order"</code> property that
					expects an array. You can declare your own order or use one of the existing examples.
				</p>
				<p>
					There are examples that sort properties alphabetically (blegh), by type, etc. But, after a
					lot of research, none of these examples worked for us (the company I used to work for
					before). Therefore, we
					<a href="/gists/stylelint-property-order"
						>setup our own and shared it with the world to use as a new default</a
					>.
				</p>

				<p>
					The order is based on the impact the property can have. So, the most impactful properties
					are at the top. Just above that, are the mixins, so you can always overwrite them.
				</p>

				<p>
					When looking at properties that contain a long and shorthand option, we have put the
					shorthand at the top. So for `margin`, the list is:
				</p>
				<ul>
					<li>margin</li>
					<li>margin-block</li>
					<li>margin-block-start</li>
					<li>margin-block-end</li>
					<li>margin-inline</li>
					<li>margin-inline-start</li>
					<li>margin-inline-end</li>
					<li>margin-top</li>
					<li>margin-right</li>
					<li>margin-bottom</li>
					<li>margin-left</li>
				</ul>
				<p>This order ensures you can always overwrite the shorthand.</p>
			</Row>
		</section>

		<section>
			<Row area="bottom" size="small">
				<h2>Automating the Fix</h2>

				<h3>1. Add an Autofix Command</h3>
				<p>
					Add this command to your <code>package.json</code>. You can use it in your pre-commit
					hooks, CI etc.
				</p>
				<Code
					code={`"scripts": {
  "lint:css": "stylelint '**/*.scss' --fix"
}`}
					language="json"
				/>
			</Row>
			<Row area="bottom" size="small">
				<h3>2. Enable Editor Fixes on Save</h3>
				<p>
					If you use VS Code, you can configure it to fix the property order automatically when a
					file is saved. Add the following to your <code>settings.json</code>:
				</p>
				<Code
					code={`{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "stylelint.validate": ["css", "scss", "less"],
  "stylelint.autoFixOnSave": true
}
  `}
					language="json"
				/>
			</Row>
		</section>

		<footer>
			<Row area="bottom" size="small">
				<h2>Conclusion</h2>
				<p>
					Enforcing a consistent CSS property order improves code readability, maintainability, and
					collaboration within teams. With Stylelint, you can implement this standard
					effortlessly—and even automate the process to save time and ensure consistency.
				</p>
			</Row>
			<Row area="bottom" size="small">
				<h3>Special thanks</h3>
				<p>
					A special thanks to <a href="https://michele.nl">Michèle</a>, for creating this order
					specification together.
				</p>

				<h3>AI</h3>
				<p>
					This article was written by me and refined with the help of ChatGPT, focusing on
					correcting spelling errors and enhancing sentence structure for better clarity and flow.
				</p>
			</Row>
		</footer>
	</Block>
</article>

<style lang="scss">
</style>
