// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/seo'],
  // 環境變數
  runtimeConfig: {
    apiSecret: '怎麼可以讓你知道呢 :P',
    // 添加在 runtimeConfig.public 屬性的環境變數，在伺服器端與客戶端都可以讀取得
    public: {
      apiBase: '/api',
      googleClientId: '207229954822-10a1gp5leaj9pokgscm1kkniorsv2fcn.apps.googleusercontent.com'
    }
  },
  appConfig: {
    theme: {
      primaryColor: '#0ea5e9'
    }
  }
})
