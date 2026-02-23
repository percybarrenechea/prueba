import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import ProductList from '../views/ProductList.vue';
import ProductForm from '../views/ProductForm.vue';
import CategoryList from '../views/CategoryList.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/products', component: ProductList },
  { path: '/products/create', component: ProductForm },
  { path: '/categories', component: CategoryList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
