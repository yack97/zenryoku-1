import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },  
  {
    path: '/formulario',
    name: 'formulario',
    component: () => import('../views/Formulario.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
  },
  {
    path: '/lista',
    name: 'lista',
    component: () => import('../views/ListaView.vue'),
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/UserView.vue'),
  },
  {
    path: '/loginAdmin',
    name: 'loginAdmin',
    component: () => import('../views/LoginAdminView.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;