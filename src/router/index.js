import { createRouter, createWebHistory } from 'vue-router'
import InicioVue from '../views/InicioView.vue'
import AuthVue from '../views/authView.vue'
import Templos from '../views/templosView.vue'
import Usuarios from '../views/usuariosView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InicioVue
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthVue
    },
    {
      path: '/templos',
      name: 'Templos',
      component: Templos,
      meta: { requireAuth: true },
    },
    {
      path: '/usuarios',
      name: 'Usuarios',
      component: Usuarios,
      meta: { requireAuth: true },
    }
  ]
})

// Validación para las rutas protegidas
router.beforeEach((to, from, next) => {
  //Busca si la la ruta protegida tiene un meta requeriAuth = true y retorna false o true
  if (to.matched.some(record => record.meta.requireAuth)) {

    if (localStorage.getItem('token')) {
      // sigue a la ruta protegida
      next()
    } else {
      // se sale de la ruta porque esta protegida
      next('/')

    }
  } else {
    // Si la ruta no requiere autenticación, permite el acceso
    next()
  }

})

export default router
