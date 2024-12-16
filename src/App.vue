<script setup>
import { ref } from 'vue';

const name = ref('John');
const age = ref(354); // Assuming this is intentional
const status = ref('active');
const newTask = ref('');

const toggleStatut = () => {
  if (status.value === 'active') {
    status.value = 'pending';
  } else if (status.value === 'pending') {
    status.value = 'active';
  }
};

const addForm = (event) => {
  console.log(`Task added: ${newTask.value}`);
  newTask.value = ''; // Clear the input field after submission
};

const clickMe = () => {
  console.log('Button clicked!');
};
</script>

<template>
  <h1 class="t">{{ age}}</h1>

  <form @submit.prevent="addForm">
    <label for="newTask">New Task</label>
    <input type="text" name="newTask" id="newTask" v-model="newTask" />
    <br>
    <button type="submit">Add Task</button>
  </form>

  <button class="text-3xl" @click="clickMe">Click Me</button>
  <button class="text-3xl" @click="toggleStatut">
    Toggle Status (Current: {{ status }})
  </button>
</template>
