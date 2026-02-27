<script setup>
import useCount from '@/composables/useCount';
import { useCounterStore } from '@/stores/useCounterStore';

// import {ref} from 'vue'
// const count = ref(0)

// const { count, increment, decrement } = useCount();

const counter = useCounterStore();

</script>

<template>
    <h1>Counter A</h1>
    <h3>Count: {{ counter.count }}</h3>

    <!-- <button @click="count++">Inc</button>
    <button @click="count--">Dec</button> -->

    <button @click="counter.increment">Inc</button>
    <button @click="counter.decrement">Dec</button>
</template>

