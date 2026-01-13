// import { defineConfig, globalIgnores } from "eslint/config";
// import nextVitals from "eslint-config-next/core-web-vitals";
// import nextTs from "eslint-config-next/typescript";
// import prettier from "eslint-config-prettier";

// export default defineConfig([
//   ...nextVitals,
//   ...nextTs,
//   prettier, // Disables ALL formatting rules (Prettier owns formatting)
//   globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
// ]);

// eslint.config.mjs (React / Vite)
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  prettier,

  globalIgnores(["node_modules/**", "dist/**", "build/**"]),
]);
