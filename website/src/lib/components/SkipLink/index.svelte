<script lang="ts">
	export let id: string;
	export let label: string;
</script>

<a href={`#${id}`} class="skip-link">
	{label}
</a>

<style lang="scss">
	.skip-link {
		opacity: 0;
		position: absolute;
		left: 50%;
		margin-top: gap(2);
		padding: gap(2) gap(6);
		background: #000;
		color: #fff;
		border: 3px solid #fff;
		border-radius: rem(30);
		transform: translateY(-200%);

		@include bp-min(small) {
			margin-top: gap(4);
		}
	}

	.skip-link:focus,
	.skip-link:active {
		opacity: 1;
		z-index: 999;
		transform: translateX(-50%);
	}
</style>
