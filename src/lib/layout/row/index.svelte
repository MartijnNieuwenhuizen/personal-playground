<script lang="ts">
	export let size: 'small' | 'medium' | 'large' | 'huge' = 'medium';
	export let area: 'both' | 'top' | 'bottom' = 'both';
</script>

<div class="row" data-size={size} data-area={area}><slot /></div>

<style lang="scss">
	@import './style.scss';
</style>
