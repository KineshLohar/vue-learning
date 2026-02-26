<script setup lang="ts">

import CardSections from './CardSections.vue';
import RoundedButton from './RoundedButton.vue';

defineProps({
    title: String, 
    price: Number,
    description: String
})

defineEmits(['click'])

</script>

<template>
    <CardSections>
        <template #header>{{ title }}</template>
        {{ price }}
        <template #footer>
            <p>{{ description }}</p>
            <div class="flex justify-end">
                <RoundedButton @click="$emit('click')">Purchase</RoundedButton>
            </div>
        </template>
    </CardSections>
</template>