// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@bootstrap-vue-next/nuxt', '@nuxtjs/eslint-module', '@nuxt/image'],
  css: ['~/assets/scss/main.scss']
});
