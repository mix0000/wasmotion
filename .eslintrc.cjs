module.exports = {
  globals: {
    process: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    amd: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
    },
    'import/resolver': {
      alias: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['playwright/*.ts', 'tests/*.spec.ts', 'tests/*.spec.tsx'],
      settings: {
        'import/resolver': {
          alias: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
          },
          typescript: {
            alwaysTryTypes: true,
            project: './tests/tsconfig.node.json',
          },
        },
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:effector/recommended',
    'plugin:effector/react',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: [
    'prettier',
    'react',
    'react-hooks',
    '@typescript-eslint',
    'effector',
    'tailwindcss',
  ],
  rules: {
    'no-duplicate-imports': 'error',
    'no-trailing-spaces': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': [
      'error',
      {
        ignore: ['\\.svg'],
      },
    ],
    'max-len': 'off',
    'no-console': [
      'error',
      {
        allow: ['error', 'warn'],
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
      },
    ],
    'object-shorthand': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 80,
        tabWidth: 2,
        trailingComma: 'all',
        semi: true,
        singleQuote: true,
      },
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'no-empty-interface': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { classes: false, functions: false },
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'always', children: 'ignore' },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/no-custom-classname': 'off',
    'no-negated-condition': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['external'],
          ['builtin'],
          ['internal'],
          ['parent'],
          ['sibling'],
          ['object'],
          ['index'],
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
