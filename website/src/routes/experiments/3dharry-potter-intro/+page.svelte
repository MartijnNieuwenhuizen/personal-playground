<script>
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	import { onMount } from 'svelte';

	const title = '3D Harry Potter intro';
	const description = '';

	/** @type {HTMLDivElement} */
	let containerElement = $state();

	onMount(() => {
		const width = window.innerWidth,
			height = window.innerHeight;

		const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
		camera.position.z = 1;

		const scene = new THREE.Scene();

		const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
		const material = new THREE.MeshNormalMaterial();

		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		const loader = new GLTFLoader();

		loader.load(
			'./scene.gltf',
			function (gltf) {
				scene.add(gltf.scene);
			},
			undefined,
			function (error) {
				console.error(error);
			}
		);
	});
</script>

<ExperimentItem {title} {description} showPageEffect={false}>
	<div class="sticky">
		<div class="container" bind:this={containerElement}></div>
	</div>
</ExperimentItem>

<style lang="scss">
	.sticky {
		width: 100%;
		height: 400vh;
	}

	.container {
		position: sticky;
		top: 0;
	}
</style>
