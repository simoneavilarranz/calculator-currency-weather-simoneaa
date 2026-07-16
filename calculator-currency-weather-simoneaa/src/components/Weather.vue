<script setup>
     import axios from 'axios';
    import { ref } from 'vue'

    const viewMode = ref('nacional')
    const weatherData = ref(null)
    const currentWeather = ref('Spain')
    const maxTemp = ref('')
    const minTemp = ref('')
    const weatherDesc = ref('')

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

    /*async function weatherAsturias() {
        try{
            const response = await axios.get('/api-tiempo/json/v3/provincias/33', {
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                }
            })
            const data = response.data
            currentWeather.value = data.name
            maxTemp.value = data.temperatures.max
            minTemp.value = data.temperatures.min
            weatherDesc.value = data.stateSky.description
        }
        catch (error) {
            console.error('Error', error)
        }
    }*/

    async function weatherAsturias() {
        try {
            const response = await fetch('https://api.el-tiempo.net/json/v3/provincias/33/municipios/33044')
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`)
            }
            const data = await response.json()

            console.log(data)

            currentWeather.value = data.municipio.NOMBRE
            maxTemp.value = data.temperaturas.max
            minTemp.value = data.temperaturas.min
            weatherDesc.value = data.stateSky.description
        } catch (error) {
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