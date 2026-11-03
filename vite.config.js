import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/epic-greek-dictionary/',
  plugins: [react()],
});
