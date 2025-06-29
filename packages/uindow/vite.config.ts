import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // 指定入口文件
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyComponentLib', // UMD 构建时的全局变量名
      fileName: format => `my-component-lib.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    // 生成类型声明文件
    sourcemap: true,
    minify: true,
  },
})
