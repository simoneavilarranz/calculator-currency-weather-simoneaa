<script setup>
    import { ref } from 'vue';

    const display = ref('0')

    const previousValue = ref('')

    const justCalculated = ref(false)

    let currentOperator = ref()

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
        justCalculated.value = true
    }

    function clear() {
        display.value = '0'
    }

</script>

<template>
    <div class="bg-gray-700 rounded-xl shadow-2xl p-4 w-sm h-xl">
        <input type="text" class="p-3 rounded-lg text-black font-regular text-lg w-full mb-4 bg-gray-100" v-model="display"></input>
        <div class="grid grid-cols-2 gap-2">
            <button class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130">Select currency</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130">Select currency</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-red-500 col-span-full hover:brightness-130">Convert</button>
            <h1 class="p-3 text-white font-bold text-lg text-center col-span-full">Converted Amount</h1>
            <input type="text" class="p-3 rounded-lg text-black font-regular text-lg w-full mb-4 bg-gray-100"></input>
            <input type="text" class="p-3 rounded-lg text-black font-regular text-lg w-full mb-4 bg-gray-100"></input>
        </div>
    </div>
</template>

<style scoped></style>
