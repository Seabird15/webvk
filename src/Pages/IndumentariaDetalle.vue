<template>
  <section>
    <!-- Imagen principal -->
    <img
      :src="imageBanner"
      alt="Banner Indumentaria"
      loading="eager"
      @load="handleImageLoad"
      @error="handleImageError"
      :class="[
        'w-full h-auto lg:max-h-[80vh] mx-auto object-cover lg:p-7 rounded-lg shadow-lg',
        { hidden: loading || imageError },
      ]"
    />

    <!-- Loader -->
    <div
      v-if="loading"
      class="relative flex justify-center items-center min-h-[70vh]"
    >
      <span class="loader"></span>
    </div>

    <!-- Error -->
    <div v-if="!loading && imageError" class="text-center py-10">
      <p class="text-red-500">Error al cargar la imagen.</p>
      <RouterLink
        to="/"
        class="mt-4 inline-block text-white bg-[#07a495] p-2 rounded-md"
      >
        &lt; Volver atrás
      </RouterLink>
    </div>

    <!-- Contenido principal -->
    <div v-if="!loading && !imageError" class="relative">
      <h1
        class="font-gobold absolute -top-[15%] transform translate-x-1/2 bg-white p-2 tracking-widest text-[#07a495] text-4xl lg:text-7xl mb-6"
      >
        Indumentaria VK
      </h1>
      <RouterLink
        to="/"
        class="absolute text-white -top-[12%] bg-[#07a495] p-2 left-1/12 rounded-md"
      >
        &lt; Volver atrás
      </RouterLink>

      <section class="mt-[120px] px-10 pt-10">
        <div class="grid lg:grid-cols-2 gap-7 mb-10">
          <Cards
            title="Camiseta 2025"
            price="$14.990"
            description="Camiseta 2025, Spirit Sport. $19.990, Talla de la XS a la 2XL"
            image="https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A7046.jpg?alt=media&token=d1729e38-215c-41c5-9b72-656684225597"
            extraClass="bg-no-repeat w-full h-150"
          />
          <Cards
            title="Camiseta 2024"
            price="$14.990"
            description="Camiseta 2024, Spirit Sport. $14.990, Talla de la XS a la 2XL"
            image="https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A7001.jpg?alt=media&token=82050bdb-2713-4b93-9876-878d481f4e9d"
            extraClass="bg-no-repeat w-full h-150"
          />
        </div>

        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          <Cards
            v-for="(item, index) in additionalItems"
            :key="index"
            v-bind="item"
          />
        </div>
      </section>
    </div>
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
  imageError.value = false;
};

const handleImageError = () => {
  loading.value = false;
  imageError.value = true;
  console.error("Error al cargar la imagen.");
};

const additionalItems = [
  {
    title: "Polerón Canguro",
    price: "$18.000",
    description:
      "Polerón con Gorro, Insignia Pro, Spirit Sport, Talla de la XS a la 2XL",
    image:
      "https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A6848.jpg?alt=media&token=d39ccad6-f0c8-4604-9f7c-92beb924105a",
    extraClass: "bg-no-repeat w-full h-150 my-7",
  },
  {
    title: "Camiseta Arquera",
    price: "$14.990",
    description: "Camiseta 2025, Spirit Sport, Talla de la XS a la 2XL",
    image:
      "https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A6881.jpg?alt=media&token=3714e0c1-f587-4d08-82a2-c24a1a07fe10",
    extraClass: "bg-no-repeat w-full h-150 my-7",
  },
  {
    title: "Cortavientos",
    price: "$18.000",
    description:
      "Cortaviento resistente al agua, Insignia Pro, Spirit Sport, Talla de la XS a la 2XL",
    image:
      "https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A6877.jpg?alt=media&token=08bf8da7-3fe1-4cf8-8351-afb302eaaabf",
    extraClass: "bg-no-repeat w-full h-150 my-7",
  },
  {
    title: "Indumentaria Completa, Camiseta + Short",
    price: "$20.990",
    description:
      "Indumentaria Completa, Camiseta + Short, Spirit Sport, Talla de la XS a la 2XL",
    image:
      "https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A7120.jpg?alt=media&token=c3a12f62-a2df-4c67-8c71-c044130b329e",
    extraClass: "bg-no-repeat w-full h-150 my-7",
  },
];
</script>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #fff;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  position: relative;
}
.loader::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-left: 4px solid #07a495;
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
.hidden {
  display: none;
}
</style>
