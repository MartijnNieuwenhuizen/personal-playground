<script lang="ts">
	import { menuState } from '$lib/states/MenuState/index.svelte';

	let label = menuState.menuIsOpen ? 'Close menu' : 'Open menu';

	function toggleMenuVisibility() {
		menuState.menuIsOpen = !menuState.menuIsOpen;
	}
</script>

<button
	type="button"
	aria-expanded={menuState.menuIsOpen}
	class="menu-toggle-button"
	aria-haspopup="true"
	on:click={toggleMenuVisibility}
>
	<span class="sr-only">{label}</span>
	<svg
		aria-hidden="true"
		focusable="false"
		width="21"
		height="16"
		viewBox="0 0 21 16"
		class="hamburger"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		data-is-cross={menuState.menuIsOpen}
	>
		<rect
			class="hamburger__top"
			fill="currentcolor"
			x="0.078125"
			y="0.224609"
			width="20.9205"
			height="2.25"
		/>
		<rect
			class="hamburger__center"
			fill="currentcolor"
			x="0.078125"
			y="7.00439"
			width="20.9205"
			height="2.25"
		/>
		<rect
			class="hamburger__bottom"
			fill="currentcolor"
			x="0.078125"
			y="13.7246"
			width="20.9205"
			height="2.25"
		/>
	</svg>
</button>

<style lang="scss">
	/*
     * Menu toggle button
     */
	.menu-toggle-button {
		position: relative;
		border: none;
		background-color: transparent;
		color: $black;
		transition: color 0.2s;
	}

	// Ensure the click target of at least 44x44px
	.menu-toggle-button:after {
		content: '';
		width: 44px;
		height: 44px;
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.menu-toggle-button:hover,
	.menu-toggle-button:focus-visible {
		color: var(--expressive-color);
		cursor: pointer;
	}
	:global([data-show-menu='true']) .menu-toggle-button:hover,
	:global([data-show-menu='true']) .menu-toggle-button:focus-visible {
		color: var(--white);
		cursor: pointer;
	}

	/*
     * Hamburger icon
     */

	.hamburger {
		transition: 0.1s ease-in-out color;
	}

	/**
     * Lines
     */
	.hamburger__top {
		transform-origin: 2px 4px;
		transition: 0.3s ease-in-out transform;
	}
	.hamburger__bottom {
		transform-origin: 2px 12px;
		transition: 0.3s ease-in-out transform;
	}
	.hamburger__center {
		transition: 0.3s ease-in-out opacity;
	}

	/**
     * "Is open" state
     */
	.hamburger[data-is-cross='true'] .hamburger__top {
		transform: rotate(45deg);
		transition: 0.3s ease-in-out transform;
	}
	.hamburger[data-is-cross='true'] .hamburger__bottom {
		transform: rotate(-45deg);
		transition: 0.3s ease-in-out transform;
	}
	.hamburger[data-is-cross='true'] .hamburger__center {
		opacity: 0;
		transition: 0.15s ease-in-out opacity;
	}
</style>
