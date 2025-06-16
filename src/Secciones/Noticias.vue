<template>
  <hr class="text-white mx-2" />

  <section class="mb-7 py-20" id="prox-partidos">
    <div class="container px-4 sm:px-7">
      <h2 class="text-white text-center text-4xl sm:text-6xl lg:text-7xl font-gobold mb-10 drop-shadow-lg">
        Próximos partidos
      </h2>
    </div>

    <div class="relative w-full max-w-5xl xl:h-auto mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
      <!-- Card 1 -->
      <div class="relative flex flex-col items-center">
        <span class="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-base font-bold shadow z-20">
          Más reciente
        </span>
        <Cards
          image="https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749752129/WhatsApp_Image_2025-06-12_at_12.14.00_PM_edio0g.jpg"
          extraClass="bg-no-repeat xl:h-160 h-100 sm:h-72 w-full rounded-2xl shadow-xl border-2 border-[#07a495] transition-transform duration-300 hover:scale-105"
        />
      </div>
      <!-- Card 2 -->
      <div class="relative flex flex-col items-center">
        <span class="absolute -top-5 left-1/2 -translate-x-1/2 bg-gray-700 text-white px-4 py-1 rounded-full text-base font-bold shadow z-20">
          Finalizado
        </span>
        <Cards
          image="https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749669623/WhatsApp_Image_2025-06-11_at_1.19.26_PM_1_zeencm.jpg"
          extraClass="bg-no-repeat xl:h-160 h-100 sm:h-72 w-full rounded-2xl shadow-xl border-2 border-[#07a495] transition-transform duration-300 hover:scale-105"
          :color="false"
        />
      </div>
    </div>


  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Cards from "../Componentes/Cards.vue";
</script>

<style scoped>
.font-gobold {
  font-family: "gobold", sans-serif;
}
</style>