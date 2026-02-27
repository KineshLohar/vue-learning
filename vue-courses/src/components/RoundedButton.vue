
<script setup lang="ts">


const variants = {
    default: 'border border-gray-200',
    danger: ' bg-red-200'
}


defineProps({
variant: {
    type: String,
    default: 'default'
}
})

defineEmits(['click'])
</script>

<template>
    <button
        @click="$emit('click')"
        :class="['rounded-full px-3 py-1', variants[variant] ?? variants.default]"
    >
       <slot></slot>
    </button>
</template>