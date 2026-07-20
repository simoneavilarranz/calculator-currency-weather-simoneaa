<script setup>
import ElTiempoService from '@/core/services/ElTiempoService';
import axios from 'axios';
import { ref, onMounted } from 'vue'

onMounted(async () => {
    await weatherSpain()
    const madrid = ciudades.value.find(c => c.name === 'Madrid')
    if (madrid) {
        selectedCiudad.value = madrid.id[0]
        await loadCiudadData()
    }
})

const currentWeather = ref('Madrid')
const maxTemp = ref('')
const minTemp = ref('')
const weatherDesc = ref('')
const municipios = ref([])
const selectedMunicipio = ref('')
const ciudades = ref([])
const selectedCiudad = ref('')
const skyId = ref('')

const skyImages = {
    '11': '☀️',
    '12': '🌤️',
    '13': '⛅',
    '17': '☁️',
    '23': '🌧️',
    '43': '🌦️',
    '45': '🌧️',
}

const tiempoService = new ElTiempoService();

async function weatherSpain() {
    municipios.value = []
    try {
        const data = await tiempoService.getGeneral()
        ciudades.value = data.ciudades
    } catch (error) {
        console.error('Error', error)
    }
}

async function loadCiudadData() {
    if (!selectedCiudad.value) return
    const ciudad = ciudades.value.find(c => c.id[0] === selectedCiudad.value)
    if (ciudad) {
        currentWeather.value = ciudad.name
        maxTemp.value = ciudad.temperatures.max
        minTemp.value = ciudad.temperatures.min
        weatherDesc.value = ciudad.stateSky.description
        skyId.value = ciudad.stateSky.id
    }
}

async function weatherAsturias() {
    ciudades.value = []
    try {
        const data = await tiempoService.getMunicipios('33')
        municipios.value = data.municipios
    } catch (error) {
        console.error('Error', error)
    }
}

async function loadMunicipioData() {
    if (!selectedMunicipio.value) return
    try {
        const data = await tiempoService.getDatosMunicipio(selectedMunicipio.value)
        console.log(data)
        currentWeather.value = data.municipio?.NOMBRE || data.title || ''
        maxTemp.value = data.temperaturas?.max || ''
        minTemp.value = data.temperaturas?.min || ''
        weatherDesc.value = data.stateSky?.description || ''
        skyId.value = data.stateSky?.id || ''
    } catch (error) {
    }
}

/* async function weatherAsturias() {
    try {
        const response = await fetch('https://api.el-tiempo.net/json/v3/provincias/33/municipios/33044')

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }
        const data = response.json()

        console.log(data)

        currentWeather.value = data.municipio.NOMBRE
        maxTemp.value = data.temperaturas.max
        minTemp.value = data.temperaturas.min
        weatherDesc.value = data.stateSky.description
    } catch (error) {
        console.error('Error', error)
    }
} */

</script>

<template>
    <div class="bg-gray-700 rounded-xl shadow-2xl p-4 w-sm">
        <div class="grid grid-cols-2 gap-2">
            <button class="p-3 rounded-lg text-white font-bold text-md bg-red-500 hover:brightness-160"
                @click="weatherSpain">Spain</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-green-500 hover:brightness-130"
                @click="weatherAsturias">Asturias</button>
            <select class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130 col-span-full"
                v-show="ciudades.length > 0" v-model="selectedCiudad" @change="loadCiudadData">
                <option value="" disabled>Selecciona ciudad</option>
                <option v-for="c in ciudades" :key="c.id[0]" :value="c.id[0]">
                    {{ c.name }}
                </option>
            </select>
            <select class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130 col-span-full"
                v-show="municipios.length > 0" v-model="selectedMunicipio" @change="loadMunicipioData">
                <option value="" disabled>Selecciona municipio</option>
                <option v-for="m in municipios" :key="m.COD_GEO" :value="m.COD_GEO">
                    {{ m.NOMBRE }}
                </option>
            </select>
            <div class="grid grid-cols-2 gap-1 col-span-full">
                <h1 class="p-3 text-white font-bold text-lg text-center">Max</h1>
                <h1 class="p-3 text-white font-bold text-lg text-center">Min</h1>
                <h1 class="p-3 text-white font-bold text-lg text-center">{{ maxTemp }}</h1>
                <h1 class="p-3 text-white font-bold text-lg text-center">{{ minTemp }}</h1>
            </div>
            <img src="" alt="">
            <p class="text-4xl text-center col-span-full">{{ skyImages[skyId] || '🌈' }}</p>
            <p class="p-3 text-white font-bold text-lg text-center col-span-full"> {{ weatherDesc }}</p>
        </div>
    </div>
</template>

<style scoped></style>