<script setup>
import { onMounted, ref } from 'vue';
import Header from './components/Header.vue';

const name = ref('John');
const age = ref(354); // Assuming this is intentional
const status = ref('active');
const tasks = ref(['Task 1', 'Task 2', 'Task 3'])
const newTask = ref('Hellow');

const toggleStatut = () => {
  if (status.value === 'active') {
    status.value = 'pending';
  } else if (status.value === 'pending') {
    status.value = 'active';
  }
};

const addForm = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value); // Add new task to the array
    console.log(`Task added: ${newTask.value}`);
    newTask.value = ''; // Clear input field
  } else {
    console.log('Task cannot be empty');
  }
};

const deleteTask = (index)=>{
  tasks.value.splice(index, 1)
}

const clickMe = () => {
  console.log('Button clicked!');
};


onMounted(async() => {
try {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json()
  tasks.value = data.map((item) => item.title)
} catch (error) {
  throw new Error(error.message)
}
})


</script>

<template>
  
  <Header title='GoodBe' bg='bg-green-400'/>
  <form @submit.prevent="addForm">
    <label for="newTask">New Task</label>
    <input type="text" name="newTask" id="newTask" v-model="newTask" />
    <br>
    <button type="submit">Add Task</button>
  </form>

  <h3>Tasks Below: </h3>
  <ul>
<li  v-for="(task,index) in tasks" :key="task"> 
  
  <span>
  {{ task }}
</span>
<button @click="deleteTask(index)">X</button>
</li>



  </ul>

  <button class="text-3xl" @click="clickMe">Click Me</button>
  <button class="text-3xl" @click="toggleStatut">
    Toggle Status (Current: {{ status }})
  </button>
</template>
