module.exports = {
    env: {
      browser: true,
      es2023: true
    },
    extends: [
      '@nuxtjs/eslint-config-typescript',
      'plugin:prettier/recommended'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2023,
      sourceType: 'module'
    },
    rules: {
      'no-undef': 'off',
      'no-var': 'error'
    },
    overrides: [
      {
        files: ['*.vue'],
        rules: {
          'no-var': 'error'
        }
      }
    ]
  }