<template>
    <div class="bg-white py-24">
        <div class="flex flex-col items-center">
            <h1 class="text-6xl font-semibold text-yellow-400">大家好！我是 Ryan</h1>
            <p class="my-8 text-3xl text-gray-600">這裡是 /about 帶參數</p>
            <p class="my-8 text-3xl text-gray-600">
                匹配到的 Id: <span class="text-5xl font-semibold text-blue-600">{{ id }}</span> </p>
        </div>
    </div>
</template>
<script setup>
const route = useRoute()
const { id } = route.params
</script>