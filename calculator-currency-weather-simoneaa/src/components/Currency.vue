<script setup>
    import { ref } from 'vue';



</script>

<template>
    <div class="bg-gray-700 rounded-xl shadow-2xl p-4 w-sm h-96">
        <input type="text" class="p-3 rounded-lg text-black font-regular text-lg w-full mb-4 bg-gray-100" v-model="display"></input>
        <div class="grid grid-cols-2 gap-2">
            <select class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130">
                <option value="" disabled selected>Select currency</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="JPY">JPY</option>
            </select>
            <select class="p-3 rounded-lg text-white font-bold text-md bg-gray-600 hover:brightness-130">
                <option value="" disabled selected>Select currency</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="JPY">JPY</option>
            </select>
            <button class="p-3 rounded-lg text-white font-bold text-md bg-red-500 col-span-full hover:brightness-130">Convert</button>
            <h1 class="p-3 text-white font-bold text-lg text-center col-span-full">Converted Amount</h1>
            <div class="p-3 rounded-lg text-black font-regular text-lg w-full bg-gray-100 min-h-[48px] flex items-center">
                {{ result }}
            </div>
            <div class="p-3 rounded-lg text-black font-regular text-lg w-full bg-gray-100 min-h-[48px] flex items-center">
                {{ result }}
            </div>
        </div>
    </div>
</template>

<style scoped></style>
