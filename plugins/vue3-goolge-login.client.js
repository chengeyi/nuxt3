import vue3GoogleLogin from 'vue3-google-login'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()
  const { googleClientId: GOOGLE_CLIENT_ID } = runtimeConfig.public
    console.log('GOOGLE_CLIENT_IDGOOGLE_CLIENT_IDGOOGLE_CLIENT_IDGOOGLE_CLIENT_IDGOOGLE_CLIENT_IDGOOGLE_CLIENT_ID',GOOGLE_CLIENT_ID)
  nuxtApp.vueApp.use(vue3GoogleLogin, {
    clientId: GOOGLE_CLIENT_ID
  })
})