import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path:'/',
        name:'home',
       /*Component Suppose to go through here, then in the main app component you have to export the 
       the router then after doing so you have to import it in the main app file and the use app.use(router) */
    }]

})

export default router 