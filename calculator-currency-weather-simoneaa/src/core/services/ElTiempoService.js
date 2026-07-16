import axios from 'axios'

export default class ElTiempoService {
  async getProvincias() {
    try {
      const response = await axios.get('https://api.el-tiempo.net/json/v3/provincias')
      return response.data
    } catch (error) {
      console.error('Error', error)
      throw error
    }
  }

  async getMunicipios(codProvincia) {
    try {
      const response = await axios.get(
        `https://api.el-tiempo.net/json/v3/provincias/${codProvincia}/municipios`,
      )
      return response.data
    } catch (error) {
      console.error('Error', error)
      throw error
    }
  }
}
