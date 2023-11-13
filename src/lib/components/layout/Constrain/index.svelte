<script>
	/** @type {'tiny' | 'small' | 'small-medium' | 'medium' | 'large'} */
	export let size = 'large';
</script>

<div class="constrain" data-size={size}><slot /></div>

<style lang="scss">
	@import './style.scss';
</style>
