<script setup>
import { computed, onMounted, ref, watch } from 'vue';

const filters = ["All", "Completed", "Favorites", "Incomplete"]
const newTask = ref('');
const error = ref('');
const tasks = ref([]);
const search = ref("")
const activeFilter = ref('All')

const editingId = ref(null);
const edittingBuffer = ref('');

const startEdit = (task) => {
  editingId.value = task.id
  edittingBuffer.value = task.text
}

const cancelEdit = () => {
  editingId.value = null;
  edittingBuffer.value = ''
}

const finishEdit = (task) => {
if(edittingBuffer.value === task.text) return;

const trimmed = edittingBuffer.value.trim()

if(!trimmed){
  removeTask(task);
  return
}

task.text = trimmed

cancelEdit()
}


const addTask = () => {
  if(!newTask.value.trim()){
    error.value = "Text is required"

    return
  }

  tasks.value.push({
    id: crypto.randomUUID(),
    text: newTask.value,
    completed: false
  })

  newTask.value = ''
}

const removeTask = (id) => {
  const index = tasks.value.findIndex(item => item.id === id);
  if(index !== -1){
    tasks.value.splice(index, 1)
  }
}

const toggleTask = (id) => {
  const task = tasks.value.find(task => task.id === id);
  if(task){
    task.completed = !task.completed
  }
}

const toggleFav = (task) => task.favorite = !task.favorite;

const filteredTask = computed(() => {

  return tasks.value
  .filter(item => item.text.toLowerCase().includes(search.value))
  .filter((t) => {
    if(activeFilter.value === "Completed") return t.completed
    if(activeFilter.value === "Incomplete") return !t.completed
    if(activeFilter.value === "Favorites") return t.favorite

    return true
  })
})

watch(tasks, () => {
  localStorage.setItem("tasks", JSON.stringify(tasks.value))
}, {
  deep: true
})

onMounted(() => {
  const saved = localStorage.getItem('tasks')
  if(saved){
    tasks.value = JSON.parse(saved)
  }
})

</script>

<template>
  <div class="wrapper">
    <h1>Todo App</h1>
    <div class="input-row">
      <input type="text" placeholder="Add task here..." v-model="newTask">
      <button @click="addTask">Add</button>
    </div>
    <div>
      <input type="text" v-model="search" placeholder="search filter...">
    </div>
    <div class="filter-btn">
      <button v-for="f in filters" :key="f" @click="activeFilter = f" :class="{ active: activeFilter === f}">{{ f }}</button>
    </div>

    <ul class="task-list" >
      <li v-for="task in filteredTask" :key="task.id">
        <template v-if="editingId === task.id">
          <input type="text" v-model="edittingBuffer" class="edit-input"
          @keyup.enter="finishEdit(task)"
          @keydown.esc="cancelEdit"
          :ref="el && el.focus()"
          >
        </template>
        <template v-else>
          <button @click="removeTask(task.id)">X</button>
          <button class="fav" @click="toggleFav(task)">{{task.favorite ? 'Fav' : 'noFav'}}</button>
          <input type="checkbox" :checked="task.completed" @input="toggleTask(task.id)" />
          <span @click="startEdit(task)" :class="task.completed && 'done'">{{ task.text }}</span>
        </template>
        
      </li>
    </ul>
  </div>
  
</template>

<style scoped>
.wrapper {
  max-width: 500px;
  margin: 0 auto;
}

.filter-btn {
  display: flex;
  flex-wrap: wrap;
  gap:0.5rem;
  margin: 0.5rem 0;
}

.input-row{
  display: flex;
  gap:8px;
  margin-bottom: 8px;
}

input {
  flex-grow: 1;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 6px;
}

.done {
  text-decoration: line-through;
}

.task-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap:0.5rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.task-list li{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  
}

.fav {
  border: none;
}

.active {
  background-color: darkgray;
}
</style>
