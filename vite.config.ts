import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

console.log(path.resolve(__dirname, "node_modules/@tanstack/react-query/src"));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@tanstack/react-query": path.resolve(
        __dirname,
        "node_modules/@tanstack/react-query/src"
      ),
    },
  },
});
