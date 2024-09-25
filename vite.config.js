import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    wasm(),
    nodePolyfills(),  // Make sure this is being used correctly
  ],
  resolve: {
    alias: {
      'stream-browserify': resolve(__dirname, 'node_modules/stream-browserify'),
    },
  },
  build: {
    rollupOptions: {
      input: "index.js",
      output: {
        format: "esm",
        globals: {
          'stream-browserify': 'stream',
        },
      },
    },
    target: "es2022",
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2022",
    },
  },
});
