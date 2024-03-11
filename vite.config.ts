import react from "@vitejs/plugin-react";
import { glob } from "glob";
import { fileURLToPath } from "node:url";
import { extname, relative, resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { viteStaticCopy } from "vite-plugin-static-copy";

const copyConfig = viteStaticCopy({
  targets: [
    {
      src: "src/themes",
      dest: "./",
    },
  ],
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ["lib"] }), copyConfig],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },

    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob
          .sync("lib/**/*.{ts,tsx}", { ignore: "lib/**/*.stories.tsx" })
          .map((file) => [
            // 1. The name of the entry point
            // lib/nested/foo.js becomes nested/foo
            relative("lib", file.slice(0, file.length - extname(file).length)),
            // 2. The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
