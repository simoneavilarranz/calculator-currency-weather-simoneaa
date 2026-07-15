<script setup>
     
</script>

<template>
    <div class="bg-gray-700 rounded-xl shadow-2xl p-4 w-sm">
        <input type="text" class="p-3 rounded-lg text-black font-regular text-lg w-full mb-4 bg-gray-100" v-model="amount"></input>
        <div class="grid grid-cols-2 gap-2">
            <button class="p-3 rounded-lg text-white font-bold text-md bg-red-500 hover:brightness-160">Spain</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-green-500 hover:brightness-130">Asturias</button>
            <h1 class="p-3 text-white font-bold text-lg text-center col-span-full">{{ currentWeather }}</h1>
            <div class="grid grid-cols-2 gap-2">
                <h1>Max</h1>
                <h1>Min</h1>
                <h1>{{ maxTemp }}</h1>
                <h1>{{ minTemp }}</h1>
            </div>
            <img src="" alt="">
            <p>{{ weatherDesc }}</p>
        </div>
    </div>
</template>

<style scoped></style>