<script setup>
  import { ref } from 'vue';
  import Calculator from './components/Calculator.vue';
  import Currency from './components/Currency.vue';
  import Weather from './components/Weather.vue';

  const activeView = ref('calculator')
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <div class="inline-flex mb-4">
      <button class="hover:bg-gray-400 font-bold py-2 px-4 rounded-l-lg" :class="activeView === 'calculator' ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-800'" @click="activeView = 'calculator'">Calculadora</button>
      <button class="hover:bg-gray-400 font-bold py-2 px-4" :class="activeView === 'converter' ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-800'" @click="activeView = 'converter'">Conversor</button>
      <button class="hover:bg-gray-400 font-bold py-2 px-4 rounded-r-lg" :class="activeView === 'weather' ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-800'" @click="activeView = 'weather'">Tiempo</button>
    </div>
    <Calculator v-show="activeView === 'calculator'"></Calculator>
    <Currency v-show="activeView === 'converter'"></Currency>
    <Weather v-show="activeView === 'weather'"></Weather>
  </div>
</template>

<style scoped></style>
