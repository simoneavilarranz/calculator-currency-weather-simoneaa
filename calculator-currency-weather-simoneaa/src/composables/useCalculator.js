// src/composables/useCalculator.js
import { ref } from 'vue'

export function useCalculator() {
  const display = ref('0')
  const previousValue = ref('')
  const justCalculated = ref(false)
  const currentOperator = ref(null)

  function addNumber(num) {
    if (justCalculated.value) {
      display.value = '0'
      justCalculated.value = false
    }
    if (display.value === '0') {
      display.value = num
    } else {
      display.value += num
    }
  }

  function addDot() {
    if (!display.value.includes('.')) {
      display.value += '.'
    }
  }

  function setOperator(op) {
    if (currentOperator.value) {
      calculate()
    }
    previousValue.value = display.value
    currentOperator.value = op
    display.value = '0'
  }

  function calculate() {
    const prev = parseFloat(previousValue.value)
    const curr = parseFloat(display.value)

    if (currentOperator.value === '+') {
      display.value = (prev + curr).toString()
    } else if (currentOperator.value === '-') {
      display.value = (prev - curr).toString()
    } else if (currentOperator.value === '*') {
      display.value = (prev * curr).toString()
    } else if (currentOperator.value === '/') {
      if (curr === 0) {
        display.value = 'Error'
        return
      }
      display.value = (prev / curr).toString()
    }

    currentOperator.value = null
    previousValue.value = ''
    justCalculated.value = true
  }

  function clear() {
    display.value = '0'
  }

  return {
    display,
    previousValue,
    justCalculated,
    currentOperator,
    addNumber,
    addDot,
    setOperator,
    calculate,
    clear,
  }
}
