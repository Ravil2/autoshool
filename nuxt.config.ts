// nuxt.config.ts

export default defineNuxtConfig({
  devtools: {enabled: true},

  css: [
      'bootstrap/dist/css/bootstrap.min.css',
      '@/css/main.css',
      '~/assets/scss/main.scss',
  ],
  ssr: false,
    modules: ["@vueuse/motion/nuxt"],
  app: {
      pageTransition: {name: 'page', mode: 'out-in'},
      head: {
          script: [
              {
                  src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
                  defer: true,
              },
          ],
      },
  },
  runtimeConfig: {
      public: {
      },
  },
  components: true,
  compatibilityDate: '2025-01-03',
})
