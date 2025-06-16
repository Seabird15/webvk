<template>
  <div class="font-gobold">
    <!-- Vista dinámica -->
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style>
@font-face {
  font-family: "gobold";
  src: url("/src/assets/Fuentes/GoboldExtra.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "goboldText";
  src: url("/src/assets/Fuentes/GoboldLowplus.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}

.color-button {
  background-color: #07a495;
  color: white;
}
.font-gobold {
  font-family: "gobold", sans-serif;
}
html {
  background-color: black;
  scroll-behavior: smooth;
}
</style>
