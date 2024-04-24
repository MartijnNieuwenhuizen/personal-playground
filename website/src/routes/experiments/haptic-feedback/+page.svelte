<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	const title = 'Haptic feedback';
	const description = 'Create haptic feedback.';

	const handleClick = () => {
		navigator.vibrate([200, 100, 200]);
		console.log('navigator: ', navigator);
	};

	const downloadAsWebApp = () => {};
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<h2>Haptic feedback</h2>
	<p>
		I would like to create some Haptic Feedback when you interact with a slider, or something like
		that. My MacBook's trackpad can give this feedback. Phones can also give this feedback. Let's
		see if we can use that 😁.
	</p>

	<h3>Experiment 1 - Haptic feedback on load</h3>
	<p>This isn't possible, the user needs to interact with the page first. Makes sense!</p>

	<h3>Experiment 2 - Haptic feedback on click</h3>
	<button on:click={handleClick}>Click me for some Haptic's</button>

	<p>This doesn't work, also not on a mobile phone. I don't get any error's though.</p>

	<h3>Experiment 3 - Haptic feedback with a WebApp</h3>
	<p>
		Maybe, it only works within a WebApp (progressive web app). It would make sense, a WebApp is
		more "App-like" then a regular website. And the user needs to specifically download it before
		you can use it.
		<br />
		That way, the user isn't going bonkers from Haptic Feedback from every website they visit. You could
		go nuts with this as a Developer.
		<br />
		Let's give it a go
	</p>

	<h3>Conclusion</h3>
	<p>
		It's not a Progressive Web App feature, it's simply not supported on iOS and OSX. Therefore, I
		cannot test this feature myself.
	</p>
	<button on:click={downloadAsWebApp}>Download this site as WebApp</button>
</ExperimentItem>

<style lang="scss">
</style>
