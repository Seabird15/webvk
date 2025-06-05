<template>
  <hr class="text-white mx-2" />

  <section class="mb-7">
    <div class="container p-7">
      <h2 class="text-white text-center text-6xl lg:text-7xl">
        Próximos partidos
      </h2>
    </div>

    <div class="p-7 lg:relative grid lg:grid-cols-3 gap-2">
      <p
        class="text-white lg:absolute bg-red-600 w-fit p-2 rounded-md -mb-7 z-20"
      >
        NextMatch
      </p>
      <Cards
        description="Fortín Cruzado, Ligas Femeninas"
        image="https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2Ffotopartido.jpeg?alt=media&token=a81dce6f-eee9-475a-8c1d-aca3bbc435a2"
        extraClass="bg-no-repeat h-160 w-full  "
      />
      <p
        class="text-white lg:absolute lg:left-1/3 bg-red-600 w-fit p-2 rounded-md -mb-7 z-20"
      >
        Finalizados
      </p>
      <Cards
        description="Fortín Cruzado, Ligas Femeninas"
        image="https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2Ffotopartido2.jpeg?alt=media&token=8bf8c5a2-2cd5-47bb-8d0e-e6d5278de431"
        extraClass="bg-no-repeat h-160 w-full "
        :color="false"
      />
      <Cards
        description="Fortín Cruzado, Ligas Femeninas"
        image="https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2Ffotopartido3.jpeg?alt=media&token=610196db-9c6c-4184-9f2f-3b2a71e0617a"
        extraClass="bg-no-repeat h-160 w-full "
        :color="false"
      />
    </div>
    <!-- Navegación -->
    <!-- <nav
      class="text-white flex flex-col text-center justify-center gap-4 text-2xl"
    >
      <RouterLink to="/ligas">Ligas</RouterLink>
      <RouterLink to="/calendario">Calendario</RouterLink>
      <RouterLink to="/publicaciones">Publicaciones</RouterLink>
    </nav> -->
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Cards from "../Componentes/Cards.vue";
</script>
