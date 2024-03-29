module.exports = {
  extends: [
    'get-off-my-lawn',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. MUST ALWAYS BE LAST.
  ],
  ignorePatterns: [
    '/node_modules/',
    '/.next/',
    '/out/',
    '/graphql/generated.ts',
  ],
  parser: '@typescript-eslint/parser', // Use TS Parser
  parserOptions: {
    ecmaVersion: 2020, // Allow modern ECMAScript
    sourceType: 'module', // Allow imports
  },
  rules: {
    'eslint-comments/no-unlimited-disable': 'off',
    'no-param-reassign': 'off', // Reduce functions
    'no-use-before-define': 'off', // React imports have an error to due version mismatches in packages
    'node/no-unpublished-import': [
      'error',
      {
        allowModules: [
          'chance',
          'mock-apollo-client',
          '@testing-library/react',
          '@testing-library/jest-dom',
        ],
      },
    ],
    'react/display-name': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.tsx', '.jsx', '.js'] },
    ], // Allow JSX is TSX Files
    'react/no-array-index-key': 'off', // :shrug:
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-null': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.types.ts', '.ts', '.tsx', 'js', '.jsx'],
      },
      typescript: {},
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
