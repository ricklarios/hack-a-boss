module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  env: {
    node: true,
    es2021: true,
    es6: true,
    "jest/globals": true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    "no-console": "warn",
    "spaced-comment": "warn",
  },
  settings: {
    jest: {
      version: 26,
    },
  },
};
