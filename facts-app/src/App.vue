<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

</script>

<template>
  <div id="container">
    <Header />
    <Main />
    <Footer />
  </div>
  </template>

<style scoped>
#container {
  margin-left: auto;
  margin-right: auto;
  max-width: 320px;
  border: 12px solid aquamarine;
  text-align: center;
  border-radius: 1rem;
}
</style>
