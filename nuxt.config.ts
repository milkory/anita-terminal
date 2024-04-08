// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@bootstrap-vue-next/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    'nuxt-icon',
    '@nuxtjs/seo'
  ],
  css: ['~/assets/scss/main.scss'],
  image: {
    quality: 80
  },
  site: {
    url: 'https://anita.wiki',
    name: '阿妮塔终端 / Anita Terminal',
    description: '阿妮塔终端向列车长们提供各类《雷索纳斯》游戏相关工具。',
    defaultLocale: 'zh'
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls']
  }
});
