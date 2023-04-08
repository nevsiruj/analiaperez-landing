import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Clases from './components/Clases.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/clases',
    name: 'clases',
    component: Clases,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
