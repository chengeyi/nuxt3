<template>
    <div class="bg-white py-24">
        <div class="flex flex-col items-center">
            <span class="text-9xl font-semibold text-sky-600">{{ count }}</span>
            <div class="mt-8 flex flex-row">
                <button
                    class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                    @click="counterStore.increment">
                    增加
                </button>
                <button
                    class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                    @click="counterStore.decrement">
                    減少
                </button>
            </div>
            <div class="mt-8">
                <NuxtLink to="/">回首頁</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()

const { count } = storeToRefs(counterStore)
const { increment, decrement } = counterStore;

const runtimeConfig = useRuntimeConfig()
const { apiBase } = runtimeConfig.public
console.log('Runtime Config:', runtimeConfig)
console.log('Runtime apiBase:', apiBase)


const appConfig = useAppConfig()
const { theme } = appConfig
console.log('theme:', theme)
</script>