<script setup>
import BookingItem from './components/BookingItem.vue';
import CourseItem from './components/CourseItem.vue';

</script>

<template>
  <div class="p-4 space-y-4">
    <h1 class="text-4xl">Courses</h1>

    <h2 class="text-2xl">All Courses</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CourseItem v-for="i in 4" :title="i + ' title'" />
    </div>

    <h2>My Courses</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <BookingItem v-for="i in 4" />
    </div>
  </div>
</template>

<style scoped>

</style>
