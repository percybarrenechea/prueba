<template>
  <div class="min-h-screen flex flex-col bg-pink-50 selection:bg-pink-200 selection:text-pink-900">
    
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 h-20 px-6 flex items-center justify-between
                bg-white/80 backdrop-blur-xl border-b border-pink-100 shadow-sm">
      
      <router-link to="/" class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full flex items-center justify-center
                    bg-gradient-to-br from-pink-400 to-pink-600
                    text-white font-serif italic text-xl shadow-md">
          TS
        </div>
        <span class="hidden sm:block font-serif font-black text-xl
                     text-pink-500 tracking-tight uppercase italic">
          Swiftie Hub
        </span>
      </router-link>
      
      <div class="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-pink-400">
        <router-link 
          to="/" 
          class="hover:text-pink-600 transition-colors duration-200"
          active-class="text-pink-600"
        >
          Inicio
        </router-link>

        <router-link 
          to="/products" 
          class="hover:text-pink-600 transition-colors duration-200"
          active-class="text-pink-600"
        >
          Catálogo
        </router-link>
      </div>

      <button class="p-2 text-2xl text-pink-300 hover:text-pink-500 transition-colors duration-200">
        💖
      </button>
    </nav>

    <!-- Main -->
    <main class="flex-1 w-full py-16 container mx-auto px-6">
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="transition-opacity duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-200"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <footer class="py-10 text-center border-t border-pink-100 bg-white">
      <p class="text-[9px] font-bold text-pink-300 uppercase tracking-[0.5em]">
        Handcrafted with love for Taylor • 2024
      </p>
    </footer>

  </div>
</template>
