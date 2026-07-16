import axios from 'axios'

export default class ElTiempoService {
  constructor() {
    this.get()
  }

  async get() {
    try {
      const response = await axios.get('https://api.el-tiempo.net/json/v3/provincias/33')
      const data = response.data
      console.log(data)
    } catch (error) {
      console.error('Error', error)
    }
  }
}
