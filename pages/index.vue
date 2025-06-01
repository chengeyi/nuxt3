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
    {{ a }}
    {{ data }}
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
      <div class="my-4 flex flex-col space-y-4">
        <NuxtLink to="/count/useAsyncData">前往 /count/useAsyncData</NuxtLink>
        <NuxtLink to="/count/useLazyAsyncData">前往 /count/useLazyAsyncData</NuxtLink>
        <NuxtLink to="/abbout/useFetch">前往 /about/useFetch</NuxtLink>
        <div @click="() => refresh()">aaaa</div>
        <div @click="teat += 1">{{ teat }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

let teat = ref(1)
const { data: a, pending: b, error: c, refresh } = await useFetch('/api/count', {
  //只從 JSON 物件中取的某幾個 key 組成新的物件。
  // pick: ['name', 'counter'],

  // 跟server: false效果一樣
  // key: 'giftBagInfo-' + Date.now(),

  // 這樣會直接先印出console.log(a.value) 並且拿不到資料 是null
  // server: false,

  // 預設為 true，請求將會立即觸發。 或許可以用來判斷當小時打從登入頁回來就先是false等到狀態變了在watch
  // immediate: false,

  // 監聽 ref 或 reactive 響應式資料發生變化時，觸發重新請求資料，適用於資料分頁、過濾結果或搜尋等情境。
  // watch: [teat],

  // 修改加工 handler 回傳結果的函數。 
  // transform: (a: any) => {
  //   console.log('transform', a)
  //   // 這裡可以對資料進行轉換或處理
  //   a = 1;
  //   return a;
  // },

  // csr才會印出response
  onResponse({ request, response, options }) {
    console.log('request', request)
    console.log('response', response)
    console.log('response', response._data)
    // 處理請求回應的資料
    return response._data
  }
})
console.log(a.value)

onMounted(() => {
  let orgCategory = [
    { categoryId: 1, name: 'A' },
    { categoryId: 4, name: 'D' },
    { categoryId: 3, name: 'C' },
  ];
  let category = [
    { categoryId: 1, name: 'A' },
    { categoryId: 2, name: 'B' },
    { categoryId: 4, name: 'D' },
  ];
  const diffCategory = category.length !== orgCategory.length
    ? category
    : category.filter(
      (item: { categoryId: number }, index: number, arr) => {
        console.log('arr', arr);
        const orgItem = orgCategory[index];
        console.log('orgItem', orgItem);
        return !orgItem || orgItem.categoryId !== item.categoryId;
      }
    );
  console.log('diffCategory', diffCategory);
})
// const { data, pending, error, refresh } = await useFetch('/api/about', {
//     // pick: ['name', 'counter'],
//   //   onResponse({ request, response, options }) {
//   //     console.log('response', response)
//   //   // 處理請求回應的資料
//   //   return response._data
//   // },
// })
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



// useFetch內的響應數據改變會自動重新觸發 但不能深度監聽 所以要拿computed包
// const route = useRoute()
// const currentPage = computed(() => parseInt(route?.query?.page) || 1)
// const {
//   pending,
//   data: articlesResponse,
//   error
// } = await useFetch('/api/articles', {
//   query: {
//     page: currentPage,
//     pageSize: 10        
//   }
// })
const {data} = useFetch("https://api.nuxtjs.dev/mountains")



// definePageMeta({
//   middleware: defineNuxtRouteMiddleware(() => {
//     console.log(`[匿名中間件] 我是直接定義在頁面內的匿名中間件`)
//   })
// })

definePageMeta({
  middleware: 'random-redirect'
})

if (process.server) {
  const headers = useRequestHeaders()
  console.log('SSR headers:', headers)
}


const token = useCookie('sss')
console.log(token.value)  // 讀取 cookie 值
token.value = '456'
</script>