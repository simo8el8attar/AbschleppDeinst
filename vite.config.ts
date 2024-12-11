import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/AbschleppDeinst/', // Add a trailing slash to match your GitHub repository name
  plugins: [react()],
});
