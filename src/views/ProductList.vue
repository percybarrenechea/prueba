<template>
  <section class="space-y-6">
    <header class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 class="text-3xl font-black text-pink-600">Listado de Productos</h1>
        <p class="text-sm text-pink-400 font-semibold">Consulta y filtra los productos registrados.</p>
      </div>

      <router-link
        to="/products/create"
        class="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-pink-600 text-white font-bold text-sm uppercase tracking-wider hover:bg-pink-500 transition-colors"
      >
        Nuevo producto
      </router-link>
    </header>

    <div class="bg-white border border-pink-100 rounded-2xl p-4">
      <label class="text-xs font-bold uppercase text-pink-500 tracking-wider">Filtrar por categoría</label>
      <select
        v-model="selectedCategory"
        class="mt-2 w-full md:w-72 px-4 py-3 rounded-xl border border-pink-200 focus:ring-2 focus:ring-pink-100 outline-none"
      >
        <option value="all">Todas</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>

    <div v-if="store.loading" class="rounded-2xl border border-pink-100 bg-white p-10 text-center font-semibold text-pink-400">
      Cargando productos...
    </div>

    <div v-else class="overflow-x-auto bg-white rounded-2xl border border-pink-100 shadow-sm">
      <table class="min-w-full text-sm">
        <thead class="bg-pink-50">
          <tr class="text-left text-pink-600 uppercase text-xs tracking-wider">
            <th class="px-4 py-3">ID</th>
            <th class="px-4 py-3">Nombre</th>
            <th class="px-4 py-3">Categoría</th>
            <th class="px-4 py-3">Precio</th>
            <th class="px-4 py-3">Stock</th>
            <th class="px-4 py-3">Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in filteredProducts" :key="product.id" class="border-t border-pink-100 text-slate-700">
            <td class="px-4 py-3 font-semibold">{{ product.id }}</td>
            <td class="px-4 py-3">{{ product.title }}</td>
            <td class="px-4 py-3">{{ product.category }}</td>
            <td class="px-4 py-3">${{ product.price }}</td>
            <td class="px-4 py-3">{{ product.stock }}</td>
            <td class="px-4 py-3">{{ product.date }}</td>
          </tr>
        </tbody>
      </table>

      <p v-if="filteredProducts.length === 0" class="p-6 text-center text-pink-400 font-semibold">
        No hay productos para la categoría seleccionada.
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useProductStore } from '../stores/productStore';

const store = useProductStore();
const selectedCategory = ref('all');

onMounted(() => {
  store.fetchProducts();
});

const categories = computed(() => [...new Set(store.products.map((product) => product.category))]);

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return store.products;
  }

  return store.products.filter((product) => product.category === selectedCategory.value);
});
</script>
