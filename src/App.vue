<script setup>
import Home from './components/Home.vue'
import Categorias from './components/Categorias.vue'
import Competencias from './components/Competencias.vue'
</script>

<template>
<Home />
<Categorias />
<Competencias />
</template>

<style>
@font-face {
  font-family: 'gobold';
  src: url('/src/assets/Fuentes/GoboldExtra.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

.font-gobold {
  font-family: 'gobold', sans-serif;
}
</style>