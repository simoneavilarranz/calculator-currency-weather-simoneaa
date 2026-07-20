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

  it('substract two numbers', () => {
    const { display, addNumber, setOperator, calculate } = useCalculator()

    addNumber('3')
    setOperator('-')
    addNumber('2')
    calculate()

    expect(display.value).toBe('1')
  })

  it('should do three operations in a row', () => {
    const { display, addNumber, setOperator, calculate } = useCalculator()

    addNumber('3')
    setOperator('-')
    addNumber('2')
    setOperator('+')
    addNumber('2')
    calculate()

    expect(display.value).toBe('3')
  })

  it('should show Error when dividing by zero', () => {
    const { display, addNumber, setOperator, calculate } = useCalculator()

    addNumber('5')
    setOperator('/')
    addNumber('0')
    calculate()

    expect(display.value).toBe('Error')
  })
  it('should clear when pressing CE', () => {
    const { display, addNumber, clear } = useCalculator()

    addNumber('5')
    clear()

    expect(display.value).toBe('0')
  })
})
