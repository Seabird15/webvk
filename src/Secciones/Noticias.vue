<template>
  <section class="mb-7">
    <div class="container p-7">
      <h2 class="text-white text-center text-6xl lg:text-9xl">Próximos partidos</h2>
    </div>

    <div class="p-7 grid lg:grid-cols-3 gap-2">
     <Cards
   
          description="Fortín Cruzado, Ligas Femeninas"
          image="./src/assets/fotopartido.jpeg"
          extraClass="bg-no-repeat h-160 w-full  "
        />
          <Cards
   
          description="Fortín Cruzado, Ligas Femeninas"
          image="./src/assets/fotopartido2.jpeg"
          extraClass="bg-no-repeat h-160 w-full "
                  :color="false"
        />
          <Cards
   
          description="Fortín Cruzado, Ligas Femeninas"
          image="./src/assets/fotopartido3.jpeg"
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
