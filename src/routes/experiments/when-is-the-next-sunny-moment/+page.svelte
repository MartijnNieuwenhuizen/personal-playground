<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	const title = `When is the next sunny moment?`;
	const description = ``;

	/** @type {import('./$types').PageData} */
	export let data;

	const firstSunnyMoment = data.firstSunnyMoment;
	const date = firstSunnyMoment ? new Date(firstSunnyMoment.dt * 1000) : null;

	// If there is a date, format the date like: "Maandag 1 januari - 12:00"
	const formattedDate = date
		? date.toLocaleString('nl-NL', {
				day: 'numeric',
				month: 'long',
				hour: 'numeric',
				minute: 'numeric'
		  })
		: null;
</script>

<ExperimentItem {title} {description} showPageEffect={false}>
	{#if !data.firstSunnyMoment}
		<div class="container">
			<h2>😭<br /> Geen zon in de aankomende 48 uur</h2>
			<p>
				Boek <a
					href="https://www.skyscanner.nl/vluchten-naar/svq/goedkope-vluchten-naar-sevilla-luchthaven.html"
					>hier</a
				> je ticket naar Sevilla ☀️!
			</p>
		</div>
	{:else}
		<figure class="container">
			<h2>🎉 {formattedDate} 🎉</h2>
			<img
				src={`http://openweathermap.org/img/wn/${firstSunnyMoment.weather[0].icon}@4x.png`}
				alt=""
			/>
			<figcaption>Conditie: {firstSunnyMoment.weather[0].description}</figcaption>
		</figure>
	{/if}
</ExperimentItem>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0;
		padding: 6rem 8rem;
	}

	img {
		min-width: 10rem;
	}
	h2 {
		@include body-5;
		font-size: 5rem;
		font-family: var(--sans-serif);
		text-align: center;
	}
	p {
		font-size: 2rem;
	}
</style>
