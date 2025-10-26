const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    plugins: {
      'simple-import-sort': require('eslint-plugin-simple-import-sort'),
    },
    rules: {
      'no-trailing-spaces': 'error',
      'no-unused-vars': 'warn',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
]);
