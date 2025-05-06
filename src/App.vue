<script setup>
import Home from "./Secciones/Home.vue";
import Categorias from "./Secciones/Categorias.vue";
import Competencias from "./Secciones/Competencias.vue";
import Indumentaria from "./Secciones/Indumentaria.vue";
</script>

<template>
  <Home />
  <Categorias />
  <Competencias />
  <Indumentaria />
</template>

<style>
@font-face {
  font-family: "gobold";
  src: url("/src/assets/Fuentes/GoboldExtra.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}

.font-gobold {
  font-family: "gobold", sans-serif;
}
html {
  background-color: black;
  scroll-behavior: smooth;
}
</style>
