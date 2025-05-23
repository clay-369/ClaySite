// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/ui", "@nuxt/icon", "@nuxt/fonts", "@nuxt/content"],
  router: {
    options: {
      hashMode: true,
      scrollBehaviorType: "smooth",
    },
  },
  components: [{ path: "~/components", pathPrefix: false }],
  app: {
    head: {
      title: "ClaySite",
      htmlAttrs: {
        lang: "nl",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
