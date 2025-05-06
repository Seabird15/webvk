<template>
  <section class="relative">
    <div class="bg-main vignette grayscale bg-contain"></div>
    <div
      class="absolute inset-0 z-20 container mx-auto flex flex-col items-start lg:justify-between p-6 sm:p-8 md:p-10 lg:p-20 uppercase font-bold"
    >
      <h2
        class="font-gobold relative tracking-widest text-[#07a495] text-3xl sm:text-4xl lg:text-7xl mb-6"
      >
        Indumentarias
      </h2>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full"
      >
        <div
          v-for="item in indumentaria"
          :key="item.title"
          class="bg-white group rounded-xl p-4 sm:p-5 flex flex-col text-center h-full transition-all duration-300 ease-in-out hover:shadow-md shadow-sm"
        >
          <!-- Título -->
          <h3
            class="text-[#07a495] font-gobold tracking-wider text-xl sm:text-2xl lg:text-3xl mb-3 min-h-[56px] flex items-center justify-center"
          >
            {{ item.title }}
          </h3>

          <!-- Imagen -->
          <div class="mb-4 overflow-hidden rounded-lg">
            <img
              :class="item.class"
              :src="item.image"
              alt=""
              class="w-full object-center h-40 sm:h-44 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

          <!-- Info -->
          <div class="mt-auto">
            <p
              class="text-[#07a495]/80 font-gobold tracking-widest text-sm sm:text-base"
            >
              {{ item.detalle }}
            </p>
            <p
              class="text-[#07a495]/80 font-gobold tracking-widest text-sm sm:text-base"
            >
              {{ item.description }}
            </p>
            <p
              class="text-[#07a495]/90 font-gobold tracking-widest text-base sm:text-lg mt-1"
            >
              {{ item.precio }}
            </p>
          </div>

          <!-- Botón siempre visible en mobile -->
          <Button
            class="mt-4 group-hover:opacity-100 lg:opacity-0 transition-opacity duration-300 ease-in-out"
            label="+ info"
            variant="primary"
            size="md"
            @click="openModal"
          />
        </div>
      </div>
    </div>
    <!--Modales-->
    <div class="relative z-20">
      <ModalVk ref="modal">
        <div class="relative">
          <button
            @click="closeModal"
            class="cursor-pointer absolute right-1 text-gray-400 text-2xl"
          >
            x
          </button>

          <div class="py-7">
            <h2 class="text-xl font-semibold">Contenido producto ... uwu</h2>
            <p>imagen etc etc</p>
          </div>
        </div>
      </ModalVk>
    </div>
    <!--Modales-->
  </section>
</template>

<script setup>
import { ref } from "vue";

import Button from "../Componentes/Button.vue";
import ModalVk from "../Componentes/ModalVk.vue";

const modal = ref(null);

const openModal = () => {
  modal.value.open();
};

const closeModal = () => {
  modal.value.close();
};

const indumentaria = [
  {
    title: "Cortaviento",
    class: "object-top",
    detalle: "Entrenamiento",
    description: "SPIRIT SPORT",
    precio: "$19.990",
    image: "https://i.ibb.co/RprKHHy5/cortaviento.webp",
  },
  {
    title: "Camiseta Front",
    detalle: "Segunda indumentaria",
    description: "SPIRIT SPORT",
    precio: "$19.990",
    image: "https://i.ibb.co/tMxgm41X/polera-Front.webp",
  },
  {
    title: "Camiseta Back",
    detalle: "Segunda indumentaria",
    description: "SPIRIT SPORT",
    precio: "$19.990",
    image: "https://i.ibb.co/nqFkb6gV/polera-Back.webp",
  },
  {
    title: "Camiseta 2024",
    detalle: "Primera indumentaria",
    description: "SPIRIT SPORT",
    precio: "$19.990",
    image: "https://i.ibb.co/QFv3tX5J/pauFront.webp",
  },
];
</script>

<style scoped>
.bg-main {
  background-image: url("../assets/fondoBg4.jpg");
  height: 100vh;
  width: 100%;
}

.vignette::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
      ellipse at center,
      transparent 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    rgba(0, 0, 0, 0.4);
}
</style>
