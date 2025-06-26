<template>
  <section class="py-10  " id="jugadoras">
    <div class="flex flex-col items-center justify-center text-center py-6 px-2 sm:px-4">
      <h2 class="font-gobold tracking-widest text-[#07a495] text-3xl sm:text-4xl lg:text-6xl mb-8 drop-shadow">
        Portal Jugadora
      </h2>

      <div class="w-full max-w-lg flex flex-col gap-7">
        <!-- ASCENSO -->
        <div class="relative">
          <button
            @click="toggleDropdown('ascenso')"
            class="flex items-center justify-between w-full glass-card px-5 py-4 rounded-2xl shadow-xl font-bold text-lg sm:text-xl transition-all active:scale-95 border-2 border-[#ffe066] hover:border-[#ffd60a]"
          >
            <div class="flex items-center gap-3">

            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-300 shadow">
                 <Trophy class="w-6 h-6 text-[#07a495]" />

              
              </span>
              <span>Equipo Ascenso</span>
            </div>
            <ArrowDown :class="['transition-transform duration-300', openAscenso ? 'rotate-180' : '']" />
          </button>
          <transition name="expand">
            <div
              v-if="openAscenso"
              class="flex flex-col gap-3 mt-2 glass-dropdown rounded-2xl shadow-xl p-4 z-10 border border-[#ffe066]"
            >
              <router-link
                to="/asistenciaascenso"
                class="dropdown-link"
              >
                <span>% Asistencia Entrenamientos Ascenso</span>
                <ArrowRight class="w-6 h-6 ml-auto" />
              </router-link>
              <router-link
                to="/objetivosascenso"
                class="dropdown-link"
              >
                <span>Objetivos Ascenso</span>
                <ArrowRight class="w-6 h-6 ml-auto" />
              </router-link>
              <router-link
                to="/entrenamientosascenso"
                class="dropdown-link"
              >
                <span>Entrenamientos Ascenso</span>
                <ArrowRight class="w-6 h-6 ml-auto" />
              </router-link>
            </div>
          </transition>
        </div>

        <!-- ESCUELA -->
        <div class="relative">
          <button
            @click="toggleDropdown('escuela')"
            class="flex items-center justify-between w-full glass-card px-5 py-4 rounded-2xl shadow-xl font-bold text-lg sm:text-xl transition-all active:scale-95 border-2 border-[#ffd6a5] hover:border-[#ffb86b]"
          >
            <div class="flex items-center gap-3">
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ffd6a5] shadow">
                 <Trophy class="w-6 h-6 text-[#07a495]" />
              </span>
              <span>Equipo Escuela</span>
            </div>
            <ArrowDown :class="['transition-transform duration-300', openEscuela ? 'rotate-180' : '']" />
          </button>
          <transition name="expand">
            <div
              v-if="openEscuela"
              class="flex flex-col gap-3 mt-2 glass-dropdown rounded-2xl shadow-xl p-4 z-10 border border-[#ffd6a5]"
            >
              <router-link
                to="/asistenciaescuela"
                class="dropdown-link"
              >
                <span>% Asistencia Entrenamientos Escuela</span>
                <ArrowRight class="w-6 h-6 ml-auto" />
              </router-link>
              <router-link
                to="/objetivosescuela"
                class="dropdown-link"
              >
                <span>Objetivos Escuela</span>
                <ArrowRight class="w-6 h-6 ml-auto" />
              </router-link>
                <router-link
                to="/entrenamientosescuela"
                class="dropdown-link"
              >
                <span>Entrenamientos Escuela</span>
                <ArrowRight class="w-6 h-6 ml-auto" />
              </router-link>
            </div>
          </transition>
        </div>

        <!-- FUT11 (descomenta si lo usas) -->

        <div class="relative">
          <button
            @click="toggleDropdown('fut')"
            class="flex items-center justify-between w-full glass-card px-5 py-4 rounded-2xl shadow-xl font-bold text-lg sm:text-xl transition-all active:scale-95 border-2 border-[#b5ead7] hover:border-[#40c9a2]"
          >
            <div class="flex items-center gap-3">
               <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow">
                 <Trophy class="w-6 h-6 text-[#07a495]" />
              </span>
              <span>Equipo Fut 11</span>
            </div>
            <ArrowDown :class="['transition-transform duration-300', openFut ? 'rotate-180' : '']" />
          </button>
          <transition name="expand">
            <div
              v-if="openFut"
              class="flex flex-col gap-3 mt-2 glass-dropdown rounded-2xl shadow-xl p-4 z-10 border border-[#b5ead7]"
            >
              <router-link
                   to=""
                class="dropdown-link opacity-50 cursor-not-allowed"
              >
                <span>% Asistencia Entrenamientos Fut 11</span>
                <ArrowRight class="w-6 h-6 ml-auto" />
              </router-link>
              <router-link
                to=""
                class="dropdown-link opacity-50 cursor-not-allowed"
              >
                <span>Objetivos Fut 11</span>
                <ArrowRight class="w-6 h-6 ml-auto" />
              </router-link>
                <router-link
                to="/entrenamientosfut"
                class="dropdown-link"
              >
                <span>Entrenamientos Fut11</span>
                <ArrowRight class="w-6 h-6 ml-auto" />
              </router-link>
            </div>
          </transition>
        </div>

      </div>

      <h2 class="font-gobold tracking-widest text-[#07a495] text-3xl sm:text-4xl lg:text-6xl mb-6 mt-14 drop-shadow">
        Galería Fotos
      </h2>
      <router-link
        to="/galeria"
        class="flex items-center justify-center gap-2 rounded-2xl px-8 py-4 bg-[#07a495] text-white  font-bold text-xl shadow-2xl hover:scale-105 hover:shadow-yellow-200 transition-all"
      >
        <span>Ir a la Galería</span>
        <ArrowRight class="w-8 h-8" />
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { ArrowRight, ArrowDown, Trophy } from "lucide-vue-next";

const openAscenso = ref(false);
const openEscuela = ref(false);
const openFut = ref(false);

function toggleDropdown(equipo) {
  openAscenso.value = equipo === 'ascenso' ? !openAscenso.value : false;
  openEscuela.value = equipo === 'escuela' ? !openEscuela.value : false;
  openFut.value = equipo === 'fut' ? !openFut.value : false;
}
</script>

<style scoped>
.glass-card {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 24px 0 rgba(7,164,149,0.10), 0 2px 24px rgba(0,0,0,0.10);
  border: 2px solid rgba(255,255,255,0.5);
}
.glass-dropdown {
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(8px);
}
.dropdown-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #07a495;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  transition: background 0.2s, color 0.2s;
}
.dropdown-link:hover {
  background: #e0f7fa;
  color: #059687;
  text-decoration: underline;
}
.expand-enter-active, .expand-leave-active {
  transition: all 0.3s cubic-bezier(.4,0,.2,1);
}
.expand-enter-from, .expand-leave-to {
  opacity: 0;
  transform: scaleY(0.95) translateY(-10px);
}
</style>