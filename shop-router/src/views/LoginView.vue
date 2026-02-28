<script setup>
import { makeLogin } from '@/router';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref("");

function login(){
if(username.value.toLowerCase().trim() === "admin"){
    makeLogin();
    router.push({ name: "admin"})
} else {
    alert("Invalid Creds")
}
}
</script>

<template>
    <div>
        <h1>Login</h1> 
        <div>
            <input type="text" v-model="username" placeholder="Enter username...">
            <button @click="login">Login</button>
        </div>
    </div>
</template>


