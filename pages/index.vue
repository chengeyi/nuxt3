<!-- <template>
    <div class="bg-white py-24">
      <div class="flex flex-col items-center">
        <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
        <div class="my-4 flex space-x-4">
          <NuxtLink to="/posts">前往 Posts</NuxtLink>
          <NuxtLink to="/about">前往 About</NuxtLink>
          <NuxtLink to="/contact">前往 Contact</NuxtLink>
        </div>
      </div>
    </div>
  </template> -->
<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
      <div class="my-4 flex flex-col space-y-4">
        <NuxtLink to="/count/useAsyncData">前往 /count/useAsyncData</NuxtLink>
        <NuxtLink to="/count/useLazyAsyncData">前往 /count/useLazyAsyncData</NuxtLink>
        <NuxtLink to="/abbout/useFetch">前往 /about/useFetch</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// const toAbout = async () => {
//     await navigateTo('/about')
//     // await navigateTo({ path: '/about' })
//     // await navigateTo({
//     //     path: '/about',
//     //     query: {
//     //         page: 1,
//     //         sort: 'asc'
//     //     }
//     // })
// }

// const toAboutParams = async () => {
//     await navigateTo({
//         name: 'aboutParams-id', // 對應 pages/user/[id].vue
//         params: { id: '123' }
//     })
// }


// const isLoggedIn = ref(false)

// // layout 切換：根據登入狀態決定 layout
// watchEffect(() => {
//     console.log('inn')
//     setPageLayout(isLoggedIn.value ? 'dashboard' : 'default')
// })

// const toggleLogin = () => {
//     isLoggedIn.value = !isLoggedIn.value
// }
</script>