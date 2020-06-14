module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
  compilerOptions: {
    moduleResolution: 'node',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/prop-types': [2, { ignore: ['children'] }],
    // "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['./src'],
      },
      'babel-module': {},
    },
  },
};
