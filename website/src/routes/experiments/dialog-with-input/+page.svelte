<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	const title = 'Dialog with input';
	const description =
		'Will the input of this dialog be above the keyboard? And will the dialog be scrollable? On mobile?';
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<dialog open>
		<section>
			<h2>Dialog</h2>
			<p>1. This is a dialog</p>
			<p>2. This is a dialog</p>
			<p>3. This is a dialog</p>
			<p>4. This is a dialog</p>
			<p>5. This is a dialog</p>
			<p>6. This is a dialog</p>
			<p>7. This is a dialog</p>
			<p>8. This is a dialog</p>
			<p>9. This is a dialog</p>
			<p>10. This is a dialog</p>
			<p>11. This is a dialog</p>
			<p>12. This is a dialog</p>
			<p>13. This is a dialog</p>
			<p>14. This is a dialog</p>
			<p>15. This is a dialog</p>
			<p>16. This is a dialog</p>
			<p>17. This is a dialog</p>
			<p>18. This is a dialog</p>
			<p>19. This is a dialog</p>
			<p>20. This is a dialog</p>
			<p>21. This is a dialog</p>
			<p>22. This is a dialog</p>
			<p>23. This is a dialog</p>
			<p>24. This is a dialog</p>
			<p>25. This is a dialog</p>
			<p>26. This is a dialog</p>
			<p>27. This is a dialog</p>
			<p>28. This is a dialog</p>
			<p>29. This is a dialog</p>
			<p>30. This is a dialog</p>
			<p>31. This is a dialog</p>
			<p>32. This is a dialog</p>
			<p>33. This is a dialog</p>
			<p>34. This is a dialog</p>
			<p>35. This is a dialog</p>
			<p>36. This is a dialog</p>
			<p>37. This is a dialog</p>
		</section>

		<form action="submit" method="post">
			<input type="text" />
			<button>Submit</button>
		</form>
	</dialog>
</ExperimentItem>

<style lang="scss">
	dialog {
		overflow: auto;
		display: grid;
		grid-template-rows: auto 1fr;
		max-height: 90dvh;
		inset: 0;
	}

	section {
		overflow: auto;
		max-height: 100%;
	}
</style>
