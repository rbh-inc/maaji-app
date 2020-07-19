import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Add from '../components/Add.vue';
import Admin from '../components/Admin.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
