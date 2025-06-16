<script setup>
import { ref } from 'vue'
import dataJugadoras from '../data/dataJugadoras.json'

// Solo jugadoras que tengan "Escuela Vikingas" en el campo Equipo
const jugadoras = ref(
  dataJugadoras.filter(j =>
    j.Equipo &&
    j.Equipo.toLowerCase().includes('escuela vikingas')
  )
)
</script>

<template>
  <div class="max-w-7xl mx-auto p-4">
    <h1 class="font-gobold relative text-center tracking-widest text-[#07a495] text-3xl sm:text-4xl lg:text-7xl mb-6">
      Jugadoras Escuela Vikingas
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 py-14">

   

      <div
        v-for="jugadora in jugadoras"
        :key="jugadora['Nombre de usuario'] + (jugadora.Equipo || '')"
      >
      <img :src="jugadora.imagen" class="w-3/4 block lg:hidden mx-auto relative top-36" alt="">
       <div
        class="bg-white relative z-20   bg-no-repeat !bg-right card-jugadoras rounded-lg shadow p-4 flex flex-col"
       >
         <div class="flex-1 relative ">
  <img class="absolute w-1/3 hidden lg:block -bottom-4 right-0" :src="jugadora.imagen" alt="">
            <h2 class="text-xl font-semibold mb-1">{{ jugadora.Nombre }} {{ jugadora.Apellidos }}</h2>
          <p class="text-gray-600 mb-1"><strong>Equipo:</strong> {{ jugadora.Equipo }}</p>
          <p class="text-gray-600"><strong>Estado:</strong> {{ jugadora.Estado }}</p>
          <p class="text-gray-600"><strong>Posición:</strong> {{ jugadora.posicion }}</p>

        </div>
       </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

    :style="jugadora.imagen ? { backgroundImage: `url(${jugadora.imagen})`, backgroundSize: 'contain', backgroundPosition: 'top' } : {}"
