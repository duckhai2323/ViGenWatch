const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'eslint-config-prettier'
  ],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname)],
        extensions: ['.js', '.jsx']
      }
    }
  },
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    '@typescript-eslint/no-unused-expressions': 'off', //cho nhung bieu thuc chill ko lam gi
    '@typescript-eslint/no-require-imports': 'off', //cho phep dung require
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: true,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ]
};
