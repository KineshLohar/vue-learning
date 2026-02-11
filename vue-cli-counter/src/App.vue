<script setup>
import { ref } from 'vue';



const counter = ref(0);

const inc = () => counter.value++


const dec = () => counter.value--
</script>

<template>
  <h1>Counter : {{counter}}</h1>

  <button @click="inc">Increment</button>
  <button @click="dec">Decrement</button>
</template>

<style scoped></style>
