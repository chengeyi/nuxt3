export default defineNuxtPlugin((nuxtApp) => {
    // 全域錯誤觸發
    nuxtApp.hook('vue:error', (error, instance, info) => {
        // const globalStore = useGlobalStore()
        // const { refreshKey, hasReloadedAfterLoadFailed } = storeToRefs(globalStore)
        // const message = error instanceof Error ? error.message : String(error)
        // if (message.includes('Load failed')) {
        //     console.log('進來Load failed')
        //     if (hasReloadedAfterLoadFailed.value) return
        //     console.log('進來Load failed2')
        //     hasReloadedAfterLoadFailed.value = true
        //     setTimeout(() => {
        //         console.log('準備重整')
        //         // refreshKey.value += 1
        //         console.log('重整了')
        //     }, 500)
        // } else {
        //     // 其他錯誤
        //     console.error('[vue:error]', message)
        // }
    })
})