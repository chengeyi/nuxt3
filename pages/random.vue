<template>
    <div class="bg-white py-24">
        <div class="flex flex-col items-center">
            <span class="text-9xl font-semibold text-sky-400">{{ count }}</span>
        </div>
    </div>
</template>

<script setup>
//   因為 Nuxt 預設的渲染模式 Universal Rendering 在 SSR 時期，將 random.vue 內容於伺服器端渲染完成後亂出產生出 163 作為初始值，意即 const count = ref(163)，所以網頁先顯示了 163 這個數字，同時，瀏覽器的背景也正在下載客戶端所需要的 JS 準備接手做 CSR，當 JS 載入完成後又再一次的執行 Vue 元件的 const count = ref(Math.round(Math.random() * 1000)) 這段程式碼，此時亂數產生了 101 這個數字
// const count = ref(Math.round(Math.random() * 1000))

const count = useState('count', () => Math.round(Math.random() * 1000))
</script>