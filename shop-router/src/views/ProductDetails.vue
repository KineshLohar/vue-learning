<script setup>
import { useRoute } from 'vue-router';


const route = useRoute();

</script>

<template>
    <div>
        <h1>Product details</h1>
        <p>Product ID: {{ route.params.id }}</p>
    </div>
</template>