<template>
  <div class="font-gobold">
    <transition name="fade">
      <div v-if="loading" class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
        <img src="./assets/vk-logo-normal.png" alt="Logo" class="w-32 h-32 animate-bounce mb-6" />
        <span class="text-[#07a495] text-2xl font-gobold animate-pulse">Club Deportivo Vikingas</span>
      </div>
    </transition>
    <!-- Vista dinámica -->
    <div v-if="!loading" class="font-gobold">
      <RouterView />
      <Nav />
    </div>



  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Nav from "./Componentes/Nav.vue";
import { ref, onMounted } from "vue";


const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1800); 
});

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-bounce {
  animation: bounce 1.2s infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }
}

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

p,
input,
textarea,
select,
button {
  font-family: "goboldText", sans-serif;

}

html {
  background-color: black;
  scroll-behavior: smooth;
}

body,
#app {
  padding-bottom: 80px;
}
</style>
