import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Clases from './components/Clases.vue';
import { authenticate } from './auth';

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
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const username = prompt('Ingrese su usuario:');
    const password = prompt('Ingrese su contraseña:');

    authenticate(username, password)
      .then(() => {
        next();
      })
      .catch(() => {
        next('/');
      });
  } else {
    next();
  }
});

export default router;
