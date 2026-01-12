import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.ts'),
        foundations: resolve(__dirname, 'src/foundations/index.ts'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  cssCodeSplit: true,
  minify: 'esbuild',
  esbuild: {
    minify: true,
    target: 'es2022',
  },
});
