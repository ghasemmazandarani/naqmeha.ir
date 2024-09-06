import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/naqmeha.ir/',
  build:{
    outDir: './build',
    emptyOutDir : false
  }
});
