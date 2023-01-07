<script lang="ts">
	import { onMount } from 'svelte';
	import config from './cms';

	const storedConfig = config;

	onMount(() => {
		const typedWindow: any = window;

		if (typedWindow.netlifyIdentity) {
			typedWindow.netlifyIdentity.on('init', (user: any) => {
				if (!user) {
					typedWindow.netlifyIdentity.on('login', () => {
						document.location.href = '/admin/';
					});
				}
			});
		}

		const { initCMS } = typedWindow;
		initCMS({
			config: storedConfig
		});
	});
</script>

<head>
	<meta name="robots" content="noindex,nofollow" />

	<script>
		window.CMS_MANUAL_INIT = true;
	</script>
</head>

<body>
	<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
	<script src="https://unpkg.com/netlify-cms@^2.6.0/dist/netlify-cms.js"></script>
</body>
