<script>
	/** @type {'small' | 'medium' | 'large' | 'huge'} */
	export let size = 'medium';
	/** @type {'both' | 'top' | 'bottom'} */
	export let area = 'both';
</script>

<div class="row" data-size={size} data-area={area}><slot /></div>

<style lang="scss">
	@import './style.scss';
</style>
