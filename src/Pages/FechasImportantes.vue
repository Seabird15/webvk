<template>
  <section class="max-w-2xl mx-auto mt-10 p-4">
    <router-link to="/admin" class="bg-[#07a495] text-white px-4 py-2 rounded mb-6 inline-block hover:bg-[#059687] transition">
      &lt; Volver al inicio
    </router-link>
    <h1 class="text-3xl font-bold text-[#07a495] mb-8 text-center">Cumpleaños y Fechas Importantes</h1>
    <div class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-bold mb-4 text-[#07a495]">Próximos Cumpleaños</h2>
      <ul>
        <li v-for="cumple in cumpleañosOrdenados" :key="cumple.id" class="mb-2">
          🎂 <b>{{ cumple.nombre }}</b> - {{ cumple.fecha }}
        </li>
      </ul>
      <h2 class="text-xl font-bold mt-8 mb-4 text-[#07a495]">Fechas Importantes</h2>
      <ul>
        <li v-for="fecha in fechas" :key="fecha.id" class="mb-2">
          📅 <b>{{ fecha.titulo }}</b> - {{ fecha.fecha }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const cumpleaños = ref([])
const fechas = ref([
 { id: 1, titulo: 'Aniversario del club', fecha: '16/12/2025' }
])

const cargarCumpleaños = async () => {
  const colecciones = [
    'jugadoras-ascenso',
    'jugadoras-escuela',
    'jugadoras-fut11'
  ]
  let lista = []
  for (const col of colecciones) {
    const snap = await getDocs(collection(db, col))
    snap.forEach(doc => {
      const data = doc.data()
      if (data.nacimiento) {
        lista.push({
          id: doc.id + col,
          nombre: `${data.nombre} ${data.apellido}`,
          fecha: data.nacimiento
        })
      }
    })
  }
  cumpleaños.value = lista
}

// Ordenar cumpleaños por fecha (próximos primero)
const cumpleañosOrdenados = computed(() => {
  // formato DD/MM/YYYY
  const hoy = new Date()
  return [...cumpleaños.value].sort((a, b) => {
    const [diaA, mesA] = a.fecha.split('/')
    const [diaB, mesB] = b.fecha.split('/')
    const fechaA = new Date(hoy.getFullYear(), parseInt(mesA) - 1, parseInt(diaA))
    const fechaB = new Date(hoy.getFullYear(), parseInt(mesB) - 1, parseInt(diaB))
    const diffA = fechaA >= hoy ? fechaA - hoy : fechaA.setFullYear(hoy.getFullYear() + 1) - hoy
    const diffB = fechaB >= hoy ? fechaB - hoy : fechaB.setFullYear(hoy.getFullYear() + 1) - hoy
    return diffA - diffB
  })
})

onMounted(() => {
  cargarCumpleaños()
})
</script>