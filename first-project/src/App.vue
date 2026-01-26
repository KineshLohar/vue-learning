<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
const year = ref('20023');
</script>

<template>
  <div id="card">
    <Header />
    <Main />
  </div>


  <!-- <Header />
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <footer>
    copyright @{{ year }}
  </footer> -->
</template>

<style scoped>
#card {
  background-color: darkcyan;
  overflow: hidden;
  min-height: 100vh;
}
</style>
