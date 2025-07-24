import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';


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
    visualizer({
  open: true,
  filename: 'dist/stats.html',
  template: 'treemap', // other options: 'sunburst', 'network'
}),

  ],
  build: {
    target: 'es2020', // Target modern browsers only
    assetsInlineLimit: 0,
  },
});
