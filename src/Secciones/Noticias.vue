<template>
  <section class="mb-7">
    <div class="container p-7">
      <h2 class="text-white text-center text-6xl lg:text-9xl">Noticias</h2>
    </div>
    <!-- Navegación -->
    <nav
      class="text-white flex flex-col text-center justify-center gap-4 text-2xl"
    >
      <RouterLink to="/ligas">Ligas</RouterLink>
      <RouterLink to="/calendario">Calendario</RouterLink>
      <RouterLink to="/publicaciones">Publicaciones</RouterLink>
    </nav>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
