/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    "semi": ["error", "never"],
    "quotes": ["error", "single"],
    "eqeqeq": ["error", "always"],
    "computed-property-spacing": ["error", "never"],
    // "func-call-spacing": ["error", "never"],
    "brace-style": "error",
    "jsx-quotes": ["error", "prefer-double"],
    "object-curly-spacing": ["error", "always"]
  }
}
