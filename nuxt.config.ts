// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components/ui',
      extensions: ['vue'],
      pathPrefix: false,
    },
    {
      path: '~/components',
      extensions: ['vue'],
      pathPrefix: false,
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
