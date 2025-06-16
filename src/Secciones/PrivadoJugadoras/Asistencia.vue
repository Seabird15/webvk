<template>
  <section class="py-20" id="jugadoras">
    <div class="flex flex-col items-center justify-center text-center py-10 px-4">
      <h2 class="font-gobold relative tracking-widest text-[#07a495] text-3xl sm:text-4xl lg:text-7xl mb-6">
        Privado Jugadoras
      </h2>

      <div class="text-white flex flex-col lg:flex-row gap-4 p-7 text-2xl sm:text-3xl lg:text-4xl mb-4 text-left w-full max-w-3xl">
        <!-- Ascenso Dropdown -->
        <div class="relative w-full">
          <button
            @click="openAscenso = !openAscenso"
            class="flex justify-between items-center w-full bg-yellow-500 text-black p-2 rounded-xl shadow transition"
          >
            <span class="font-bold">Equipo Ascenso</span>
            <ArrowDown :class="['transition-transform', openAscenso ? 'rotate-180' : '']" />
          </button>
          <div
            v-if="openAscenso"
            class="flex flex-col gap-2 mt-2 bg-white/90 rounded-xl shadow-lg p-4 z-10"
          >
            <router-link
              to="/asistenciaascenso"
              class="flex items-center text-sm gap-2 text-[#07a495] hover:underline font-semibold"
            >
              % Asistencia Entrenamientos Ascenso
              <ArrowRight class="w-6 h-6 ml-auto" />
            </router-link>
            <hr class="border-t border-black/20 my-2 "  />
            <router-link
              to="/objetivosascenso"
              class="flex items-center text-sm gap-2 text-[#07a495] hover:underline font-semibold"
            >
              Objetivos Ascenso
              <ArrowRight class="w-6 h-6 ml-auto" />
            </router-link>
          </div>
        </div>
        <!-- Escuela Dropdown -->
        <div class="relative w-full">
          <button
            @click="openEscuela = !openEscuela"
            class="flex justify-between items-center w-full bg-yellow-500 text-black p-2 rounded-xl shadow transition"
          >
            <span class="font-bold">Equipo Escuela</span>
                     <ArrowDown :class="['transition-transform', openEscuela ? 'rotate-180' : '']" />

          </button>
          <div
            v-if="openEscuela"
            class="flex flex-col gap-2 mt-2 bg-white/90 rounded-xl shadow-lg p-4 z-10"
          >
            <router-link
              to="/asistenciaescuela"
              class="flex items-center cursor-pointer text-sm gap-2 text-[#07a495] hover:underline font-semibold"
            >
              % Asistencia Entrenamientos Escuela
              <ArrowRight class="w-6 h-6 ml-auto" />
            </router-link>
            <hr class="border-t border-black/20 my-2 "  />
<router-link
  to="/objetivosescuela"
  class="flex items-center cursor-pointer text-sm gap-2 text-[#07a495] font-semibold pointer-events-none opacity-40"
  tabindex="-1"
  aria-disabled="true"
>
  Objetivos Escuela
  <ArrowRight class="w-6 h-6 ml-auto" />
</router-link>
          </div>
        </div>
   <!-- Fut11 Dropdown -->
        <!-- <div class="relative w-full ">
          <button
            @click="openFut = !openFut"
            class="flex justify-between items-center w-full bg-yellow-500 text-black p-2 rounded-xl shadow transition"
          >
            <span class="font-bold">Equipo Fut 11</span>
            <ArrowDown :class="['transition-transform', openFut ? 'rotate-180' : '']" />

          </button>
          <div
            v-if="openFut"
            class="flex flex-col gap-2 mt-2 bg-white/90 rounded-xl shadow-lg p-4 z-10"
          >
            <router-link
              to="/asistenciaescuela"
              class="flex items-center gap-2 text-[#07a495] hover:underline font-semibold"
            >
              % Asistencia Entrenamientos Escuela
              <ArrowRight class="w-6 h-6" />
            </router-link>
            <router-link
              to="/objetivosescuela"
              class="flex items-center gap-2 text-[#07a495] hover:underline font-semibold"
            >
              Objetivos Fut11
              <ArrowRight class="w-6 h-6" />
            </router-link>
          </div>
        </div> -->
        
      </div>

      <h2 class="font-gobold relative tracking-widest text-[#07a495] text-3xl sm:text-4xl lg:text-7xl mb-6">
        Galería Jugadoras
      </h2>
      <router-link
        to="/galeria"
        class="flex rounded-2xl px-7 bg-yellow-500 text-black p-2"
      >
        <p class="border-b-1 border-[#07a495] my-auto">
          Ir a la Galería
        </p>
        <ArrowRight class="my-auto h-auto lg:w-10 w-20" />
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { ArrowRight } from "lucide-vue-next";
import { ArrowDown } from "lucide-vue-next";
import { RouterLink } from "vue-router";

const openAscenso = ref(false);
const openEscuela = ref(false);
const openFut = ref(false);
</script>