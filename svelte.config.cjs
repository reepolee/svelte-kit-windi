const node = require("@sveltejs/adapter-node");
const pkg = require("./package.json");
const windi = require("svelte-windicss-preprocess");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  preprocess: windi.preprocess({
    config: "windi.config.cjs",
    compile: false,
    prefix: "windi-",
  }),

  kit: {
    adapter: node(),
    target: "#svelte",

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
};
