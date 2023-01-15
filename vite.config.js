import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
      {
        find: '@portfolio/pages',
        replacement: path.resolve(__dirname, './src/components/pages'),
      },
      {
        find: '@portfolio/templates',
        replacement: path.resolve(__dirname, './src/components/templates'),
      },
      {
        find: '@portfolio/ui',
        replacement: path.resolve(__dirname, './src/components/ui'),
      },
      {
        find: '@portfolio/state',
        replacement: path.resolve(__dirname, './src/state/slices'),
      },
      {
        find: '@portfolio/utils',
        replacement: path.resolve(__dirname, './src/utils'),
      },
    ],
  },
  plugins: [react()],
});
