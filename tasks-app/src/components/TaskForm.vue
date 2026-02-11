<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
    addTask: [newTask: string]
}>()
const newTask = ref('');
const error = ref('')

const onSubmit = () => {
    if(!newTask.value.trim()){
        error.value = 'Task is required'
        return
    }
emit('addTask', newTask.value)
newTask.value = ''
error.value = ''
}
</script>


<template>
    
    <form @submit.prevent="onSubmit">
        <div class="container">
            <label for="task">Task</label>
            <input type="text" v-model="newTask" placeholder="...." :aria-invalid="!!error || undefined">   
            <p v-if="error">{{error}}</p>
            <button class="btn">Add</button>
        </div>
        
    </form>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

input {
    padding: 8px 16px;
    color: #000;
    background-color: darkgrey;
     border: none;
     border-radius: 4px;
}
p {
    margin: 0px;
    font-size: small;
    color: red;
    opacity: 80%;
}
.btn {
    background: #07540b;
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    color: aliceblue;
    margin-left: auto;
}
</style>