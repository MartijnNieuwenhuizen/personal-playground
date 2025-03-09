<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		type: 'button' | 'submit' | 'reset';
		onclick: () => void;
		children: Snippet;
	}

	let { onclick, type = 'button', children, ...others }: Props = $props();
</script>

<button {type} {onclick} {...others}>{@render children()}</button>

<style lang="scss">
	button {
		@include body-2;

		padding: gap(3) gap(6);
		background-color: var(--expressive-color);
		color: var(--white);
		cursor: pointer;
		border: none;
		border-radius: 5px;
	}

	button:hover,
	button:focus {
		background-color: var(--expressive-color-dark);
	}
</style>
