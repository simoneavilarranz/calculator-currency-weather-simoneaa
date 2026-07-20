import { describe, it, expect, vi } from 'vitest'
import { useCurrency } from '@/composables/useCurrency'
import axios from 'axios'

vi.mock('axios')

describe('useCurrency', () => {
  it('should convert USD to EUR correctly', async () => {
    axios.get.mockResolvedValue({
      data: { rates: { EUR: '0.92', USD: '1', JPY: '149' } },
    })

    const { amount, fromCurrency, toCurrency, result, convertCurrency } = useCurrency()

    amount.value = '100'
    fromCurrency.value = 'USD'
    toCurrency.value = 'EUR'

    await convertCurrency()

    expect(result.value).toBe('92.00')
  })
})
