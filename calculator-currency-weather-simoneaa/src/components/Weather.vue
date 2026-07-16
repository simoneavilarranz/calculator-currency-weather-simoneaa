<script setup>
import ElTiempoService from '@/core/services/ElTiempoService';
import axios from 'axios';
import { ref, onMounted } from 'vue'

onMounted(async () => {
    await weatherSpain()
    selectedProvincia.value = '28'
    await loadProvinciaData()
})

const currentWeather = ref('Madrid')
const maxTemp = ref('')
const minTemp = ref('')
const weatherDesc = ref('')
const provincias = ref([])
const selectedProvincia = ref('')
const municipios = ref([])
const selectedMunicipio = ref('')

const skyImages = {

}

const tiempoService = new ElTiempoService();

async function weatherSpain() {
    municipios.value = []
    try {
        const data = await tiempoService.getProvincias()
        provincias.value = data.provincias
    } catch (error) {
        console.error('Error', error)
    }
}

async function weatherAsturias() {
    provincias.value = []
    try {
        const data = await tiempoService.getMunicipios('33')
        municipios.value = data.municipios
    } catch (error) {
        console.error('Error', error)
    }
}

async function loadProvinciaData() {
    if (!selectedProvincia.value) return
    try {
        const data = await tiempoService.getDatosProvincia(selectedProvincia.value)
        console.log(data)
        currentWeather.value = data.municipio?.NOMBRE || data.title || ''
        maxTemp.value = data.temperaturas?.max || ''
        minTemp.value = data.temperaturas?.min || ''
        weatherDesc.value = data.stateSky?.description || ''
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
    } catch (error) {
        console.error('Error', error)
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
                v-show="provincias.length > 0" v-model="selectedProvincia" @change="loadProvinciaData">
                <option value="" disabled>Selecciona provincia</option>
                <option v-for="p in provincias" :key="p.CODPROV" :value="p.CODPROV">
                    {{ p.NOMBRE_PROVINCIA }}
                </option>
            </select>
            <select class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130 col-span-full"
                v-show="municipios.length > 0" v-model="selectedMunicipio" @change="loadMunicipioData">
                <option value="" disabled>Selecciona municipio</option>
                <option v-for="m in municipios" :key="m.COD_GEO" :value="m.COD_GEO">
                    {{ m.NOMBRE }}
                </option>
            </select>
            <div class="grid grid-cols-2 gap-2 col-span-full">
                <h1 class="p-3 text-white font-bold text-lg text-center">Max</h1>
                <h1 class="p-3 text-white font-bold text-lg text-center">Min</h1>
                <h1 class="p-3 text-white font-bold text-lg text-center">{{ maxTemp }}</h1>
                <h1 class="p-3 text-white font-bold text-lg text-center">{{ minTemp }}</h1>
            </div>
            <img src="" alt="">
            <p class="p-3 text-white font-bold text-lg text-center col-span-full"> {{ weatherDesc }}</p>
        </div>
    </div>
</template>

<style scoped></style>