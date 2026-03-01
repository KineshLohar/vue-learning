<script setup lang="ts">
import type { Tab } from '@/types';
import { computed } from 'vue';


const props = defineProps<{
    currentTab: string,
    tab : Tab
}>();

defineEmits<{
    click: []
}>();

const isActive = computed(() => props.currentTab === props.tab.key)

</script>

<template>
    <button @click="$emit('click', )" 
    :class="{'p-4 border-b-2 cursor-pointer': true, 'border-transparent': !isActive ,'text-blue-600 border-b-blue-600': isActive}"
    >
        {{ tab.label }}
    </button>
</template>