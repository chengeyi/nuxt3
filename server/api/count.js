const runtimeConfig = useRuntimeConfig()
let counter = 0

export default defineEventHandler(async () => {
    const { apiSecret } = runtimeConfig
    console.log(`執行時的環境變數 [apiSecret]: ${apiSecret}`)

    await new Promise((resolve) => setTimeout(resolve, 2000)) // 等待 2 秒

    counter += 1

    return JSON.stringify(counter)
})