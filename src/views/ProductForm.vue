<template>
  <div class="w-full max-w-2xl bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 mx-auto">
    <header class="text-center mb-10">
      <h1 class="text-3xl md:text-4xl font-serif font-black italic bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
        ÁLBUM DE TAYLOR SWIFT
      </h1>
      <p class="text-slate-400 text-xs uppercase tracking-widest font-bold mt-3">
        Añade un nuevo álbum a la colección
      </p>
    </header>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="space-y-2">
        <label class="text-[10px] font-black uppercase tracking-widest text-pink-500 ml-2">
          Título del Álbum
        </label>
        <input type="text" placeholder="Ej: Midnights" class="w-full px-6 py-4 bg-slate-50 border border-slate-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 rounded-2xl transition-all outline-none text-slate-700 font-medium" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-2">
          <label class="text-[10px] font-black uppercase tracking-widest text-pink-500 ml-2">Album ID</label>
          <input type="number" placeholder="4" class="w-full px-6 py-4 bg-slate-50 border border-slate-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 rounded-2xl transition-all outline-none text-slate-700 font-medium" />
        </div>
        <div class="space-y-2">
          <label class="text-[10px] font-black uppercase tracking-widest text-pink-500 ml-2">Fecha</label>
          <input type="date" class="w-full px-6 py-4 bg-slate-50 border border-slate-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 rounded-2xl transition-all outline-none text-slate-700 font-medium" />
        </div>
      </div>

      <div class="pt-6">
        <button type="submit" class="w-full py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 active:scale-95">
          Guardar Álbum ✨
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
const handleSubmit = () => {
  console.log("Guardando álbum...");
};
</script>
