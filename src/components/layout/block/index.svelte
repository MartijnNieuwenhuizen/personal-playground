<script lang="ts">
	export let size: 'tiny' | 'small' | 'small-medium' | 'medium' | 'large' = 'large';
</script>

<div class="block" data-size={size}><slot /></div>

<style lang="scss">
	@import './style.scss';
</style>
