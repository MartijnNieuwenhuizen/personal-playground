<script>
	import Block from '$lib/components/layout/Block/index.svelte';
	import Row from '$lib/components/layout/Row/index.svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import BlurredLoadingImage from '$lib/components/BlurredLoadingImage/index.svelte';

	const title = 'Loading image from blurred version';
	const description =
		'The goal is to start with a blurred version of an image and then show the full version once it is loaded and in view.';
</script>

<ExperimentItem {title} {description} showPageEffect={false}>
	<Row size="small">
		<Block size="small">
			<h2>Some content</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore cum, tenetur
				reprehenderit, similique repellat dolorem aliquam placeat perferendis natus, ad nulla? Quae
				praesentium reiciendis deserunt error labore mollitia nulla?
			</p>

			<Row size="small">
				<BlurredLoadingImage
					sharpSrc="/images/page-transition/forrest.webp"
					blurredSrc="/images/page-transition/forrest-small.jpg"
				/>
			</Row>

			<h2>Some content</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore cum, tenetur
				reprehenderit, similique repellat dolorem aliquam placeat perferendis natus, ad nulla? Quae
				praesentium reiciendis deserunt error labore mollitia nulla?
			</p>

			<Row size="small">
				<BlurredLoadingImage
					sharpSrc="/images/page-transition/leaves.webp"
					blurredSrc="/images/page-transition/leaves-small.jpg"
				/>
			</Row>

			<h2>Some content</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore cum, tenetur
				reprehenderit, similique repellat dolorem aliquam placeat perferendis natus, ad nulla? Quae
				praesentium reiciendis deserunt error labore mollitia nulla?
			</p>

			<Row size="small">
				<BlurredLoadingImage
					sharpSrc="/images/page-transition/sea.webp"
					blurredSrc="/images/page-transition/sea-small.jpg"
				/>
			</Row>
		</Block>
	</Row>
</ExperimentItem>
