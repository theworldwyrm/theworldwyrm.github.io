import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://theworldwyrm.github.io/  (photography lives in public/photography -> /photography/)
export default defineConfig({
  base: '/',
  plugins: [react()],
});
