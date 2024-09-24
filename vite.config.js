import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    wasm(),
    nodePolyfills(), // Ensure that this plugin is included to provide polyfills
  ],
  build: {
    rollupOptions: {
      input: "index.js",
      output: {
        format: "esm",
      },
      // Ensure external modules are handled properly
      external: [
        'stream-browserify', // Add any other external modules you may need
        'async_hooks',
        'worker_threads'
      ],
    },
    // Target environment that supports top-level await
    target: "es2022",
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2022",
      // You can add specific conditions or options if needed
    },
  },
});
