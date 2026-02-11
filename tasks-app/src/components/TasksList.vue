<script setup lang="ts">
import { FilterTypes, Task } from '@/types';
import { computed, ref } from 'vue';
import FilterButton from './FilterButton.vue';

const emit = defineEmits<{
    taskCompleted : [id: string],
    deleteTask: [id: string]
}>()
const {tasks} = defineProps<{
    tasks : Task[]
}>();

const filter = ref<FilterTypes>('All');

const setFilter = (value) => {
    filter.value = value
}

const taskCompleted = (id) => {
    emit('taskCompleted', id)
}

const deleteTask = (id) => {
    emit('deleteTask', id)
}

const filteredTasks = computed(() => {
    switch(filter.value){
        case "All": 
          return tasks
        case "Done":
            return tasks.filter(task => task.done)
        case "Todo":
            return tasks.filter(task => !task.done)
    }
    return tasks
})

// const completed = computed(() => tasks.filter(i => i.done));
const completed = computed(() => tasks.reduce((total, t) => t.done ? total + 1 : total, 0))
</script>

<template>
    <div v-if="tasks.length > 0">
        <h3>{{completed}} / {{tasks.length}} Completed</h3>
        <div class="button-container">
            <FilterButton :selected-filter="filter" filter="All" @set-filter="setFilter"/>
            <FilterButton :selected-filter="filter" filter="Todo" @set-filter="setFilter" />
            <FilterButton :selected-filter="filter" filter="Done" @set-filter="setFilter" />
        </div>
            <TransitionGroup name="list" tag="div" class="tasks">

                <div id="task-div" v-for="value in filteredTasks" :key="value.id" >
                    <label >
                        <input type="checkbox" 
                        @input="taskCompleted(value.id)"
                        :checked="value.done"
                        >
                        <span :class="value.done && 'completed'">{{value.title }} </span>
                        <button @click="deleteTask(value.id)">X</button>
                    </label>
                    
                </div>
            </TransitionGroup>
        
        <!-- <ul>
            <li v-for="value in tasks" :key="value.id" :class="value.done && 'completed'">
                {{ value.title }}
            </li>
        </ul> -->
    </div>
</template>

<style scoped>
.tasks {
    display: flex;
    flex-direction: column;
    gap: 8px
}

#task-div{
    padding: 12px 16px;
    background-color:#252525;
    border-radius: 4px;
    
}
 
label {
    display: flex;
    gap:4px;
    cursor: pointer;
}

label button {
    margin-left: auto;
    background-color: transparent;
    border: none;
    color: white;
    font-weight: 500;
    cursor: pointer;
}

.completed {
    text-decoration :line-through;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(300px);
}

.button-container {
    display: flex;
     gap:8px;
     justify-content: end;
     margin-bottom: 12px;
}


</style>