import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import ProductList from '../views/ProductList.vue';
import ProductForm from '../views/ProductForm.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/products', component: ProductList },
  { path: '/products/create', component: ProductForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
