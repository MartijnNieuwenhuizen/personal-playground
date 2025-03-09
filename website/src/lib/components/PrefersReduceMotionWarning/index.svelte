<aside>
	<h2>ℹ️ You have Prefers-reduce-motion enabled ℹ️</h2>
	<p>Therefore, you won't see the animations for this experiment.</p>
</aside>

<style lang="scss">
	aside {
		z-index: 999;
		position: fixed;
		bottom: 1rem;
		left: 50%;
		display: none;
		padding: gap(6);
		background-color: $white;
		text-align: center;
		border-radius: 5px;
		box-shadow: 0 0 10px rgba($black, 0.1);
		transform: translate(-50%, 0%);

		@media (prefers-reduced-motion: reduce) {
			display: block;
		}
	}
</style>
