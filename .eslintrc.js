// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'security'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'plugin:security/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-throw-literal': 'off',
    camelcase: 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  overrides: [
    {
      files: ['packages/log/**/*.ts'],
      excludedFiles: [
        'packages/log/node_modules/**/*',
        'packages/log/build/**/*',
        'packages/log/dist/**/*',
      ],
      rules: {
        'prettier/prettier': 'error',
        'no-throw-literal': 'off',
        camelcase: 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
