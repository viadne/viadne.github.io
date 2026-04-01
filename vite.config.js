import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 
import imagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagemin({
      mozjpeg: { quality: 60 }, // Adjust quality as needed
      pngquant: { quality: [0.6, 0.8] },
      webp: { quality: 70 },
    })
  ],
  base: '/',
})

