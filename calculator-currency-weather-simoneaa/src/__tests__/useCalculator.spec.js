import { describe, it, expect } from 'vitest'
import { useCalculator } from '@/composables/useCalculator'

describe('useCalculator', () => {
  it('add up two numbers', () => {
    const { display, addNumber, setOperator, calculate } = useCalculator()

    addNumber('2')
    setOperator('+')
    addNumber('3')
    calculate()

    expect(display.value).toBe('5')
  })
})
