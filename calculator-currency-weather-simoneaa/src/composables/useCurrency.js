import { ref } from 'vue'
import axios from 'axios'

export function useCurrency() {
  const amount = ref('')
  const fromCurrency = ref('')
  const toCurrency = ref('')
  const result = ref('0.00')

  async function convertCurrency() {
    if (!amount.value || !fromCurrency.value || !toCurrency.value) {
      result.value = 'Completa todos los campos'
      return
    }

    try {
      const response = await axios.get(
        'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=d18a85a11ea94100ada8ab4456aa0598',
      )
      const rates = response.data.rates
      let conversionRate
      if (fromCurrency.value === 'USD') {
        conversionRate = parseFloat(rates[toCurrency.value])
      } else if (toCurrency.value === 'USD') {
        conversionRate = 1 / parseFloat(rates[fromCurrency.value])
      } else {
        conversionRate = parseFloat(rates[toCurrency.value]) / parseFloat(rates[fromCurrency.value])
      }

      result.value = (parseFloat(amount.value) * conversionRate).toFixed(2)
    } catch (error) {
      console.error('Error', error)
    }
  }

  return {
    amount,
    fromCurrency,
    toCurrency,
    result,
    convertCurrency,
  }
}
