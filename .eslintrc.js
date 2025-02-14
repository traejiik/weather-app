module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: false,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
  },
  plugins: ['prettier'],
  extends: ['airbnb', 'prettier', 'plugin:node/recommended'],
};
