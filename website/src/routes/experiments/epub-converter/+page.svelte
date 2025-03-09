<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';

	import { PUBLIC_EPUB_CONVERTER_URL } from '$env/static/public';

	const title = 'Epub converter';
	const description = 'Add a description';

	let waitingForResponse = $state(false);
	let errorMessage = $state('');
	let successMessage = $state('');

	const url = `${PUBLIC_EPUB_CONVERTER_URL}/api/format`;

	/**
	 * @param {any} event
	 */
	const handleSubmit = async (event) => {
		waitingForResponse = true;
		errorMessage = '';
		successMessage = '';

		event.preventDefault();

		try {
			const form = event.target;
			const formData = new FormData(form);

			fetch(form.action, {
				method: form.method,
				body: formData,
				mode: 'no-cors'
			})
				.then((response) => {
					console.log('response: ', response);
					if (response.ok) {
						successMessage = 'Je boek is verstuurd!';
					} else {
						errorMessage = 'Something went wrong. Ask Martijn to take a look.';
					}
				})
				.catch((error) => {
					console.error(error);
					error = 'Something went wrong. Ask Martijn to take a look.';
				})
				.finally(() => {
					waitingForResponse = false;
				});
		} catch (error) {
			waitingForResponse = false;
			console.error(error);
		}
	};
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<Block size="medium">
		{#if waitingForResponse}
			<h1>WAITING!!!</h1>
		{/if}

		{#if errorMessage}
			<h1>{errorMessage}</h1>
		{/if}

		{#if successMessage}
			<h1>{successMessage}</h1>
		{/if}

		<form action={url} method="post" onsubmit={handleSubmit}>
			<!-- <form action="http://localhost:3000/api/format" method="post" on:submit={handleSubmit}> -->
			<legend>Epub converter</legend>
			<label for="file">File</label>
			<input type="file" name="file" id="file" accept=".epub" required />

			<label for="name">Name</label>
			<select name="name" id="name" required>
				<option value="sofie">Sofie</option>
				<option value="martijn">Martijn</option>
			</select>

			<label for="pw">PW</label>
			<input type="password" name="pw" id="pw" required />

			<button type="submit">Submit</button>
		</form>
	</Block>
</ExperimentItem>

<style lang="scss">
	form {
		display: grid;
		grid-template-columns: repeat(1, auto);
	}

	input {
		padding: 0.3rem;
	}

	button {
		margin-top: 3rem;
		padding: 0.3rem;
	}
</style>
