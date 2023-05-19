import { resolve } from "node:path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from "vite-plugin-html";

import Unocss from "unocss/vite";
import { presetAttributify, presetUno, transformerDirectives } from "unocss";

import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";

import ReactivityTransform from "@vue-macros/reactivity-transform/vite";

export default defineConfig(({ mode }) => {
  const { VITE_BASE_API, VITE_BASE, VITE_DOCUMENT_TITLE } = loadEnv(mode, "./");
  return {
    base: VITE_BASE,
    resolve: {
      alias: {
        "@/": `${resolve(__dirname, "src")}/`,
      },
    },
    server: {
      host: true,
      proxy: {
        "/api": {
          target: VITE_BASE_API,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ""),
        },
      },
    },
    plugins: [
      vue({
        script: {
          propsDestructure: true,
          defineModel: true,
        },
      }),
      ReactivityTransform(),
      createHtmlPlugin({
        inject: {
          data: {
            title: VITE_DOCUMENT_TITLE,
          },
        },
      }),

      Unocss({
        presets: [
          presetUno(),
          presetAttributify({
            prefix: "un:",
            prefixedOnly: false,
          }),
        ],
        transformers: [
          transformerDirectives({
            enforce: "pre",
          }),
        ],

      }),

      AutoImport({
        dts: resolve(__dirname, "src/types/auto-import.d.ts"),
        imports: ["vue", "vue-router", "pinia", "@vueuse/core"],
        resolvers: [NaiveUiResolver()],
        vueTemplate: true,
        defaultExportByFilename: true,
        dirs: ["src/utils/index*", "src/composables", "src/stores", "src/apis/*/index*"],
      }),
      Components({
        dts: resolve(__dirname, "src/types/auto-components.d.ts"),
        resolvers: [NaiveUiResolver(), IconsResolver()],
        globs: ["src/components/*/index.vue", "src/layouts/*/index.vue"],
      }),
      Icons(),

    ],
  };
});
