module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-typescript', 'prettier'],
  // settings: {
  //   'import/resolver': {
  //     typescript: {},
  //   },
  // },
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  // plugins: ['@typescript-eslint', 'prettier', 'import'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
  },
};
