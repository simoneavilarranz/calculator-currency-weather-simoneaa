<script setup>

import { useCalculator } from '@/composables/useCalculator'
const { display, addNumber, addDot, setOperator, calculate, clear } = useCalculator()

</script>

<template>
    <div class="bg-gray-700 rounded-xl shadow-2xl p-4 w-sm">
        <input type="text" class="p-3 rounded-lg text-black font-regular text-lg w-full mb-4 bg-gray-100"
            v-model="display"></input>
        <div class="grid grid-cols-4 gap-2">
            <button class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130"
                @click="addNumber('7')">7</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130"
                @click="addNumber('8')">8</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130"
                @click="addNumber('9')">9</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-orange-500 hover:brightness-130"
                @click="setOperator('/')">/</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130"
                @click="addNumber('4')">4</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130"
                @click="addNumber('5')">5</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130"
                @click="addNumber('6')">6</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-orange-500 hover:brightness-130"
                @click="setOperator('*')">*</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130"
                @click="addNumber('1')">1</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130"
                @click="addNumber('2')">2</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130"
                @click="addNumber('3')">3</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-orange-500 hover:brightness-130"
                @click="setOperator('+')">+</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130"
                @click="addNumber('0')">0</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130"
                @click="addDot">.</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-green-500 hover:brightness-130"
                @click="calculate">=</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-orange-500 hover:brightness-130"
                @click="setOperator('-')">-</button>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-red-500 col-span-full hover:brightness-160"
                @click="clear">CE</button>
        </div>
    </div>
</template>

<style scoped></style>
