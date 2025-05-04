<template>
    <div class="my-24 flex flex-col items-center">
        <p class="text-2xl text-gray-600">
            請求狀態:
            {{ pending ? '請求中' : '完成' }}
        </p>
        <span v-if="error" class="mt-4 text-6xl text-gray-600">是否錯誤: {{ error }}</span>
        <span class="mt-4 text-2xl text-gray-600">回傳資料:</span>
        <p class="mt-4 text-3xl font-semibold text-blue-500">{{ data }} {{ a }}</p>
        <button
            class="mt-6 rounded-sm bg-blue-500 py-3 px-8 text-xl font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            @click="refresh">
            重新獲取資料
        </button>
        <button
            class="mt-6 rounded-sm bg-blue-500 py-3 px-8 text-xl font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            @click="d">
            重新獲取資料2
        </button>
    </div>
</template>

<script setup>
//   加上 pick 之後，data.value 會變成：
// {
//   name: "Nuxt",
//   counter: 42
// }
const { data, pending, error, refresh } = await useFetch('/api/about', {
    pick: ['name', 'counter']
})

const { data:a, pending:b, error:c, refresh:d } = await useFetch('/api/count', {
    
})

// 設置攔截器
// const { data, pending, error, refresh } = await useFetch('/api/auth/login', {
//     onRequest({ request, options }) {
//         // 設定請求時夾帶的標頭
//         options.headers = options.headers || {}
//         options.headers.authorization = '...'
//     },
//     onRequestError({ request, options, error }) {
//         // 處理請求時發生的錯誤
//     },
//     onResponse({ request, response, options }) {
//         // 處理請求回應的資料
//         return response._data
//     },
//     onResponseError({ request, response, options }) {
//         // 處理請求回應發生的錯誤
//     }
// })


// 頁面初始資料且要 SSR：用 useAsyncData

// 懶加載資料、不要 SSR：用 useLazyAsyncData

// 常用 REST API、有傳參數、加 header 等需求：用 useFetch
</script>