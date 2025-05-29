<template>
  <section class="relative flex justify-center lg:items-center min-h-[70vh]">
    <!-- Loader se muestra mientras loading es true -->
    <span v-if="loading" class="loader"></span>

    <!-- Imagen siempre está en el DOM para permitir que se cargue,
         pero su visibilidad se controla con v-show.
         Solo se muestra si no está cargando Y no hay error. -->
    <img
      v-show="!loading && !imageError"
      @load="handleImageLoad"
      @error="handleImageError"
      loading="eager"
      class="w-full md:w-full lg:w-full h-auto lg:max-h-[80vh] mx-auto object-cover lg:p-7 rounded-lg shadow-lg"
      :src="imageBanner"
      alt="Indumentaria Detalle"
    />
    <h1
      v-show="!loading && !imageError"
      class="font-gobold absolute -bottom-5 bg-white p-2 lg:right-1/2 tracking-widest text-[#07a495] text-4xl sm:text-4xl lg:text-7xl mb-6"
    >
      Indumentaria VK
    </h1>
    <RouterLink
      to="/"
      v-show="!loading && !imageError"
      class="absolute text-white -bottom-7 bg-[#07a495] p-2 left-1/12 rounded-md"
    >
      < Volver atrás</RouterLink
    >

    <!-- Mensaje de error se muestra si la carga terminó Y hubo un error -->
    <p v-if="!loading && imageError" class="text-red-500">
      Error al cargar la imagen.
    </p>
  </section>

  <section class="mt-[120px]">
    <div class="h-screen px-10 pt-10">
      <div class="grid lg:grid-cols-2 gap-7">
        <Cards
          title="Camiseta 2025"
          price="$19.990"
          description="Camiseta 2025, Spirit Sport. $19.990"
          image="https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A7046.jpg?alt=media&token=d1729e38-215c-41c5-9b72-656684225597"
          extraClass="bg-no-repeat w-full h-150"
        />
        <Cards
          title="Camiseta 2024"
          price="$19.990"
          description="Camiseta 2025, Spirit Sport. $19.990"
          image="https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A7001.jpg?alt=media&token=82050bdb-2713-4b93-9876-878d481f4e9d"
          extraClass="bg-no-repeat w-full h-150 "
        />
      </div>
      <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        <Cards
          title="Camiseta 2024"
          price="$19.990"
          description="Camiseta 2025, Spirit Sport. $19.990"
          image="https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A6848.jpg?alt=media&token=d39ccad6-f0c8-4604-9f7c-92beb924105a"
          extraClass="bg-no-repeat w-full h-150 my-7"
        />
        <Cards
          title="Camiseta 2024"
          price="$19.990"
          description="Camiseta 2025, Spirit Sport. $19.990"
          image="https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A6881.jpg?alt=media&token=3714e0c1-f587-4d08-82a2-c24a1a07fe10"
          extraClass="bg-no-repeat w-full h-150 my-7"
        />
        <Cards
          title="Camiseta 2024"
          price="$19.990"
          description="Camiseta 2025, Spirit Sport. $19.990"
          image="https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A6877.jpg?alt=media&token=08bf8da7-3fe1-4cf8-8351-afb302eaaabf"
          extraClass="bg-no-repeat w-full h-150 my-7"
        />
        <Cards
          title="Indumentaria Completa, Camiseta + Short"
          price="$19.990"
          description="Camiseta 2025, Spirit Sport. $19.990"
          image="https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A7120.jpg?alt=media&token=c3a12f62-a2df-4c67-8c71-c044130b329e"
          extraClass="bg-no-repeat w-full h-150 my-7"
        />
      </div>
    </div>
  </section>
  <section>
    <div class="grid lg:grid-cols-4 px-7 gap-5 bg-gray-100"></div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

import Cards from "../Componentes/Cards.vue";

const loading = ref(true);
const imageError = ref(false);

const imageBanner =
  "https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A7167%201.webp?alt=media&token=6d2d8496-2268-43eb-88f5-b397ab3e121b";

const handleImageLoad = () => {
  loading.value = false;
  imageError.value = false; // Asegurar que no haya mensaje de error si carga bien
};

const handleImageError = () => {
  loading.value = false;
  imageError.value = true;
  console.error("Error al cargar la imagen.");
};
</script>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #fff; /* Color primario del spinner */
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-left: 4px solid #07a495; /* Color secundario del spinner */
  border-bottom: 4px solid transparent;
  animation: rotation 0.5s linear infinite reverse;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
