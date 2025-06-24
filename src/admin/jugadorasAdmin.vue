<template>
  <section class="container mx-auto my-8">
    <router-link to="/" class="bg-[#07a495] text-white px-4 py-2 rounded mb-6 inline-block hover:bg-[#059687] transition">
       < Volver al inicio
    </router-link>

    <h1 class="text-3xl font-bold text-[#07a495] mb-8 text-center">Administrar Jugadoras</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- ASCENSO -->
      <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-[#07a495]">Ascenso</h2>
          <button
            @click="openModal('ascenso')"
            class="bg-[#07a495] cursor-pointer hover:bg-[#059687] text-white px-3 py-1 rounded font-bold shadow transition"
            title="Agregar jugadora"
          >
            + Agregar
          </button>
        </div>
        <div v-if="jugadoras.length === 0" class="text-gray-400 text-center py-8">Sin jugadoras registradas.</div>
        <div v-else class="flex flex-col gap-3">
          <div
            v-for="jugadora in jugadoras"
            :key="jugadora.id"
            class="flex items-center justify-between bg-[#f7fafc] rounded p-3 shadow-sm hover:shadow transition"
          >
            <div>
              <p class="font-semibold text-[#07a495]">{{ jugadora.nombre }} {{ jugadora.apellido }}</p>
              <p class="text-xs text-gray-600">Dorsal: {{ jugadora.dorsal }} <span v-if="jugadora.posicion">| {{ jugadora.posicion }}</span></p>
              <p class="text-xs text-gray-500" v-if="jugadora.nacimiento">Nacimiento: {{ jugadora.nacimiento }}</p>
              <p class="text-xs text-gray-500" v-if="jugadora.status">{{ jugadora.status }}</p>
            </div>
            <button
              @click="eliminar('jugadoras-ascenso', jugadora.id)"
              class="text-red-500 cursor-pointer hover:text-red-700 text-lg font-bold px-2"
              title="Eliminar"
            >🗑️</button>
          </div>
        </div>
      </div>
      <!-- ESCUELA -->
      <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-[#ffde59]">Escuela</h2>
          <button
            @click="openModal('escuela')"
            class="bg-[#ffde59] cursor-pointer hover:bg-yellow-400 text-[#07a495] px-3 py-1 rounded font-bold shadow transition"
            title="Agregar jugadora"
          >
            + Agregar
          </button>
        </div>
        <div v-if="jugadorasEscuela.length === 0" class="text-gray-400 text-center py-8">Sin jugadoras registradas.</div>
        <div v-else class="flex flex-col gap-3">
          <div
            v-for="jugadora in jugadorasEscuela"
            :key="jugadora.id"
            class="flex items-center justify-between bg-[#fdf6e3] rounded p-3 shadow-sm hover:shadow transition"
          >
            <div>
              <p class="font-semibold text-[#07a495]">{{ jugadora.nombre }} {{ jugadora.apellido }}</p>
              <p class="text-xs text-gray-600">Dorsal: {{ jugadora.dorsal }} <span v-if="jugadora.posicion">| {{ jugadora.posicion }}</span></p>
              <p class="text-xs text-gray-500" v-if="jugadora.nacimiento">Nacimiento: {{ jugadora.nacimiento }}</p>
              <p class="text-xs text-gray-500" v-if="jugadora.status">{{ jugadora.status }}</p>
            </div>
            <button
              @click="eliminar('jugadoras-escuela', jugadora.id)"
              class="text-red-500 cursor-pointer hover:text-red-700 text-lg font-bold px-2"
              title="Eliminar"
            >🗑️</button>
          </div>
        </div>
      </div>
      <!-- FUT 11 -->
      <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-[#07a495]">Fut 11</h2>
          <button
            @click="openModal('fut11')"
            class="bg-[#07a495] cursor-pointer hover:bg-[#059687] text-white px-3 py-1 rounded font-bold shadow transition"
            title="Agregar jugadora"
          >
            + Agregar
          </button>
        </div>
        <div v-if="jugadorasFut11.length === 0" class="text-gray-400 text-center py-8">Sin jugadoras registradas.</div>
        <div v-else class="flex flex-col gap-3">
          <div
            v-for="jugadora in jugadorasFut11"
            :key="jugadora.id"
            class="flex items-center justify-between bg-[#f7fafc] rounded p-3 shadow-sm hover:shadow transition"
          >
            <div>
              <p class="font-semibold text-[#07a495]">{{ jugadora.nombre }} {{ jugadora.apellido }}</p>
              <p class="text-xs text-gray-600">Dorsal: {{ jugadora.dorsal }} <span v-if="jugadora.posicion">| {{ jugadora.posicion }}</span></p>
              <p class="text-xs text-gray-500" v-if="jugadora.nacimiento">Nacimiento: {{ jugadora.nacimiento }}</p>
              <p class="text-xs text-gray-500" v-if="jugadora.status">{{ jugadora.status }}</p>
            </div>
            <button
              @click="eliminar('jugadoras-fut11', jugadora.id)"
              class="text-red-50 cursor-pointer0 hover:text-red-700 text-lg font-bold px-2"
              title="Eliminar"
            >🗑️</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MODALES -->
  <ModalVk :isOpen="isOpenAscenso" @close="isOpenAscenso = false">
    <h2 class="text-xl font-bold mb-2 text-[#07a495]">Agregar Jugadora Ascenso</h2>
    <form @submit.prevent="agregar('jugadoras-ascenso')" class="flex flex-col gap-2">
      <input v-model="nombre" type="text" placeholder="Nombre" class="border p-2 rounded w-full" required>
      <input v-model="apellido" type="text" placeholder="Apellido" class="border p-2 rounded w-full" required>
      <input v-model="dorsal" type="text" placeholder="Dorsal" class="border p-2 rounded w-full">
      <input v-model="posicion" type="text" placeholder="Posición" class="border p-2 rounded w-full">
      <input v-model="nacimiento" type="text" placeholder="Fecha Nacimiento (12/12/1999)" class="border p-2 rounded w-full">
      <button type="submit" class="bg-[#07a495] hover:bg-[#059687] text-white font-bold py-2 rounded mt-2">Agregar</button>
    </form>
  </ModalVk>

  <ModalVk :isOpen="isOpenEscuela" @close="isOpenEscuela = false">
    <h2 class="text-xl font-bold mb-2 text-[#ffde59]">Agregar Jugadora Escuela</h2>
    <form @submit.prevent="agregar('jugadoras-escuela')" class="flex flex-col gap-2">
      <input v-model="nombre" type="text" placeholder="Nombre" class="border p-2 rounded w-full" required>
      <input v-model="apellido" type="text" placeholder="Apellido" class="border p-2 rounded w-full" required>
      <input v-model="dorsal" type="text" placeholder="Dorsal" class="border p-2 rounded w-full">
      <input v-model="posicion" type="text" placeholder="Posición" class="border p-2 rounded w-full">
      <input v-model="nacimiento" type="text" placeholder="Fecha Nacimiento (12/12/1999)" class="border p-2 rounded w-full">
      <button type="submit" class="bg-[#ffde59] cursor-pointer hover:bg-yellow-400 text-[#07a495] font-bold py-2 rounded mt-2">Agregar</button>
    </form>
  </ModalVk>

  <ModalVk :isOpen="isOpenFut11" @close="isOpenFut11 = false">
    <h2 class="text-xl font-bold mb-2 text-[#07a495]">Agregar Jugadora Fut 11</h2>
    <form @submit.prevent="agregar('jugadoras-fut11')" class="flex flex-col gap-2">
      <input v-model="nombre" type="text" placeholder="Nombre" class="border p-2 rounded w-full" required>
      <input v-model="apellido" type="text" placeholder="Apellido" class="border p-2 rounded w-full" required>
      <input v-model="dorsal" type="text" placeholder="Dorsal" class="border p-2 rounded w-full">
      <input v-model="posicion" type="text" placeholder="Posición" class="border p-2 rounded w-full">
      <input v-model="nacimiento" type="text" placeholder="Fecha Nacimiento (12/12/1999)" class="border p-2 rounded w-full">
      <button type="submit" class="bg-[#07a495] cursor-pointer hover:bg-[#059687] text-white font-bold py-2 rounded mt-2">Agregar</button>
    </form>
  </ModalVk>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ModalVk from '../Componentes/ModalVk.vue';
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { obtenerDocumentos, agregarJugadora } from '../helpers/functions'

const isOpenAscenso = ref(false)
const isOpenEscuela = ref(false)
const isOpenFut11 = ref(false)

const openModal = (tipo) => {
    limpiarCampos()
    if (tipo === 'ascenso') isOpenAscenso.value = true
    if (tipo === 'escuela') isOpenEscuela.value = true
    if (tipo === 'fut11') isOpenFut11.value = true
}

const nombre = ref('')
const apellido = ref('')
const nacimiento = ref('')
const posicion = ref('')
const dorsal = ref('')

const limpiarCampos = () => {
    nombre.value = ''
    apellido.value = ''
    nacimiento.value = ''
    posicion.value = ''
    dorsal.value = ''
}

const agregar = async (coleccion) => {
  const jugadora = {
    nombre: nombre.value,
    apellido: apellido.value,
    nacimiento: nacimiento.value,
    posicion: posicion.value,
    dorsal: dorsal.value
  }
  await agregarJugadora(db, coleccion, jugadora)
  limpiarCampos()
  if (coleccion === 'jugadoras-ascenso') isOpenAscenso.value = false
  if (coleccion === 'jugadoras-escuela') isOpenEscuela.value = false
  if (coleccion === 'jugadoras-fut11') isOpenFut11.value = false
}

// Función para eliminar jugadora
const eliminar = async (coleccion, id) => {
  if (confirm('¿Seguro que deseas eliminar esta jugadora?')) {
    try {
      await deleteDoc(doc(db, coleccion, id))
    } catch (e) {
      alert('Error al eliminar jugadora')
      console.error(e)
    }
  }
}

const jugadoras = ref([]);
const jugadorasEscuela = ref([]);
const jugadorasFut11 = ref([]);

const cargarJugadoras = async () => {
    jugadoras.value = await obtenerDocumentos(db, 'jugadoras-ascenso')
    jugadorasEscuela.value = await obtenerDocumentos(db, 'jugadoras-escuela')
    jugadorasFut11.value = await obtenerDocumentos(db, 'jugadoras-fut11')
}

let unsubAscenso, unsubEscuela, unsubFut11

const escucharJugadoras = () => {
  unsubAscenso = onSnapshot(collection(db, 'jugadoras-ascenso'), snapshot => {
    jugadoras.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  unsubEscuela = onSnapshot(collection(db, 'jugadoras-escuela'), snapshot => {
    jugadorasEscuela.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  unsubFut11 = onSnapshot(collection(db, 'jugadoras-fut11'), snapshot => {
    jugadorasFut11.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
}

onMounted(() => {
    cargarJugadoras();
    escucharJugadoras()
});
</script>