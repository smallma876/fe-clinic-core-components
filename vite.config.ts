import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    emptyOutDir: false,
    lib: {
      entry: [
        path.resolve(__dirname, "src/components/ButtonPrimary"),
        path.resolve(__dirname, "src/components/Secondary")
      ],
      formats: ["es", 'cjs'],
      fileName:  (format) => `fe-clinic-components.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": 'ReactDOM',
        }
      }
    },
    outDir: "lib",
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
