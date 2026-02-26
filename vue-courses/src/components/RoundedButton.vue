
<script setup lang="ts">

defineProps({
variant: String
})

defineEmits(['click'])
</script>

<template>
    <button
        @click="$emit('click')"
        class="border border-gray-200 rounded-full px-3 py-1"
    >
       <slot></slot>
    </button>
</template>