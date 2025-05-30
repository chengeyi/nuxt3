<template>
  <div>
    <!-- <IronManWelcome />
    <CaHellow />
    {{ name }}
    {{ double }}
    <NuxtPage />
    <NuxtLayout >
      <template #header>
        <p class="px-6 pt-4 text-xl text-green-500">這段會放置在 header 插槽</p>
      </template>
<template #default>
        <p class="px-6 pt-4 text-xl text-cyan-500">
          被 NuxtLayout 包裹的元件將會放置到 Layout 的預設 slot 中
        </p>
      </template>
<template #footer>
        <p class="px-6 pt-4 text-xl text-blue-500">這段會放置在 footer 插槽</p>
      </template>
</NuxtLayout> -->

    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>

      <!-- 在伺服器端渲染時，<ClientOnly> 內的東西會被略過（顯示空白佔位）在 client 掛載後，元件才會實際被渲染出來 -->
      <!-- 在 Nuxt 使用 SSR（伺服器端渲染）時，頁面第一次是由伺服器產生 HTML 然後送到瀏覽器。
      有些元件或插件會依賴瀏覽器 API，例如：

      window, document

      瀏覽器專用的圖表庫（如 Chart.js）

      地圖元件（如 Leaflet、Google Maps）

      動畫庫（如 Anime.js）

      這些在 SSR 階段是無法運行的，會導致錯誤。 -->
      <!-- <ClientOnly>
        <IronManWelcome />
      </ClientOnly> -->


      <ClientOnly>
        <IronManWelcome />
        <template #fallback>
          <p class="my-6 flex justify-center">[IronManWelcome] 載入中...</p>
        </template>
      </ClientOnly>
      <JustClient />
      <ClientAndServer />
    </div>
  </div>
</template>
<script lang="ts" setup>
const year: number = 2022
const title: string = `${year} iThome 鐵人賽`
const name = ref<string>('tony')
const count = ref(1)
const double = computed(() => count.value * 2)
navigateTo({
  name: 'articles-id',
  params: { id: '123' },
})
</script>
