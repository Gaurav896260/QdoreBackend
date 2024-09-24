import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    wasm(),
    nodePolyfills(),
  ],
  build: {
    rollupOptions: {
      input: "index.js",
      output: {
        format: "esm",
      },
      // Ensure that stream-browserify is included in the bundle
      output: {
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
