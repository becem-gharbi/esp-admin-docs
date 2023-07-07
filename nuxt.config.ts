export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",

  modules: [
    "@nuxtjs/plausible",
    "nuxt-gtag",
    "@nuxtjs/tailwindcss",
  ],

  gtag: {
    id: process.env.GTAG_MEASUREMENT_ID,
  },

  tailwindcss: {
    viewer: false,
  },

  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap",
        },
      ],
    },
  },
});
