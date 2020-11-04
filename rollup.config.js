import typescript from "rollup-plugin-typescript2";
import shebang from "rollup-plugin-preserve-shebang";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import builtins from "builtin-modules";

export default {
  input: "./src/index.tsx",
  output: {
    dir: "bin",
    format: "cjs",
  },
  external: builtins,
  plugins: [commonjs({ ignoreGlobal: true }), json(), shebang(), typescript()],
};
