const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Crimson+Text"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Proxima+Nova"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/components", "~/plugins/filters"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "storyblok-nuxt",
      {
        accessToken:
          process.env.NODE_ENV == "production"
            ? "q6bXKsW90M76NxZmqWHOKwtt"
            : "eZKdoSclQQbchqb5P9rJdQtt",
        cacheProvider: "memory"
      }
    ]
  ],

  /*
   ** Router middleware
   */
  router: {
    middleware: "setCacheVersion"
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
