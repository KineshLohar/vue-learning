<script setup lang="ts">
import { ref } from 'vue';
import TaskForm from './components/TaskForm.vue';
import TasksList from './components/TasksList.vue';
import { Task } from './types';

const tasks = ref<Task[]>([]);


const addTask = (title) => {
  tasks.value.push({
    id: crypto.randomUUID(),
    title,
    done: false
  })
}

const taskCompleted = (id) => {
  const task = tasks.value.find(i => i.id === id)
  if(task){
    task.done = !task.done
  }
  // tasks.value = tasks.value.map(task => {
  //   if(task.id === id){
  //     return {
  //       ...task,
  //       done: !task.done
  //     }
  //   }
  //   return task;
  // })
}

const deleteTask = (id: string) => {
// tasks.value = tasks.value.filter(task => task.id !== id)
const index = tasks.value.findIndex(item => item.id === id)
if(index !== -1){
  tasks.value.splice(index, 1)
}
}

</script>

<template>
  <div class="outer-container">
    <h1>Tasks</h1>
    <TaskForm @add-task="addTask" />
    <TasksList :tasks @task-completed="taskCompleted" @delete-task="deleteTask" />
  </div>
</template>

<style>
body {
  background: #000;
  color: aliceblue;
}
.outer-container {
  max-width: 320px;
  margin: 0 auto;
}
</style>
