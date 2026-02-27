<script setup>
import CoursesSection from './components/CoursesSection.vue';
import BookingsSection from './components/BookingsSection.vue';

</script>

<template>
  <div class="p-4 space-y-4">
    <h1 class="text-4xl">Courses</h1>

    <h2 class="text-2xl">All Courses</h2>
    <CoursesSection />

    <h2>My Courses</h2>
    <BookingsSection />
  </div>
</template>

<style scoped>

</style>
