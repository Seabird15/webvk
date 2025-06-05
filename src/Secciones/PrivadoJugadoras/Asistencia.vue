<template>
    <section>
   <div class="flex flex-col items-center justify-center text-center py-10 px-4">
      <h2
        class="font-gobold relative tracking-widest text-[#07a495] text-3xl sm:text-4xl lg:text-7xl mb-6"
     >Privado Jugadoras</h2>

     <div class="text-white flex lg:flex-row flex-col gap-4
      p-7 text-2xl sm:text-3xl lg:text-4xl mb-4 text-left">
       <router-link to="/asistenciaascenso" class="flex bg-yellow-500 text-black  p-2" >
   <p class="border-b-1 border-[#07a495] my-auto ">% Asistencia Entrenamientos Ascenso</p>
 <ArrowRight class="my-auto h-auto lg:w-10 w-20" />
         </router-link>
      <router-link to="/asistenciaescuela" class="flex bg-yellow-500 text-black  p-2" >
   <p class="border-b-1 border-[#07a495] my-auto ">% Asistencia Entrenamientos Escuela</p>
 <ArrowRight class="my-auto h-auto lg:w-10 w-20" />
         </router-link>
     </div>
   </div>
    </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next';
import { RouterLink } from 'vue-router'
</script>
