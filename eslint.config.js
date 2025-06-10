import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['**/dist/**/', '**/node_modules/**/'],
  vue: true,
  rules: {
    'no-console': 'warn',
    'no-unused-vars': ['warn', {
      args: 'none', // 不检查未使用的函数参数
      vars: 'all', // 检查所有变量
      ignoreRestSiblings: true, // 允许忽略解构中未使用的变量
    }],
  },
})
