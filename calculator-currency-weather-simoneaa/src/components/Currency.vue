<script setup>
     import { ref } from 'vue'
     import axios from 'axios'

    const amount = ref('')
    const fromCurrency = ref('')
    const toCurrency = ref('')
    const result = ref('0.00')

    async function convertCurrency() {

        if (!amount.value || !fromCurrency.value || !toCurrency.value) {
            result
            return
        }

        try {
            const response = await axios.get('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=d18a85a11ea94100ada8ab4456aa0598')
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

</script>

<template>
    <div class="bg-gray-700 rounded-xl shadow-2xl p-4 w-sm">
        <input type="text" class="p-3 rounded-lg text-black font-regular text-lg w-full mb-4 bg-gray-100" v-model="amount"></input>
        <div class="grid grid-cols-2 gap-2">
            <select class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130" v-model="fromCurrency">
                <option value="" disabled selected>Select currency</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="JPY">JPY</option>
            </select>
            <select class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130" v-model="toCurrency">
                <option value="" disabled selected>Select currency</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="JPY">JPY</option>
            </select>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-red-500 col-span-full hover:brightness-130" @click="convertCurrency">Convert</button>
            <h1 class="p-3 text-white font-bold text-lg text-center col-span-full">Converted Amount</h1>
            <div class="p-3 rounded-lg text-black font-regular text-lg w-full bg-gray-100 min-h-12 flex items-center">
                {{ amount }} {{ fromCurrency }}
            </div>
            <div class="p-3 rounded-lg text-black font-regular text-lg w-full bg-gray-100 min-h-12 flex items-center">
                {{ result }} {{ toCurrency }}
            </div>
        </div>
    </div>
</template>

<style scoped></style>