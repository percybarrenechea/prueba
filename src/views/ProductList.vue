<template>
  <div class="max-w-7xl mx-auto px-6 py-16 space-y-16">
    
    <!-- Header Centrado -->
    <header class="text-center space-y-4">
      <h1 class="text-4xl md:text-5xl font-serif font-black italic bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
        The Eras Collection
      </h1>

      <p class="text-pink-400 font-medium tracking-widest uppercase text-[10px] md:text-xs">
        ✨ {{ store.products.length }} álbumes icónicos encontrados ✨
      </p>

      <div class="h-1 w-16 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full mt-4 opacity-30"></div>
    </header>

    <!-- Skeleton Loader -->
    <div v-if="store.loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="n in 6"
        :key="n"
        class="animate-pulse rounded-2xl bg-white shadow-lg border border-pink-100 h-[200px]"
      ></div>
    </div>

    <!-- Grid Productos -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div
        v-for="p in store.products"
        :key="p.id"
        class="flex bg-white border border-pink-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
      >
        
        <!-- Imagen -->
        <div class="w-1/3 overflow-hidden">
          <img
            :src="p.image"
            :alt="p.title"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <!-- Detalles -->
        <div class="w-2/3 p-5 flex flex-col justify-between">
          
          <div class="space-y-3">
            
            <section>
              <h2
                class="text-lg font-black text-slate-800 truncate group-hover:text-pink-600 transition-colors"
                :title="p.title"
              >
                {{ p.title }}
              </h2>

              <div class="flex items-center gap-1.5 mt-1">
                <span class="h-1.5 w-1.5 rounded-full bg-pink-400"></span>
                <span class="text-[10px] font-bold text-slate-500 tracking-tight">
                  {{ p.status }} - ID: {{ p.id }}
                </span>
              </div>
            </section>

            <section class="flex flex-col gap-2">
              
              <div>
                <p class="text-pink-300 text-[9px] font-black uppercase tracking-wider">
                  Fecha Estreno
                </p>
                <p class="text-slate-700 text-xs font-semibold">
                  {{ p.date }}
                </p>
              </div>

              <div>
                <p class="text-pink-300 text-[9px] font-black uppercase tracking-wider">
                  Origen
                </p>
                <p class="text-slate-700 text-xs font-semibold truncate">
                  Discography
                </p>
              </div>

            </section>
          </div>

          <!-- Footer -->
          <div class="flex justify-between items-center mt-4 pt-3 border-t border-pink-100">
            <span class="text-pink-500 font-black text-sm">
              ${{ p.price }}
            </span>

            <button
              class="px-4 py-2 text-[9px] font-black uppercase tracking-widest
                     bg-pink-50 text-pink-500 border border-pink-200
                     rounded-lg hover:bg-pink-500 hover:text-white
                     transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Añadir 🪄
            </button>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '../stores/productStore';

const store = useProductStore();

onMounted(() => store.fetchProducts());
</script>
