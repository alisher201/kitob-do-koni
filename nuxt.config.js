// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  imports: {
    dirs: ["store"],
  },
<<<<<<< HEAD
  modules: ["@nuxt/devtools", "@pinia/nuxt", 'nuxt-swiper','@vee-validate/nuxt',],
=======
  modules: ["@nuxt/devtools", "@pinia/nuxt", 'nuxt-swiper'],
>>>>>>> ee90e53da642864c21b59e8a1fa2637af6fc5ded
  extends: ["nuxt-seo-kit"],
  routeRules: {
    "/**": { robots: "index, follow" },
  },
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL,
      siteName: "Kitob",
      siteDescription:
        "A Full StoreFront built with Nuxt 3 + Pinia 2 + Bootstrap 5....",
      language: "en-US",
    },
  },
<<<<<<< HEAD
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
=======
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }, { src: "~/plugins/i18n.js" }],
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
    
>>>>>>> ee90e53da642864c21b59e8a1fa2637af6fc5ded
  },
  css: ["~/assets/styles/main.scss"],
  render: {
    csp: {
      hashAlgorithm: "sha256",
      policies: {
        "script-src": ["'self'", "*.vercel-insights.com"],
      },
      addMeta: true,
    },
  },
  devtools: { enabled: false },
  ssr: true,
  loading:  false,
  // server: {
  //   port: process.env.PORT || 3000,
  // },
<<<<<<< HEAD
  
=======
  i18n: {
    compilation: {
      strictMessage: true,
    },
  },

>>>>>>> ee90e53da642864c21b59e8a1fa2637af6fc5ded


});
