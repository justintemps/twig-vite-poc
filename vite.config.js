import { defineConfig } from "vite";
import twig from "vite-plugin-twig-drupal";
import { join } from "node:path";

export default defineConfig({
  plugins: [
    twig({
      namespaces: {
        components: join(__dirname, "/components"),
      },
      functions: {
        reverse: (twigInstance) =>
          twigInstance.extendFunction(
            "reverse",
            () => (text) => text.split(" ").reverse().join(" ")
          ),
        clean_unique_id: (twigInstance) =>
          twigInstance.extendFilter(
            "clean_unique_id",
            () => (text) => text.split(" ").reverse().join(" ")
          ),
      },
      globalContext: {
        prefix: "ilo",
        is_front_page: false,
      },
    }),
  ],
});
