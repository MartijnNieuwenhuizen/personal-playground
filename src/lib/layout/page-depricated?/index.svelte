<div class="page">
	<slot />
</div>

<!-- Styles imported by a style tag aren't scoped! -->
<style lang="scss">
	@import './style.scss';

	:global {
		@import '../styles/globals.scss';
	}
</style>
