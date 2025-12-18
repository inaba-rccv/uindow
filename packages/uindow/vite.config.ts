import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  resolve: {
    alias: { find: '@uindow/types', replacement: `${resolve(__dirname, './types/src/index.ts')}` },
  },
  plugins: [
    vue(),
    dts({
      include: ['src', '../components/**/*.vue', '../components/**/*.ts'],
      outDir: 'dist/types',
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'uindow',
      fileName: format => `uindow.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    sourcemap: false,
    minify: true,
  },
})
