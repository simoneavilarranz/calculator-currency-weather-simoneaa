<script setup>
    import { ref } from 'vue';

    const display = ref('0')

    

    function addNumber(num) {
        if (display.value === '0') {
            display.value = num
        } else {
            display.value += num
        }
    }

    function clear() {
        display.value = '0'
    }

</script>

<template>
    <div>
        <input type="text" v-model="display"></input>
        <div>
            <button @click="addNumber('7')">7</button>
            <button @click="addNumber('8')">8</button>
            <button @click="addNumber('9')">9</button>
            <button>/</button>
            <button @click="addNumber('4')">4</button>
            <button @click="addNumber('5')">5</button>
            <button @click="addNumber('6')">6</button>
            <button>*</button>
            <button @click="addNumber('1')">1</button>
            <button @click="addNumber('2')">2</button>
            <button @click="addNumber('3')">3</button>
            <button>+</button>
            <button @click="addNumber('0')">0</button>
            <button>.</button>
            <button>=</button>
            <button>-</button>
            <button @click="clear">CE</button>
        </div>
    </div>
</template>

<style scoped></style>
