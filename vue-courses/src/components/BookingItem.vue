<script setup lang="ts">
import CardSections from './CardSections.vue';
import RoundedButton from './RoundedButton.vue';

</script>


<template>
    <CardSections>
        <div class="flex items-center justify-between">
            <div>Vue Course</div>
            <RoundedButton @click="console.log('Reported')">Report</RoundedButton>
        </div>
    </CardSections>
</template>