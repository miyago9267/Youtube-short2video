import { defineConfig } from 'vite';
import { c } from 'vite/dist/node/moduleRunnerTransport.d-DJ_mE5sf';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        content: 'src/content.ts',
      },
      output: {
        entryFileNames: '[name].js'
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
});