import { describe, it, expect, vi } from 'vitest'
import { useWeather } from '@/composables/useWeather'

describe('useWeather', () => {
  const mockCiudades = [
    {
      id: ['28079'],
      name: 'Madrid',
      temperatures: { max: '35', min: '21' },
      stateSky: { description: 'Despejado', id: '11' },
    },
    {
      id: ['08019'],
      name: 'Barcelona',
      temperatures: { max: '30', min: '24' },
      stateSky: { description: 'Poco nuboso', id: '12' },
    },
  ]

  const mockService = {
    getGeneral: vi.fn().mockResolvedValue({ ciudades: mockCiudades }),
  }

  it('should load ciudad data correctly', async () => {
    const {
      ciudades,
      selectedCiudad,
      loadCiudadData,
      maxTemp,
      minTemp,
      weatherDesc,
      skyId,
      weatherSpain,
    } = useWeather(mockService)

    await weatherSpain()
    selectedCiudad.value = '28079'
    await loadCiudadData()

    expect(maxTemp.value).toBe('35')
    expect(minTemp.value).toBe('21')
    expect(weatherDesc.value).toBe('Despejado')
    expect(skyId.value).toBe('11')
  })

  it('should change emoji based on skyId', async () => {
    const { skyImages, selectedCiudad, loadCiudadData, skyId, weatherSpain } =
      useWeather(mockService)

    await weatherSpain()
    selectedCiudad.value = '08019'
    await loadCiudadData()

    expect(skyId.value).toBe('12')
    expect(skyImages[skyId.value]).toBe('🌤️')
  })

  it('should load different city data', async () => {
    const { selectedCiudad, loadCiudadData, maxTemp, currentWeather, weatherSpain } =
      useWeather(mockService)

    await weatherSpain()

    selectedCiudad.value = '28079'
    await loadCiudadData()
    expect(currentWeather.value).toBe('Madrid')
    expect(maxTemp.value).toBe('35')

    selectedCiudad.value = '08019'
    await loadCiudadData()
    expect(currentWeather.value).toBe('Barcelona')
    expect(maxTemp.value).toBe('30')
  })
})
