// uno.config.ts
import { defineConfig, presetAttributify, presetUno, transformerDirectives, transformerVariantGroup } from "unocss";

export default defineConfig({
	presets: [
		presetUno(),
		presetAttributify(),
	],
	transformers: [
		transformerDirectives({
			enforce: "pre",
		}),
		transformerVariantGroup(),
	],
});
