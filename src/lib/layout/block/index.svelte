<script>
	/** @type {'tiny' | 'small' | 'small-medium' | 'medium' | 'large' | 'full'} */
	export let size = 'large';
</script>

<div class="block" data-size={size}><slot /></div>

<style lang="scss">
	@import './style.scss';
</style>
