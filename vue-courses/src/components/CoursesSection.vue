<script setup lang="ts">
import { onMounted, ref } from 'vue';

import CourseItem from './CourseItem.vue';
import SkeletonCard from './SkeletonCard.vue';
import useBookings from '@/composables/useBookings';


const courses = ref([]);
const loading = ref(false);

const {registerCourse} = useBookings();

const fetchCourses = async () => {
  loading.value = true
  try {
    const res = await fetch('http://localhost:3001/courses');
    courses.value = await res.json();
  } finally {
    loading.value = false
  }
};

onMounted(() => {
    fetchCourses();
})

</script>

<template>
    
    <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <SkeletonCard v-for="i in 3" />
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CourseItem 
      v-for="course in courses" 
      :key="course.id" 
      :title="course.title" 
      :price="course.price" 
      :description="course.description" 
      @click="registerCourse(course)"
      />
    </div>
</template>