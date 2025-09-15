import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Configuración de archivos a ignorar
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    ignorePatterns: [
          ".next/**",
          "dist/**",
          "node_modules/**",
    ],
    rules: {
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps" : "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-this-alias" : "off",
      "@typescript-eslint/triple-slash-reference" : "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-require-imports" : "off"
    },
    reportUnusedDisableDirectives: true,
    settings: {
      
    }
  }),
];

export default eslintConfig;
