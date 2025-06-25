<script setup>
import Hero from "../Secciones/Hero.vue";
import Resultados from "../Secciones/Resultados.vue";
import Categorias from "../Secciones/Categorias.vue";
import Competencias from "../Secciones/Competencias.vue";
import Indumentaria from "../Secciones/Indumentaria.vue";
import Noticias from "../Secciones/Noticias.vue";
import Asistencia from "../Secciones/PrivadoJugadoras/Asistencia.vue";
import RedesSociales from "../Secciones/RedesSociales.vue";
import Sponsors from "../Secciones/Sponsors.vue";

</script>

<template>
  <div class="font-gobold">
    <Hero />
    <hr class="text-white mx-2" />

    <Resultados />
    <Noticias />

    <hr class="text-white mx-2" />
    <Categorias />

    <Competencias />
    <Indumentaria />
    <hr class="text-white mx-2" />

    <Asistencia />

    <hr class="text-white mx-2" />
    <RedesSociales />
    <hr class="text-white mx-2" />

    <Sponsors />
  </div>
</template>
