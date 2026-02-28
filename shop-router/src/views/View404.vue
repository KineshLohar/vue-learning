<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    <h1>404 - Page not found!</h1>
    <button @click="router.back()" >Back</button>
</template>