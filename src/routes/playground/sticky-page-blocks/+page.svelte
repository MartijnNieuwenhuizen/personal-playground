<script lang="ts">
	import Block from '../../../components/layout/block/index.svelte';
	import Row from '../../../components/layout/row/index.svelte';
	import Constrain from '../../../components/layout/constrain/index.svelte';
	import StickyPageBlock from '../../../components/modules/StickyPageBlock/index.svelte';
	import Page from '../../../components/layout/page/index.svelte';

	const title = 'This is a sticky page block';
	const text = `<p>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
amet..", comes from a line in section 1.10.32.
</p>
<p>
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
also reproduced in their exact original form, accompanied by English versions from the 1914
translation by H. Rackham.
</p>
<p>
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
also reproduced in their exact original form, accompanied by English versions from the 1914
translation by H. Rackham.
</p>`;
</script>

<Block size="medium">
	<Row size="medium">
		<Constrain size="small">
			<h1 class="sticky-page-block__title">Sticky page blocks</h1>
			<p>
				A classic implementation of this will create sticky blocks that can only be a maximum of
				100vh. Not very resilient to dynamic content. This page shows two implementations. The first
				is the limited version and the second is a more resilient version that requires a bit of JS
				to make it work properly.
			</p>
		</Constrain>
	</Row>
</Block>

<Block size="medium">
	<Row size="medium" area="bottom">
		<Constrain size="small">
			<h2>Implementation 1 (panes with a max height of 100vh)</h2>
			<p>
				Each pane here is `position: sticky;` and the `top` value is `0px`;. Meaning, the code
				doesn't take the content of the pane into account. If it's higher than the viewport, the
				content will never be visible.
			</p>
		</Constrain>
	</Row>
</Block>

<div class="sticky-page__sticky-container">
	<StickyPageBlock enhanceStickiness={false} theme="#fbf8ccff" {title} {text} />
	<StickyPageBlock enhanceStickiness={false} theme="#f1c0e8ff" {title} {text} />
	<StickyPageBlock enhanceStickiness={false} theme="#a3c4f3ff" {title} {text} />
	<StickyPageBlock enhanceStickiness={false} theme="#98f5e1ff" {title} {text} />
</div>

<Block size="medium">
	<Row size="huge">
		<Constrain size="small">
			<h2>Implementation 2 (panes that stop at the bottom of the pane)</h2>
			<p>
				These panes are `position: sticky;` as well. But, the `top` value for each pane is
				calculated with JS. The calculation is: `windowHeight - elementHeight` (and then formatted
				to a px value). This is only the case if the `elementHeight` is larger than the
				`windowHeight`. Otherwise the value defaults to `0px`.
			</p>
		</Constrain>
	</Row>
</Block>

<div class="sticky-page__sticky-container">
	<StickyPageBlock theme="#fbf8ccff" {title} {text} />
	<StickyPageBlock theme="#ffcfd2ff" {title} {text} />
	<StickyPageBlock theme="#f1c0e8ff" {title} {text} />
	<StickyPageBlock theme="#cfbaf0ff" {title} {text} />
	<StickyPageBlock theme="#a3c4f3ff" {title} {text} />
	<StickyPageBlock theme="#90dbf4ff" {title} {text} />
	<StickyPageBlock theme="#8eecf5ff" {title} {text} />
	<StickyPageBlock theme="#98f5e1ff" {title} {text} />
</div>

<Block size="medium">
	<Row size="huge">
		<Constrain size="small">
			<h2>Conclusion</h2>
			<p>
				Solution 2 is way more resilient for any type of content than solution one. It requires just
				a hint of JS and can be used as Progressive Enhanced solution as long as you only apply the
				<code>position: sticky;</code> with JS as well. If you know a 100% CSS solution, let me know!
			</p>
		</Constrain>
	</Row>
</Block>

<style lang="scss">
	@import './style.scss';
</style>
