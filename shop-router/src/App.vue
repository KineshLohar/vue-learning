<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
 <div>
  <router-link :to="{name: 'home'}">Home</router-link> <span> </span> <RouterLink to="about">About</RouterLink>
 </div>
 <RouterView></RouterView>
</template>

<style scoped></style>
