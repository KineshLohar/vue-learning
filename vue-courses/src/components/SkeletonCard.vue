<script setup lang="ts">
import RoundedCard from './RoundedCard.vue';

</script>

<template>
    <RoundedCard>
        <div class="flex flex-col justify-between border border-gray-200">
            <div class="h-36 bg-gray-300" />
            <div class="flex items-center justify-between p-4 h-18">
                <div class="bg-gray-300 rounded-full h-8 w-36"></div>
                <div class="bg-gray-300 rounded-full h-6 w-18"></div>
            </div>
        </div>
    </RoundedCard>
</template>