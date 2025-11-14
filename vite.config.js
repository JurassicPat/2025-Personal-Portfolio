import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react({
      babel: {
        babelrc: false,
        configFile: false,
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

    visualizer({
      open: true,
      filename: 'dist/stats.html',
      template: 'treemap',
    }),
  ],
  build: {
    target: 'es2020',
    assetsInlineLimit: 0,
  },
});
