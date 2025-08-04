import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([".next/", "node_modules/"]),

  tseslint.config(eslint.configs.recommended, tseslint.configs.recommended),
]);
