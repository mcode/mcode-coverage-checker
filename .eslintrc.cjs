module.exports = {
  env: {
    browser: true,
    es2021: true,
    // Recognize Jest global variables like `test` and `expect`
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'airbnb', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  rules: {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // TEMPORARY - we should enable this once we are confident in our data model for stats and coverage info
    'react/prop-types': 'off',
    // allow jsx syntax in js files
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // workaround for
    // https://github.com/import-js/eslint-plugin-import/issues/1810:
    'import/no-unresolved': ['error', { ignore: ['@formkit/auto-animate.*'] }],
  },
};
