import { defineConfig } from "astro/config"
import fs from "fs"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"
import expressiveCode from "astro-expressive-code"
import { expressiveCodeOptions } from "./src/site.config"

// https://astro.build/config
export default defineConfig({
	site: "https://autoshow.sh/",
	integrations: [
		expressiveCode(expressiveCodeOptions),
		icon(),
		sitemap(),
		mdx(),
	],
	// https://docs.astro.build/en/guides/prefetch/
	prefetch: true,
	vite: {
		plugins: [rawFonts([".ttf", ".woff"])],
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
})

function rawFonts(ext: string[]) {
	return {
		name: "vite-plugin-raw-fonts",
		// @ts-ignore:next-line
		transform(_, id) {
			if (ext.some((e) => id.endsWith(e))) {
				const buffer = fs.readFileSync(id)
				return {
					code: `export default ${JSON.stringify(buffer)}`,
					map: null,
				}
			}
		},
	}
}
