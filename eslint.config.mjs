import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const nextCoreWebVitals = require("eslint-config-next/core-web-vitals");

/** @type {import("eslint").Linter.Config[]} */
const config = [
  {
    ignores: [".next/**", "node_modules/**", "out/**"],
  },
  ...nextCoreWebVitals,
];

export default config;
