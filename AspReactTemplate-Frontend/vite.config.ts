import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: path.resolve(__dirname, '../wwwroot'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
});
