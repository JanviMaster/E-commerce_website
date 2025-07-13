import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    watch: {
      usePolling: true,     // Enable polling (fixes file watching issues)
      interval: 100,        // Optional: check every 100ms
    },
    host: 'localhost',
    port: 5173,             // You can change this if needed
    open: true,             // Automatically opens in browser
  },
});
