import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react({
      babel: {
        // Disable default .babelrc and babel.config.js usage
        babelrc: false,
        configFile: false,
        // Optional: pass a custom target to avoid legacy transpiling
        presets: [],
        plugins: [],
      },
    }),

    // Gzip compression
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
    }),

    // Brotli compression
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
    }),
  ],
  build: {
    target: 'es2020', // Target modern browsers only
    assetsInlineLimit: 0,
  },
});
