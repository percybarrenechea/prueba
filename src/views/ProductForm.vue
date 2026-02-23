<template>
  <section class="max-w-3xl mx-auto bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
    <header class="mb-8">
      <h1 class="text-3xl font-black text-pink-600">Formulario de Producto</h1>
      <p class="text-sm text-pink-400 font-semibold mt-2">Completa la información para crear un nuevo producto.</p>
    </header>

    <form class="space-y-5" @submit.prevent="handleSubmit">
      <div>
        <label class="block text-xs font-bold uppercase tracking-wider text-pink-500 mb-2">Nombre</label>
        <input v-model="form.title" required type="text" class="input" placeholder="Ej: Midnights Deluxe" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-pink-500 mb-2">ID</label>
          <input v-model.number="form.id" required min="1" type="number" class="input" placeholder="1001" />
        </div>

        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-pink-500 mb-2">Fecha</label>
          <input v-model="form.date" required type="date" class="input" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-pink-500 mb-2">Categoría</label>
          <select v-model="form.category" required class="input">
            <option disabled value="">Selecciona una categoría</option>
            <option value="Pop">Pop</option>
            <option value="Country">Country</option>
            <option value="Alternative">Alternative</option>
            <option value="Indie">Indie</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-pink-500 mb-2">Precio</label>
          <input v-model.number="form.price" required min="1" step="0.01" type="number" class="input" placeholder="29.99" />
        </div>

        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-pink-500 mb-2">Stock</label>
          <input v-model.number="form.stock" required min="0" type="number" class="input" placeholder="20" />
        </div>
      </div>

      <div class="pt-4 flex justify-end gap-3">
        <router-link to="/products" class="px-5 py-3 rounded-xl border border-pink-200 text-pink-500 font-bold text-sm">
          Cancelar
        </router-link>
        <button type="submit" class="px-5 py-3 rounded-xl bg-pink-600 text-white font-bold text-sm uppercase tracking-wider hover:bg-pink-500">
          Guardar producto
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '../stores/productStore';

const router = useRouter();
const store = useProductStore();

const form = reactive({
  id: null,
  title: '',
  date: '',
  category: '',
  price: null,
  stock: null,
});

const handleSubmit = () => {
  store.addProduct({ ...form });
  router.push('/products');
};
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid #f9a8d4;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  outline: none;
}

.input:focus {
  box-shadow: 0 0 0 3px #fce7f3;
}
</style>
