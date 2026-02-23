<template>
  <section class="space-y-8">
    <header>
      <h1 class="text-3xl md:text-4xl font-black text-pink-600">Dashboard inicial</h1>
      <p class="text-pink-400 font-semibold mt-2">Vista general de productos y accesos rápidos del sistema.</p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <article class="card">
        <p class="label">Productos</p>
        <p class="value">{{ store.totalProducts }}</p>
      </article>

      <article class="card">
        <p class="label">Stock total</p>
        <p class="value">{{ store.totalStock }}</p>
      </article>

      <article class="card">
        <p class="label">Productos activos</p>
        <p class="value">{{ store.activeProducts }}</p>
      </article>

      <article class="card">
        <p class="label">Valor estimado</p>
        <p class="value">${{ store.totalRevenue }}</p>
      </article>
    </div>

    <div class="bg-white rounded-2xl border border-pink-100 p-6">
      <h2 class="text-xl font-black text-pink-600">Accesos rápidos</h2>
      <div class="mt-4 flex flex-wrap gap-3">
        <router-link class="btn" to="/products">Ir a productos</router-link>
        <router-link class="btn" to="/products/create">Crear producto</router-link>
        <router-link class="btn" to="/categories">Ver categorías</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '../stores/productStore';

const store = useProductStore();

onMounted(() => {
  store.fetchProducts();
});
</script>

<style scoped>
.card {
  background: white;
  border: 1px solid #fbcfe8;
  border-radius: 1rem;
  padding: 1.25rem;
}

.label {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.75rem;
  color: #db2777;
  font-weight: 700;
}

.value {
  margin-top: 0.5rem;
  font-size: 2rem;
  font-weight: 800;
  color: #1e293b;
}

.btn {
  padding: 0.65rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid #f9a8d4;
  color: #be185d;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn:hover {
  background: #fdf2f8;
}
</style>
