import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed at https://<user>.github.io/platform-delivery-vision/
export default defineConfig({
  base: '/platform-delivery-vision/',
  plugins: [react()],
})
