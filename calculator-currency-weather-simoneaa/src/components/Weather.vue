<script setup>
     import axios from 'axios';
import { ref } from 'vue'

    const viewMode = ref('nacional')
    const weatherData = ref(null)

    const skyImages = {
        
    }

    async function weatherSpain() {
        try{
            const response = await axios.get('https://api.el-tiempo.net/json/v3/general')
        }
        catch (error) {
            console.error('Error', error)
        }
    }

    async function weatherAsturias() {
        try{
            const response = await axios.get('https://api.el-tiempo.net/json/v3/provincias/33')
        }
        catch (error) {
            console.error('Error', error)
        }
    }

</script>

<template>
    <div class="bg-gray-700 rounded-xl shadow-2xl p-4 w-sm">
        <div class="grid grid-cols-2 gap-2">
            <button class="p-3 rounded-lg text-white font-bold text-md bg-red-500 hover:brightness-160" @click="weatherSpain">Spain</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-green-500 hover:brightness-130" @click="weatherAsturias">Asturias</button>
            <h1 class="p-3 text-white font-bold text-lg text-center col-span-full">{{ currentWeather }}</h1>
            <div class="grid grid-cols-2 gap-2">
                <h1 class="p-3 text-white font-bold text-lg text-center">Max</h1>
                <h1 class="p-3 text-white font-bold text-lg text-center">Min</h1>
                <h1 class="p-3 text-white font-bold text-lg text-center">{{ maxTemp }}</h1>
                <h1 class="p-3 text-white font-bold text-lg text-center">{{ minTemp }}</h1>
            </div>
            <img src="" alt="">
            <p>{{ weatherDesc }}</p>
        </div>
    </div>
</template>

<style scoped></style>