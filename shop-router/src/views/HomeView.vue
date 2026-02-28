<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();
const products = [
    {
        id:1,
        title: "laptop"
    },
    {
        id:2,
        title: "Mobile"
    }
]

function goToDetails(id){
    router.push({
        name: 'product',
        params:{
            id
        }
    })
}
</script>

<template>
    Home
    <hr />
    <ul>
        <li v-for="p in products" :key="p.id">
            {{ p.title }}
            <button @click="goToDetails(p.id)">Go to Details</button>
        </li>
    </ul>
</template>