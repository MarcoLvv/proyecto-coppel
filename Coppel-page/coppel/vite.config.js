import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import {copy} from 'vite-plugin-copy' //importa el plugin copy
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    assetsDir: 'assets',
  },
});


