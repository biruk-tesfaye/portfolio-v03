import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
	plugins: [imagetools(), sveltekit(), viteCompression()]
});
