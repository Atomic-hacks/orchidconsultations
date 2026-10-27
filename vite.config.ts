import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Prebundle form dependencies before a visitor opens the lazy contact route.
  optimizeDeps: {
    include: ['react-hook-form', '@hookform/resolvers/zod', 'zod'],
  },
});
