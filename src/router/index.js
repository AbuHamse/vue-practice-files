import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path:'/',
        name:'home',
       /*Component Suppose to go through here */
    }]

})