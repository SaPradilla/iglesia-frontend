import { createRouter, createWebHistory } from 'vue-router'
import InicioVue from '/workspaces/iglesia-frontend/src/views/InicioView.vue'
import AuthVue from 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InicioVue
    }
  ]
})

export default router
