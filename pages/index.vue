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
    <div @click="sendMessage">WebSocket</div>
    {{ count }}
    <ClientOnly>
      <GoogleLogin :callback="callback" prompt />
    </ClientOnly>

    <button type="button" @click="handleGoogleLogin">
      使用 Google 繼續
    </button>
    使用者資訊:{{ userInfo }}
    {{ a }}
    {{ count }}
    <button @click="count += 1">aaa</button>
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
      <div class="my-4 flex flex-col space-y-4">
        <NuxtLink to="/count/useAsyncData">前往 /count/useAsyncData</NuxtLink>
        <NuxtLink to="/count/useLazyAsyncData">前往 /count/useLazyAsyncData</NuxtLink>
        <NuxtLink to="/abbout/useFetch">前往 /about/useFetch</NuxtLink>
        <NuxtLink to="/posts/222">前往 Posts</NuxtLink>
        <button @click="toPost">前往 Posts</button>
        <div @click="() => refresh()">aaaa</div>
        <div @click="() => bbbb()">bbbb</div>
        <div @click="teat += 1">{{ teat }}</div>
      </div>
    </div>
    <div>{{ person }}</div>
    <button @click="change">修改</button>
    <div>is new images</div>
    <div>is new images2</div>
    <div>is new images3</div>
    <div>test CICD</div>
  </div>
</template>
<script setup lang="ts">
// const { count, increment } = useCountersss()
import { googleTokenLogin } from 'vue3-google-login'

import { useCounter } from '@/composables/time/useDateFormat'
// const { count, increment } = useCountersss()
const { count, increment } = useCounter()

const toPost = () => {
  navigateTo({
    name: 'posts-postid',  // 動態路由會轉成這個格式
    params: {
      postid: 123
    },
    query: { from: 'home' }
  })
}
let teat = ref(1)
// const { data: a, pending: b, error: c, refresh } = await useFetch('/api/count', {
//   //只從 JSON 物件中取的某幾個 key 組成新的物件。
//   // pick: ['name', 'counter'],

//   // 跟server: false效果一樣
//   // key: 'giftBagInfo-' + Date.now(),

//   // 這樣會直接先印出console.log(a.value) 並且拿不到資料 是null
//   // server: false,

//   // 預設為 true，請求將會立即觸發。 或許可以用來判斷當小時打從登入頁回來就先是false等到狀態變了在watch
//   // immediate: false,

//   // 監聽 ref 或 reactive 響應式資料發生變化時，觸發重新請求資料，適用於資料分頁、過濾結果或搜尋等情境。
//   // watch: [teat],

//   // 修改加工 handler 回傳結果的函數。 
//   // transform: (a: any) => {
//   //   console.log('transform', a)
//   //   // 這裡可以對資料進行轉換或處理
//   //   a = 1;
//   //   return a;
//   // },

//   // csr才會印出response
//   onResponse({ request, response, options }) {
//     console.log('request', request)
//     console.log('response', response)
//     console.log('response', response._data)
//     // 處理請求回應的資料
//     return response._data
//   }
// })
// console.log(a.value)

onMounted(() => {
  var testVar = 1;
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
const { data } = useFetch("https://api.nuxtjs.dev/mountains")



// definePageMeta({
//   middleware: defineNuxtRouteMiddleware(() => {
//     console.log(`[匿名中間件] 我是直接定義在頁面內的匿名中間件`)
//   })
// })

definePageMeta({
  title: '123',
  middleware: 'random-redirect',
  layout: 'default'
})

if (process.server) {
  const headers = useRequestHeaders()
  console.log('SSR headers:', headers)
}


const token = useCookie('sss')
console.log(token.value)  // 讀取 cookie 值
token.value = '456'

const shouldFetch = ref(false);
const flag = ref(false);
if (process.server) {
  count.value += 1
  console.log('在伺服器執行')
  console.log(count.value)
  console.log(shouldFetch.value)
  shouldFetch.value = true
  setTimeout(() => {
    if (shouldFetch.value) {
      // flag.value = true
    }
    console.log(shouldFetch.value)
  }, 5000)
}

const { data: a, refresh } = await useFetch('/api/count', {
  immediate: shouldFetch.value,
  // immediate: false,
  // watch: [flag],
  onResponse({ response }) {
    console.log('resssssssssssssssponse', response._data)
  }
})
console.log(a.value)

const bbbb = () => {
  flag.value = !flag.value
}

if (process.client) {
  // 這段只會在瀏覽器執行（例如 DOM 操作、localStorage）
  console.log('在用戶端執行')
  console.log(count.value)
  setTimeout(() => {
    console.log(count.value)
  }, 2000)
}

// 環境變數
const runtimeConfig = useRuntimeConfig()
// const { apiBase } = runtimeConfig.public
console.log(toRaw(runtimeConfig))
// console.log(apiBase)

// 只能在 server 上取得
const secret = runtimeConfig.apiSecret
console.log('secret', secret)


// google oauth
const callback = (response: any) => {
  console.log(response)
}

const { googleClientId: GOOGLE_CLIENT_ID } = runtimeConfig.public
// const handleGoogleLogin = () => {
//   googleTokenLogin({
//     clientId: GOOGLE_CLIENT_ID
//   }).then((response) => {
//     console.log(response)
//   })
// }
const userInfo = ref()

const handleGoogleLogin = async () => {
  const accessToken = await googleTokenLogin({
    clientId: GOOGLE_CLIENT_ID
  }).then((response: any) => response?.access_token)

  if (!accessToken) {
    return '登入失敗'
  }

  const { data } = await useFetch('/api/auth/google', {
    method: 'POST',
    body: {
      accessToken
    },
    // initialCache: false
  })

  userInfo.value = data.value
}


// 連線 WebSocket
const message = ref('')
let socket: WebSocket | null = null
if (process.client) {
  socket = new WebSocket('ws://localhost:8080')

  socket.onopen = () => {
    console.log('WebSocket connected')
  }

  socket.onmessage = (event) => {
    console.log('From server:', event.data)
  }
}

// 定義在外層，template 才能訪問
const sendMessage = () => {
  if (socket) {
    socket.send('Hello Server!')
  }
}




// 判斷裝置
// const { $ua } = useNuxtApp()
// console.log($ua)
// console.log('裝置型態:', $ua.device.type) // mobile / tablet / undefined (桌機)
// console.log('作業系統:', $ua.os.name)     // iOS / Android / macOS / Windows
// console.log('瀏覽器:', $ua.browser.name)  // Chrome / Safari / Edge / ...


const person = reactive({
  name: 'tony',
  age: 18,
  a:{
    b:123
  }
})
const change = () => {
  // person = {
  //   name: 'tony123',
  //   age: 18,
  //   a:{
  //     b:123
  //   }
  // }
  // person.name= 'tony123'
  person.a={
    b:456
  }
  // person.a.b=456
}
watch(()=>person.a, (newVal, oldVal) => {
  console.log( newVal, oldVal)
}, 
// { deep: true }
)

// ref 監視整個物件 要整個物件改才會監視到 若也要監視物件內的屬性要用 deep: true
// ref 只監聽物件內某一個屬性變化 要用()=>person.value.name 如果監視裡面的某個物件也要整個物件改才會監視到 若也要監視物件內的屬性要用 deep: true
// reactive 默認開啟 deep: true 其餘跟第一個ref情形一樣
// reactive 監聽物件內某一個屬性變化 要用()=>person.name
</script>