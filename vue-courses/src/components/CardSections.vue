<script setup lang="ts">
import RoundedCard from './RoundedCard.vue';

</script>

<template>
    <RoundedCard>
        <div v-if="$slots.header" class="border-b border-gray-200 p-4 font-medium ">
            <slot name="header">
                <!-- {{ title }} -->
            </slot>
        </div>
        <div :class="{'p-4': true, 'border-b border-gray-200 font-medium': $slots.footer}">
            <slot>
                <!-- {{ price }} -->
            </slot>
        </div>
        <div v-if="$slots.footer" class="p-4">
            <slot name="footer">
                <!-- {{ description }} -->
            </slot>
        </div>
    </RoundedCard>
</template>