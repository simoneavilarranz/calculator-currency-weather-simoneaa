import ElTiempoService from '@/core/services/ElTiempoService'
import axios from 'axios'
import { ref, onMounted } from 'vue'

export function useWeather(tiempoService = new ElTiempoService()) {
  onMounted(async () => {
    await weatherSpain()
    const madrid = ciudades.value.find((c) => c.name === 'Madrid')
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
    11: '☀️',
    12: '🌤️',
    13: '⛅',
    17: '☁️',
    23: '🌧️',
    43: '🌦️',
    45: '🌧️',
  }

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
    const ciudad = ciudades.value.find((c) => c.id[0] === selectedCiudad.value)
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
    } catch (error) {}
  }

  return {
    currentWeather,
    maxTemp,
    minTemp,
    weatherDesc,
    municipios,
    selectedMunicipio,
    ciudades,
    selectedCiudad,
    skyId,
    skyImages,
    weatherSpain,
    weatherAsturias,
    loadCiudadData,
    loadMunicipioData,
  }
}
