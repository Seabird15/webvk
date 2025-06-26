<template>
  <section class="max-w-5xl mx-auto mt-10 p-4">
    <router-link to="/admin" class="bg-[#07a495] text-white px-4 py-2 rounded mb-6 inline-block hover:bg-[#059687] transition">
      &lt; Volver al inicio
    </router-link>
    <h1 class="text-3xl font-bold text-[#07a495] mb-8 text-center">Estadísticas de Entrenamientos</h1>
    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="(equipo, key) in equipos" :key="key" class="bg-white rounded-xl shadow-lg p-6">
        <h2 class="text-xl font-bold mb-4 text-[#07a495]">{{ equipo.nombre }}</h2>
        <table class="w-full text-sm">
          <thead>
            <tr>
              <th class="text-left">Jugadora</th>
              <th class="text-center">Asistencias</th>
              <th class="text-center">%</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="jugadora in equipo.jugadoras" :key="jugadora.id">
              <td>{{ jugadora.nombre }} {{ jugadora.apellido }}</td>
              <td class="text-center">{{ jugadora.asistencias }}</td>
              <td class="text-center">{{ jugadora.porcentaje }}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db } from '../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const equipos = ref({
  ascenso: { nombre: 'Ascenso', jugadoras: [] },
  escuela: { nombre: 'Escuela', jugadoras: [] },
  fut11: { nombre: 'Fut 11', jugadoras: [] }
})

const colecciones = {
  ascenso: 'jugadoras-ascenso',
  escuela: 'jugadoras-escuela',
  fut11: 'jugadoras-fut11'
}

onMounted(async () => {
  // 1. Traer jugadoras de cada equipo
  for (const key in colecciones) {
    const snap = await getDocs(collection(db, colecciones[key]))
    equipos.value[key].jugadoras = snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      asistencias: 0,
      porcentaje: 0
    }))
  }

  // 2. Traer entrenamientos de cada equipo
  const entrenamientosSnap = await getDocs(collection(db, 'entrenamientos'))
  const entrenamientosPorEquipo = { ascenso: [], escuela: [], fut11: [] }
  entrenamientosSnap.forEach(docSnap => {
    const data = docSnap.data()
    if (data.equipo === 'jugadoras-ascenso') entrenamientosPorEquipo.ascenso.push({ id: docSnap.id, ...data })
    if (data.equipo === 'jugadoras-escuela') entrenamientosPorEquipo.escuela.push({ id: docSnap.id, ...data })
    if (data.equipo === 'jugadoras-fut11') entrenamientosPorEquipo.fut11.push({ id: docSnap.id, ...data })
  })

  // 3. Para cada equipo, para cada jugadora, contar asistencias
  for (const key in equipos.value) {
    const entrenamientos = entrenamientosPorEquipo[key]
    const totalEntrenamientos = entrenamientos.length

    // Map: nombre+apellido en minúsculas para comparar
    const jugadoras = equipos.value[key].jugadoras

    // Inicializar asistencias
    jugadoras.forEach(j => {
      j.asistencias = 0
      j.porcentaje = 0
    })

    // Para cada entrenamiento, buscar asistencias
    for (const entrenamiento of entrenamientos) {
      const asistenciasSnap = await getDocs(collection(db, `asistencias_${entrenamiento.id}`))
      asistenciasSnap.forEach(asistenciaDoc => {
        const asistencia = asistenciaDoc.data()
        if (asistencia.asiste) {
          // Buscar jugadora por nombre y apellido (puedes mejorar el match si lo necesitas)
          const partes = (asistencia.nombre || '').trim().toLowerCase().split(' ')
          const nombreA = partes[0] || ''
          const apellidoA = partes.slice(1).join(' ') || ''
          const jugadora = jugadoras.find(j =>
            j.nombre && j.apellido &&
            j.nombre.trim().toLowerCase().startsWith(nombreA.slice(0, 2)) &&
            j.apellido.trim().toLowerCase() === apellidoA
          )
          if (jugadora) {
            jugadora.asistencias++
          }
        }
      })
    }

    // Calcular porcentaje
    jugadoras.forEach(j => {
      j.porcentaje = totalEntrenamientos > 0 ? Math.round((j.asistencias / totalEntrenamientos) * 100) : 0
    })
  }
})
</script>