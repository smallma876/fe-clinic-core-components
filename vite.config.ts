import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dts({
    tsconfigPath: './tsconfig.app.json',
    outDir: "lib/types",
    insertTypesEntry: true,
    copyDtsFiles: true,
    rollupTypes: true,
  })],
  publicDir: false,
  build: {
    // elimina el contenido del outDir antes de la compilación en este caso "lib",
    // si la carpeta definida en outDir está fuera del root(por defecto donde está tu vite.config)
    // mostrará una advertencia y no eliminará
    emptyOutDir: true,
    outDir: "lib",
    lib: {
      entry: ["src/components/index.ts"],
      formats: ["es", 'cjs'],
    },
    rollupOptions: {
      // estos módulos no se empaquetan y lo debe implementar el consumer
      external: ["react", "react-dom", 'react/jsx-runtime', "tailwindcss"],
      output: {
        //cuando es true mantiene la estructura de carpetas y cada ts con su respectivo js, sin agruparlo en un solo archivo.
        preserveModules: true,
        //indica que se preservará la estructura de carpetas debajo de src(es decir que no contará la carpeta src)
        //por ejemplo: si tenemos un archivo en src/componentes/index.ts
        //la ruta que tendrá en el compilado será lib/componentes/index.js quita "src".
        //ejemplo 2: si se tuviera configurado como src/componentes saldría en el compilado lib/index.ts es decir
        //se elimina todo src/componentes y preserva la estructura interior a esa ruta. Además si hubiera archivos ts
        //fuera de src/componentes, por ejemplo dentro src/dominios se compilarian con toda esa ruta "src/dominios"
        preserveModulesRoot: 'src'
      }
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
