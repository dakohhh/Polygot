import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Specify base path for deployment
  build: {
    outDir: 'dist', // Output directory for the build
    sourcemap: true, // Include sourcemaps for debugging
  },
  server: {
    port: 3000, // Change dev server port
  },
});
