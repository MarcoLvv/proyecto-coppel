import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path'
import {copy} from 'vite-plugin-copy' //importa el plugin copy
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    assetsDir: 'assets',
  },
  resolve: {
    alias: {
        '@': path.resolve(__dirname, './src/'),
        components: path.resolve(__dirname, 'coppel/src/components/'),
        api: path.resolve(__dirname, 'coppel/api/src/api/'),
        assets: path.resolve(__dirname, 'coppel/src/assets/')
    }
}
});


