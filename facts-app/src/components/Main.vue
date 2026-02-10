<script setup>
import { ref } from 'vue';


const features = ref([
    {
        id:1,
        title: "Title 1",
        description: "lorem ipsum 1"
    },
    {
        id:2,
        title: "Title 2",
        description: "lorem ipsum 2"
    },
    {
        id:3,
        title: "Title 3",
        description: "lorem ipsum 3"
    },
])
</script>

<template>
    <main>  
        <h2>Main</h2>
        <div v-for="value in features">
            <div :key="value.id">
                <h3>{{ value.title }}</h3>
                <p>{{value.description}}</p>
            </div>
        </div>
        <section>
            <img src="/logo.svg" alt="logo">
        </section>
    </main>
</template>

<style scoped>
img{
    height: 150px;
}
</style>