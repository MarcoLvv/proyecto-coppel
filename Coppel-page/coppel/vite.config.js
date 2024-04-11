import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import reactSvgPlugin from 'vite-plugin-react-svg'
import { ViteImagesPlugin } from 'vite-plugin-images'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    reactSvgPlugin(),
    ViteImagesPlugin()],
})
