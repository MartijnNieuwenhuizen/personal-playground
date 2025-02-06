<script>
	import * as THREE from 'three';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';
	import { onMount } from 'svelte';

	const title = 'Simple 3D scene in Svelte';
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

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(width, height);
		renderer.setAnimationLoop(animation);
		containerElement.appendChild(renderer.domElement);

		/**
		 * @param {number} time
		 */
		function animation(time) {
			mesh.rotation.x = time / 2000;
			mesh.rotation.y = time / 1000;

			renderer.render(scene, camera);
		}

		// resize
		window.addEventListener('resize', () => {
			const width = window.innerWidth,
				height = window.innerHeight;

			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		});

		// destroy
		return () => {
			renderer.setAnimationLoop(null);
			renderer.domElement.remove();
			renderer.forceContextLoss();
			renderer.dispose();
		};
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
