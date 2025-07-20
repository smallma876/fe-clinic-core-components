import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: false,
  build: {
    emptyOutDir: false,
    lib: {
      entry: [
        path.resolve(__dirname, "src/components/ButtonPrimary/index.ts"),
        path.resolve(__dirname, "src/components/ButtonSecondary/index.ts")
      ],
      formats: ["es", 'cjs'],
    },
    rollupOptions: {
      external: ["react", "react-dom", 'react/jsx-runtime'],
      output: {
        globals: {
          react: "React",
          "react-dom": 'ReactDOM',
        },
        preserveModules: true,
        preserveModulesRoot: 'src/components'
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
