import globals from "globals";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      semi: ['error', 'always'], // Adiciona a regra para exigir ponto e vírgula
    },
  },

  ...tseslint.configs.recommended,
];