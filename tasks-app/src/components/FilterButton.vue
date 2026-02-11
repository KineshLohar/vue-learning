<script setup lang="ts">

import { FilterTypes } from '@/types';

const {filter} = defineProps<{
    filter: FilterTypes,
    selectedFilter: FilterTypes
}>();

const emit = defineEmits<{
    setFilter: [filter: string]
}>()
</script>

<template>
    <button :class="selectedFilter === filter && 'selected'" @click="emit('setFilter', filter)">{{filter}}</button>
</template>

<style scoped>
button {
    padding: 8px 16px;
    background-color: darkgrey;
    border: none;
    border-radius: 4px;
}

.selected {
    background-color: aliceblue;
}
</style>