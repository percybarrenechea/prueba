<template>
  <div class="min-h-screen bg-pink-50">

    <!-- NAVBAR -->
    <nav class="bg-white shadow-md border-b border-pink-200">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 class="text-lg font-extrabold text-pink-600 tracking-tight italic">
          Admin Dashboard
        </h1>

        <div class="flex gap-6 text-xs font-black uppercase tracking-widest">
          <button
            @click="navigateTo('/home')"
            :class="currentPath === '/home'
              ? 'text-pink-600 border-b-2 border-pink-600 pb-1'
              : 'text-pink-300 hover:text-pink-500 transition-colors duration-300'"
          >
            Home
          </button>

          <button
            @click="navigateTo('/products')"
            :class="currentPath === '/products'
              ? 'text-pink-600 border-b-2 border-pink-600 pb-1'
              : 'text-pink-300 hover:text-pink-500 transition-colors duration-300'"
          >
            Inventario
          </button>
        </div>
      </div>
    </nav>

    <!-- CONTENIDO -->
    <div class="max-w-7xl mx-auto px-6 py-10">

      <!-- HOME -->
      <div v-if="currentPath === '/home'" class="space-y-12">

        <!-- Header -->
        <header class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl font-extrabold text-pink-600 tracking-tight italic">
            Bienvenido al Panel de Gestión
          </h2>
          <p class="mt-4 text-lg text-pink-400 font-semibold">
            Administra tu inventario y visualiza tus métricas en tiempo real.
          </p>
        </header>

        <!-- Cards de métricas -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <!-- Total Productos -->
          <div
            class="bg-white rounded-3xl shadow-lg border border-pink-100 p-6
                   hover:shadow-pink-300 transition-shadow duration-300"
          >
            <p class="text-xs uppercase font-black text-pink-300 tracking-widest">
              Total Productos
            </p>
            <h3 class="mt-3 text-4xl font-extrabold text-pink-600">
              {{ totalProducts }}
            </h3>
          </div>

          <!-- Stock Disponible -->
          <div
            class="bg-white rounded-3xl shadow-lg border border-pink-100 p-6
                   hover:shadow-green-300 transition-shadow duration-300"
          >
            <p class="text-xs uppercase font-black text-pink-300 tracking-widest">
              Stock Disponible
            </p>
            <h3 class="mt-3 text-4xl font-extrabold text-emerald-600">
              {{ totalStock }}
            </h3>
          </div>

          <!-- Productos Activos -->
          <div
            class="bg-white rounded-3xl shadow-lg border border-pink-100 p-6
                   hover:shadow-indigo-300 transition-shadow duration-300"
          >
            <p class="text-xs uppercase font-black text-pink-300 tracking-widest">
              Productos Activos
            </p>
            <h3 class="mt-3 text-4xl font-extrabold text-indigo-600">
              {{ activeProducts }}
            </h3>
          </div>

          <!-- Ingresos -->
          <div
            class="bg-white rounded-3xl shadow-lg border border-pink-100 p-6
                   hover:shadow-pink-400 transition-shadow duration-300"
          >
            <p class="text-xs uppercase font-black text-pink-300 tracking-widest">
              Ingresos
            </p>
            <h3 class="mt-3 text-4xl font-extrabold text-pink-600">
              ${{ totalRevenue }}
            </h3>
          </div>

        </div>

      </div>

      <!-- INVENTARIO -->
      <div v-if="currentPath === '/products'" class="space-y-6">
        <h2 class="text-3xl font-extrabold text-pink-600 italic">
          Gestión de Inventario
        </h2>

        <p class="text-pink-400 font-semibold">
          Aquí puedes administrar tus productos disponibles.
        </p>

        <!-- Aquí iría tu vista de productos -->
      </div>

    </div>
  </div>
</template>
