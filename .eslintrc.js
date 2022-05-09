module.exports = {
  extends: [
    // 'airbnb',
    // ts 关键字和类型的一些规则
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser', // 定义 ESLint 的解析器
  globals: {
    // 环境变量
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    REACT_APP_ENV: true,
  },
  parserOptions: {
    // ts 版本的提示信息
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    /* ts */
    'no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true }], // 允许 短路运算和三元运算 其他warning
    /* js */
    'max-len': ['error', { code: 150 }], // 最大行字符数
    semi: 'off', // 允许 行尾无分号
    /* react */
    'react-hooks/exhaustive-deps': 'off', // 允许 react-hooks 依赖不全
    'react/no-array-index-key': 'off', // 允许 用 index 做key
    // 'react/function-component-definition': [
    //   2,
    //   { namedComponents: 'arrow-function' },
    // ], // 默认 用箭头函数定义函数组件
    'react/jsx-filename-extension': 'off', // 允许 tsx里面不带类型定义
    'react/require-default-props': 'off', // 允许 没有默认值
    'react/react-in-jsx-scope': 'off', // 允许 React不带import React
    /* import */
    'import/extensions': 'off', // 允许 不带扩展名
    'import/prefer-default-export': 'off', // 允许 不用export default
    'import/resolver': 'off', // 关闭 eslint 模块解析（已经有ts做了依赖解析）
  },
  // 依赖解析用 ts
  settings: {
    'import/parser': {
      '@typescript-eslint/parser': ['js', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
