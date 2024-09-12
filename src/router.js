import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Clases from './components/Clases.vue';
import PagoEnProceso from './components/PagoEnProceso.vue';
import ShowUser from './components/ShowUser.vue';
import PreClases from './components/PreClases.vue';
import Clases2 from './components/Clases2.vue';
import gestionClases from './components/clases/gestionClases.vue';
import ListaClases from './components/clases/listaClases.vue';
import GestionUsuario from './components/usuario/GestionUsuario.vue';
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
  {
    path: '/usuario',
    name: 'usuario',
    component: ShowUser,
    // meta: { requiresAuth: true },
  },
  {
    path: '/preclases',
    name: 'preclases',
    component: PreClases,
  },
  {
    path: '/pagoenproceso',
    name: 'pagoenproceso',
    component: PagoEnProceso,
  },
  {
    path: '/clases2',
    name: 'clases2',
    component: Clases2,
  },
  {
    path: '/gestionClases',
    name: 'GestionClases',
    component: gestionClases,
  },
  {
    path: '/lista-clases',
    name: 'ListaClases',
    component: ListaClases,
  },
  {
    path: '/gestionUsuario',
    name: 'GestionUsuario',
    component: GestionUsuario,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     const username = prompt('Ingrese su usuario:');
//     const password = prompt('Ingrese su contraseña:');

//     authenticate(username, password)
//       .then(() => {
//         next();
//       })
//       .catch(() => {
//         next('/');
//       });
//   } else {
//     next();
//   }
// });

export default router;
