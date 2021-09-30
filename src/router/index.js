import { createRouter, createWebHashHistory } from 'vue-router';
import myOrg from '../views/MyOrg.vue';

const routes = [
  {
    path: '/',
    name: 'myOrg',
    components: { myOrg: myOrg },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
