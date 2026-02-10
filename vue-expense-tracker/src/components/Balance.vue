
<script setup>
import { defineProps } from 'vue';
// const {total} = defineProps(['total']);

const {total} = defineProps({
    total: {
        type: Number,
        required: true
    }
})

</script>
<template>
    <h4>Your Balance:</h4>
    <h1>${{total}}</h1>
</template>