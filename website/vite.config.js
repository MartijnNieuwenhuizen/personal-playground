import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	// add scss support
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "./styles/base.scss" as *;',
				silenceDeprecations: ['import']
			}
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
