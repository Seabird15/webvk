<template>
  <section>
    <div class="relative w-full mx-auto lg:p-7 rounded-lg shadow-lg overflow-hidden mb-10 min-h-[40vh]">
      <img
        :src="imageBanner"
        alt="Banner Indumentaria"
        loading="eager"
        @load="handleImageLoad"
        @error="handleImageError"
        class="w-full h-[40vh] lg:h-[60vh] object-cover transition-all duration-500"
        :class="{ hidden: loading || imageError }"
      />
      <!-- Overlay -->
      <div
        v-if="!loading && !imageError"
        class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"
      ></div>
      <div
        v-if="!loading && !imageError"
        class="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1
          class="font-gobold tracking-widest text-[#07a495] text-4xl lg:text-7xl mb-4 drop-shadow-lg bg-white/80 rounded px-4 py-2"
        >
          Indumentaria VK
        </h1>
        <RouterLink
          to="/"
          class="mt-2 inline-block text-white bg-[#07a495] hover:bg-[#059485] transition px-6 py-2 rounded-md shadow-lg font-semibold"
        >
          &lt; Volver atrás
        </RouterLink>
      </div>
      <!-- Loader -->
      <div
        v-if="loading"
        class="absolute inset-0 flex justify-center items-center bg-black"
      >
        <span class="loader"></span>
      </div>
      <!-- Error -->
      <div v-if="!loading && imageError" class="absolute inset-0 flex flex-col justify-center items-center bg-white/90 z-10">
        <p class="text-red-500 text-lg mb-4">Error al cargar la imagen.</p>
        <RouterLink
          to="/"
          class="text-white bg-[#07a495] p-2 rounded-md"
        >
          &lt; Volver atrás
        </RouterLink>
      </div>
    </div>

    <!-- Contenido principal -->
    <div v-if="!loading && !imageError" class="relative">
      <section class="mt-2 px-10 pt-10">
        <div class="grid lg:grid-cols-2 gap-7 mb-10">
          <Cards
            title="Camiseta 2025"
            price="$14.990"
            description="Camiseta 2025, Spirit Sport. $19.990, Talla de la XS a la 2XL"
            image="https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A7046%201%201.webp?alt=media&token=7a17d37d-3797-4f27-9e40-5bb815245d52"
            extraClass="bg-no-repeat w-full h-150"
          >
            <template #footer>
              <a
                :href="`https://wa.me/56987451232?text=Hola!%20Quiero%20encargar%20la%20Camiseta%202025`"
                target="_blank"
                class="mt-4 inline-block bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-4 py-2 rounded shadow transition"
              >
                Encargar por WhatsApp
              </a>
            </template>
          </Cards>
          <Cards
            title="Camiseta 2024"
            price="$14.990"
            description="Camiseta 2024, Spirit Sport. $14.990, Talla de la XS a la 2XL"
            image="https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A7001.jpg?alt=media&token=82050bdb-2713-4b93-9876-878d481f4e9d"
            extraClass="bg-no-repeat w-full h-150"
          >
            <template #footer>
              <a
                :href="`https://wa.me/56987451232?text=Hola!%20Quiero%20encargar%20la%20Camiseta%202024`"
                target="_blank"
                class="mt-4 inline-block bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-4 py-2 rounded shadow transition"
              >
                Encargar por WhatsApp
              </a>
            </template>
          </Cards>
        </div>

        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          <Cards
            v-for="(item, index) in additionalItems"
            :key="index"
            v-bind="item"
          >
            <template #footer>
              <a
                :href="`https://wa.me/56987451232?text=Hola!%20Quiero%20encargar%20${encodeURIComponent(item.title)}`"
                target="_blank"
                class="mt-4 inline-block bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-4 py-2 rounded shadow transition"
              >
                Encargar por WhatsApp
              </a>
            </template>
          </Cards>
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
