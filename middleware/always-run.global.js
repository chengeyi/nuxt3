// 【情況 1】使用者首次訪問網站（例：http://localhost:3000）
// 這時候會：
// 
// 在伺服器端執行 middleware
// 
// useRequestHeaders() 會有值（因為是 SSR）
// 
// navigateTo() 會直接讓伺服器返回 redirect 結果 → SSR 觸發跳轉

export default defineNuxtRouteMiddleware((to, from) => {
    console.log(`[全域中間件] to: ${to.path}, from: ${from.path}`)
    const headers = useRequestHeaders()
    console.log(`[全域中間件] Headers:`, headers)
    // if (to.path !== '/haha') {
    //     return navigateTo('/haha')
    // }
})