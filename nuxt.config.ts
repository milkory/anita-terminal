// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@bootstrap-vue-next/nuxt', '@nuxtjs/eslint-module', 'nuxt-icon', '@nuxtjs/seo'],
  css: ['~/assets/scss/main.scss'],
  site: {
    url: 'https://anita.wiki',
    name: '阿妮塔终端 / Anita Terminal',
    description: '阿妮塔终端向列车长们提供《雷索纳斯》游戏Wiki和各类相关工具。',
    defaultLocale: 'zh'
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls']
  },
  seo: {
    fallbackTitle: false
  }
});
