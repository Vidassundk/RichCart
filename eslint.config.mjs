// eslint.config.mjs
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";

export default [
  /** Enable type-aware linting – let the parser locate tsconfig automatically */
  {
    languageOptions: {
      parserOptions: {
        project: true, //  ← the magic switch
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  /** 1️⃣  Generic JS/TS rules */
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

  /** 2️⃣  React, hooks, import rules */
  {
    plugins: { react, "react-hooks": reactHooks, import: importPlugin },
    settings: { react: { version: "detect" } },
    rules: {
      "react/react-in-jsx-scope": "off",
      "import/no-unresolved": "error",
    },
  },

  /** 3️⃣  Ignore build output & Next.js artefacts */
  { ignores: ["**/dist/**", "**/.next/**"] },
];
