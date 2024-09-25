import { defineConfig } from 'vite';
import nodePolyfills from 'vite-plugin-node-polyfills';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
  plugins: [
    wasm(),
    nodePolyfills(),  // Ensures polyfills are applied for Node.js core modules
  ],
  build: {
    target: "es2022",
  },
  resolve: {
    alias: {
      'stream': 'stream-browserify',  // Alias for stream-browserify
    },
  },
});
