// eslint.config.js (Flat Config)
import js from '@eslint/js'; // ESLint's built-in JavaScript config

export default [
  // 1) Base config(s):
  js.configs.recommended,

  // 2) Additional or custom config object(s):
  {
    files: ['**/*.js'],
    ignores: ['node_modules', 'dist'],
    rules: {
      // your overrides
      'no-console': 'warn',
    },
  },
];
