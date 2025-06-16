<template>
  <nav
    class="bg-[#07a495] py-3  mb-4 shadow-lg fixed top-0 left-0 w-full z-50 transition-all duration-300"
  >
    <div class="container mx-auto px-4 flex justify-between items-center">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2">
        <img src="/src/assets/VK LOGO BLANCO PNG (1).png" alt="Vikingas Logo" class="w-10 h-10 rounded-full shadow-md" />
        <span class="text-white text-xl font-bold hidden sm:inline">Vikingas</span>
      </a>

      <!-- Botón Hamburguesa para móviles -->
      <div class="md:hidden">
        <button
          @click="toggleMenu"
          class="text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
          aria-label="Abrir menú"
        >
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Menú para pantallas grandes -->
      <ul class="hidden md:flex flex-1 justify-center gap-6 text-white text-lg font-semibold">
        <li v-for="item in navItems" :key="item.href" class="relative group">
          <a
            :href="item.href"
            class="hover:text-[#ffde59] transition-colors duration-200 px-2 py-1 relative group-hover:text-[#ffde59] flex items-center"
          >
            {{ item.label }}
            <span
              class="block h-0.5 bg-[#ffde59] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"
            ></span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Menú desplegable para móviles -->
    <transition name="slide-fade">
      <div
        v-if="isMenuOpen"
        class="md:hidden fixed top-0 left-0 w-full h-full bg-[#07a495] bg-opacity-95 flex flex-col items-center justify-center gap-8 text-white text-2xl font-bold z-50"
      >
        <button
          @click="closeMenu"
          class="absolute top-6 right-6 text-white bg-[#07a495] rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Cerrar menú"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul class="flex flex-col items-center gap-8 w-full">
          <li v-for="item in navItems" :key="item.href" class="w-full text-center">
            <a
              :href="item.href"
              @click="closeMenu"
              class="block py-3 hover:text-[#ffde59] transition-colors duration-200"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const navItems = [
  { label: "Resultados", href: "#resultados" },
  { label: "Prox partidos", href: "#prox-partidos" },
  { label: "Categorías", href: "#categorias" },
  { label: "Indumentarias", href: "#indumentarias" },
  { label: "Jugadoras", href: "#jugadoras" },
  { label: "Sponsors", href: "#sponsors" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
nav {
  /* Para evitar que el contenido quede oculto debajo del nav fijo */
  box-shadow: 0 4px 24px 0 rgba(7,164,149,0.10), 0 2px 24px rgba(0,0,0,0.15);
}
</style>