<template>
  <hr class="text-white mx-2" />
  <section class="relative">
    <div
      class="container mx-auto flex flex-col items-start lg:justify-between p-6 sm:p-8 md:p-10 lg:p-20 uppercase font-bold"
    >
      <h2
        class="font-gobold relative tracking-widest text-[#07a495] text-3xl sm:text-4xl lg:text-7xl mb-6"
      >
        equipaciones 2025
      </h2>
      <div class="w-full grid lg:grid-cols-2">
        <Cards
          title="Camiseta 2025"
          price="$14.990"
          description="Camiseta 2025, Spirit Sport. $19.990, Talla de la XS a la 2XL"
          image="https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A7046%201%201.webp?alt=media&token=7a17d37d-3797-4f27-9e40-5bb815245d52"
          extraClass="bg-no-repeat w-full  h-150"
        />
        <Cards
          title="Camiseta 2024"
          price="$14.990"
          description="Camiseta 2024, Spirit Sport. $14.990, Talla de la XS a la 2XL"
          image="https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A7001.jpg?alt=media&token=82050bdb-2713-4b93-9876-878d481f4e9d"
          extraClass="hidden md:block bg-no-repeat w-full h-150"
        />
      </div>
      <div class="mx-auto w-full flex justify-center my-7">
        <RouterLink
          to="/indumentaria"
          class="bg-white p-2 rounded-md text-3xl text-[#07a495] font-bold hover:bg-[#07a495] hover:text-white transition"
        >
          ir a indumentaria &gt;
        </RouterLink>
      </div>
    </div>
  </section>
  <hr class="text-white mx-2" />
</template>

<script setup>
import Cards from "../Componentes/Cards.vue";
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
