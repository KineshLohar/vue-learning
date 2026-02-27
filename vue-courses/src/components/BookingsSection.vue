<script setup>
import useBookings from '@/composables/useBookings';
import { onMounted } from 'vue';
import BookingItem from './BookingItem.vue';

const { bookings, reportCourse, fetchBookings } = useBookings();

onMounted(() => {
  fetchBookings();
})

</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <BookingItem 
      v-for="course in bookings" 
      :key="course.id" 
      :title="course.title" 
      :price="course.price" 
      :description="course.description"
      :status="course.status"
      @report="reportCourse(course)"
      />
    </div>
</template>