import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import pages from "vite-plugin-pages";

export default defineConfig({
  clearScreen: false,
  plugins: [
    preact(),
    pages({
      pagesDir: [{ dir: "src/pages", baseRoute: "" }],
      extensions: ["tsx"],
      importMode: "sync",
      syncIndex: true,
    }),
  ],
});
