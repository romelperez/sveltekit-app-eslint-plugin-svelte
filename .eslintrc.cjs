module.exports = {
  root: true,
  plugins: ['svelte', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    extraFileExtensions: ['.svelte']
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended'
  ],
  ignorePatterns: [
    'tests',
    'playwright.config.ts',
    'svelte.config.js',
    '*.cjs'
  ],
  settings: {
    svelte: {
      kit: {
        files: {
          routes: 'src/routes'
        }
      }
    }
  },
  env: {
    browser: true,
    node: true
  }
};
