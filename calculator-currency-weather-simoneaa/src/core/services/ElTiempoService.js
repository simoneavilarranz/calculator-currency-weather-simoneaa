import axios from 'axios'

export default class ElTiempoService {
  async getGeneral() {
    try {
      const response = await axios.get('https://api.el-tiempo.net/json/v3/general')
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

  async getDatosMunicipio(codMunicipio) {
    try {
      const response = await axios.get(
        `https://api.el-tiempo.net/json/v3/provincias/33/municipios/${codMunicipio}`,
      )
      return response.data
    } catch (error) {
      console.error('Error', error)
      throw error
    }
  }
}
