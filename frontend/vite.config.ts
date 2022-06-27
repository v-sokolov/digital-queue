import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import * as path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@infrastructure': path.resolve(__dirname, './src/infrastructure'),
      '@application': path.resolve(__dirname, './src/application')
    }
  },
  plugins: [react(), checker({ typescript: true })]
});
