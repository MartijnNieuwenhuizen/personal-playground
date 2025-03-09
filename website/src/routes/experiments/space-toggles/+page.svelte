<script>
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	const title = 'Space toggles';
	const description =
		'Based on <a href="https://www.bram.us/2023/06/14/cyclic-dependency-space-toggles/">this article</a> by Brammus';
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<div>
		<input type="checkbox" id="toggle" class="space-toggles__toggle" />
		<label for="toggle">Toggle me</label>
		<div class="space-toggles preview-box"></div>
	</div>
</ExperimentItem>

<style>
	.space-toggles {
		--level: var(--level--default);

		/* prettier-ignore */
		--level--default: var(--level,);

		/* prettier-ignore */
		--level--success: var(--level,);

		/* prettier-ignore */
		--level--warning: var(--level,);

		/* prettier-ignore */
		--level--error:   var(--level,);

		background-color: var(--level--default, lavender) var(--level--success, palegreen)
			var(--level--warning, khaki) var(--level--error, lightpink);
	}

	.space-toggles:hover {
		--level: var(--level--warning);
	}

	.space-toggles__toggle:checked ~ .space-toggles {
		--level: var(--level--success);
	}

	.preview-box {
		width: 5rem;
		height: 5rem;
		border: 1px solid black;
	}
</style>
