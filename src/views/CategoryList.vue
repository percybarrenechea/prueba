<template>
  <section class="space-y-6">
    <header>
      <h1 class="text-3xl font-black text-pink-600">Listado de Categorías</h1>
      <p class="text-sm text-pink-400 font-semibold mt-2">Resumen de categorías según productos registrados.</p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <article
        v-for="category in store.categoriesSummary"
        :key="category.name"
        class="bg-white border border-pink-100 rounded-2xl p-5 shadow-sm"
      >
        <p class="text-xs uppercase tracking-wider font-black text-pink-500">{{ category.name }}</p>
        <p class="text-3xl font-black text-slate-700 mt-2">{{ category.products }}</p>
        <p class="text-xs text-slate-500">productos</p>
      </article>
    </div>

    <p v-if="store.categoriesSummary.length === 0" class="text-center text-pink-400 font-semibold py-10 bg-white rounded-2xl border border-pink-100">
      No hay categorías para mostrar.
    </p>
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
