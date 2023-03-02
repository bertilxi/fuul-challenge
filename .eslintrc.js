module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    createDefaultProgram: false,
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "simple-import-sort",
    "sonarjs",
    "jest",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "plugin:jest/recommended",
  ],
  root: true,
  env: {
    node: true,
    "jest/globals": true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/require-await": "off",
    "unicorn/no-array-reduce": "off",
  },
};
