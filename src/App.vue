<script>
export default {
  data(){
    return{
      name: 'Ayanle Dirie',
      age: 32,
      status: 'no-active',
      Tasks: [
        {id: 1, name: 'Brad', employee: true},
        {id: 2, name: 'Bradley', employee: false},
        {id: 3, name: 'Bradon', employee: true},



      ]
    }
  },

  methods:{
    clickMe(){
      this.name = "ayoub"
      console.log(this.name)
    }

}
}


</script>


<template>
<h1 class="t">{{ name }}</h1>
<p v-if="status === 'active'"> User is Active</p>
<p v-else-if="status === 'pending'"> The File is Pending and User information is being Fetched</p>
<p v-else="status === 'no-active'">There is no user available</p>

<h3>Tasks:</h3>
<ul>
  <li v-for="task in Tasks" :key="Tasks.id">{{ task}} </li>
</ul>




<button class=" text-3xln"@click="clickMe">Click Me</button>

</template>