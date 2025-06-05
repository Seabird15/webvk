<script setup>
import { ref, computed } from 'vue'
import dataJugadoras from '../data/dataJugadoras.json'

const categoriasPermitidas = [
  "VK Ascenso",
  "Escuela Vikingas",
  "Fútbol 11 Vks",
  "Coach Team"
]

// Normalizamos categorías permitidas a minúsculas para comparar
const categoriasPermitidasLower = categoriasPermitidas.map(c => c.toLowerCase())

// Carga todo el JSON sin filtro para que la data esté completa y reactiva
const jugadoras = ref(dataJugadoras)

// Estado para filtro equipo
const equipoSeleccionado = ref('Todos')

// Obtener lista de equipos únicos (solo categorías permitidas) para el filtro
const equiposUnicos = computed(() => {
  const equipos = new Set()
  jugadoras.value.forEach(j => {
    if (j.Equipo) {
      j.Equipo.split(',').map(e => e.trim().toLowerCase()).forEach(equipo => {
        if (equipo && categoriasPermitidasLower.includes(equipo)) {
          equipos.add(equipo)
        }
      })
    }
  })
  // Capitalizar primera letra para mostrar en el select
  const equiposCapitalizados = Array.from(equipos).map(e => e.charAt(0).toUpperCase() + e.slice(1))
  return ['Todos', ...equiposCapitalizados.sort()]
})

// Filtrar jugadoras según equipo seleccionado y categorías permitidas
const jugadorasFiltradas = computed(() => {
  if (equipoSeleccionado.value === 'Todos') {
    // Repetir jugadora por cada categoría permitida que tenga
    const resultado = []
    jugadoras.value.forEach(j => {
      if (!j.Equipo) return
      const equipos = j.Equipo.split(',').map(e => e.trim().toLowerCase())
      equipos.forEach(equipo => {
        if (categoriasPermitidasLower.includes(equipo)) {
          resultado.push({
            ...j,
            Equipo: equipo.charAt(0).toUpperCase() + equipo.slice(1)
          })
        }
      })
    })
    return resultado
  }

  // Para equipo seleccionado, devolvemos solo jugadoras que tengan ese equipo
  const equipoLower = equipoSeleccionado.value.toLowerCase()
  return jugadoras.value.filter(j => {
    if (!j.Equipo) return false
    const equipos = j.Equipo.split(',').map(e => e.trim().toLowerCase())
    return equipos.includes(equipoLower)
  })
})
</script>

<template>
  <div class="max-w-7xl mx-auto p-4">
    <h1 class="font-gobold relative text-center tracking-widest text-[#07a495] text-3xl sm:text-4xl lg:text-7xl mb-6">
      Jugadoras
    </h1>

    <div class="mb-6 flex justify-center text-white">
      <select
        v-model="equipoSeleccionado"
        class="border border-gray-300 rounded-md px-4 py-2 mx-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#07a495] transition"
      >
        <option v-for="equipo in equiposUnicos" :key="equipo" :value="equipo">{{ equipo }}</option>
      </select>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="jugadora in jugadorasFiltradas"
        :key="jugadora['Nombre de usuario'] + jugadora.Equipo"
        class="bg-white rounded-lg shadow p-4 flex flex-col"
      >
        <div class="flex-1">
          <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="" />
          <h2 class="text-xl font-semibold mb-1">{{ jugadora.Nombre }} {{ jugadora.Apellidos }}</h2>
          <p class="text-gray-600 mb-1"><strong>Equipo:</strong> {{ jugadora.Equipo }}</p>
          <p class="text-gray-600"><strong>Estado:</strong> {{ jugadora.Estado }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
