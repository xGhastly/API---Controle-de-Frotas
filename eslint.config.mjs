import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      semi: ['error', 'always'], // Adiciona a regra para exigir ponto e vírgula
    },
  },
];