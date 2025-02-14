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
		background-color: var(--expressive-color);
		color: var(--white);
		padding: gap(3) gap(6);
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	button:hover,
	button:focus {
		background-color: var(--expressive-color-dark);
	}
</style>
