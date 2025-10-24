// 列出所有 hook 並記錄 log
export default defineNuxtPlugin((nuxtApp) => {

    // app:created	Nuxt app 剛建立時（SSR、CSR 都會）	✅ SSR + ✅ CSR
    // app:beforeMount	應用即將在瀏覽器掛載前（只在 CSR）	❌ SSR / ✅ CSR
    // app:mounted	應用已經在 DOM 掛載後（只在 CSR）	❌ SSR / ✅ CSR
    // app:rendered	SSR 完成並產生 HTML	✅ SSR / ❌CSR
    // app:redirected	在 SSR 階段被 redirect 時	✅ SSR
    // app:error	app 發生錯誤時	✅ SSR + ✅ CSR
    // app:ready	Nuxt 應用就緒（等同於 mounted）	❌ SSR / ✅ CSR

    const hookList = [
        'app:created',
        'app:beforeMount',
        'app:mounted',
        'app:rendered',
        'app:redirected',
        'app:error',
        'app:resolveError',
        'app:pageTransitionStart',
        'app:pageTransitionEnd',
        'page:start',
        'page:finish',
        'page:transition:start',
        'page:transition:end',
        'app:render:context',
        'app:render:routeContext',
    ]

    hookList.forEach((hook) => {
        nuxtApp.hook(hook as any, (...args: any) => {
            console.log(`[Hook] ${hook}`) 
        })
    })
})