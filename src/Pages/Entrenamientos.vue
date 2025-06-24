<template>

  
  <div class="max-w-5xl mx-auto mt-10 p-4 shadow-2xl rounded-xl bg-gradient-to-br from-[#e0f7fa] to-[#fff]">
     <router-link to="/" class="bg-[#07a495] text-white px-4 py-2 rounded mb-6 inline-block hover:bg-[#059687] transition">
       < Volver al inicio
    </router-link>

    <div v-if="!autenticada" class="bg-white p-7 w-full sm:w-1/2 mx-auto rounded-sm">
      <h2 class="text-2xl font-bold mb-6 text-[#07a495] text-center">Acceso a Entrenamientos</h2>
      <input v-model="clave" type="password" placeholder="Ingresa clave"
        class="border p-3 w-full mb-4 rounded focus:ring-2 focus:ring-[#07a495]" />
      <button @click="verificarClave" class="bg-[#07a495] hover:bg-[#059687] text-white px-6 py-2 rounded w-full font-bold text-lg transition-all">
        Ingresar
      </button>
      <p v-if="error" class="text-red-500 mt-2 text-center">{{ error }}</p>
    </div>

    <div v-else>
      <div class="flex justify-end mb-4">
        <button
          @click="isOpenModal = true"
          class="bg-[#07a495] hover:bg-[#059687] text-white px-4 py-2 rounded font-bold shadow transition"
        >
          + Nuevo entrenamiento
        </button>
      </div>

      <h2 class="text-3xl font-bold mb-8 text-[#07a495] text-center">Próximos Entrenamientos</h2>
      <div class="flex flex-col gap-6">
        <div
          v-for="evento in eventos"
          :key="evento.id"
          class="rounded-xl shadow-lg border border-[#07a495]/30 bg-white/80 overflow-hidden"
        >
          <!-- Card Header -->
          <button
            class="w-full flex items-center justify-between px-6 py-4 bg-[#07a495]/90 hover:bg-[#07a495] transition-colors"
            @click="toggleEvento(evento.id)"
          >
            <div class="flex flex-col text-left">
              <span class="text-xl font-bold text-white">{{ evento.titulo }}</span>
              <span class="text-white text-sm">{{ evento.dia }} | {{ evento.horaInicio }} a {{ evento.horaTermino }}</span>
              <span class="text-white text-xs">{{ evento.lugar }}</span>
              <span class="text-white text-xs italic">Equipo: {{ equipoLabel(evento.equipo) }}</span>
            </div>
            <svg :class="['w-6 h-6 text-white transition-transform', { 'rotate-180': eventoAbierto === evento.id }]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <!-- Porcentaje de asistencia -->
          <div class="mb-4 flex items-center gap-2 px-6 pt-4">
            <span class="font-bold text-[#07a495]">Asistencia:</span>
            <div class="w-32 bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                class="bg-[#07a495] h-4 rounded-full transition-all"
                :style="{ width: porcentajeAsistencia(evento) + '%' }"
              ></div>
            </div>
            <span class="text-sm font-bold text-[#07a495]">{{ porcentajeAsistencia(evento) }}%</span>
          </div>
          <!-- Card Content -->
          <transition name="fade">
            <div v-if="eventoAbierto === evento.id" class="p-6 bg-white flex flex-col md:flex-row gap-8">
              <!-- Listado -->
              <div class="md:w-1/3 w-full">
                <h3 class="text-lg font-bold text-[#07a495] mb-2">Listado</h3>
                <ul>
                  <li
                    v-for="item in listado[evento.id] || []"
                    :key="item.id"
                    class="mb-2 flex items-center gap-2 justify-between bg-[#e0f7fa] rounded px-2 py-1"
                  >
                    <div>
                      <p class="font-light text-xs">{{ item.nombre }}</p>
                      <span
                        v-if="item.asiste"
                        class="ml-2 bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold"
                      >ASISTE</span>
                      <span
                        v-else
                        class="ml-2 bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-bold"
                      >NO ASISTE</span>
                      <span v-if="item.motivo" class="ml-2 text-gray-500 text-xs">({{ item.motivo }})</span>
                    </div>
                    <button
                      v-if="item.asiste"
                      @click="darDeBaja(evento, item)"
                      class="text-red-500 hover:text-red-700 text-xs font-bold px-2 py-1 rounded border border-red-200 bg-red-50"
                      title="Dar de baja"
                    >Dar de baja</button>
                  </li>
                </ul>
                <p v-if="(listado[evento.id] || []).length === 0" class="text-gray-400">Sin registros aún.</p>
              </div>
              <!-- Por confirmar -->
              <div class="md:w-1/2 w-full">
                <h3 class="text-lg font-bold text-[#07a495] mb-2">Por confirmar</h3>
                <ul>
                  <li v-for="jugadora in jugadorasPorConfirmar[evento.id]" :key="jugadora.id" class="mb-2 flex items-center gap-2">
                    <span class="font-light text-xs">{{ jugadora.nombre }} {{ jugadora.apellido }}</span>
                    <button
                      class="bg-[#07a495] hover:bg-[#059687] text-white text-xs font-bold px-2 py-1 rounded transition"
                      @click="registrarAsistenciaBoton(evento, jugadora, true)"
                    >Asistiré</button>
                    <button
                      class="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-2 py-1 rounded transition"
                      @click="abrirMotivo(evento.id, jugadora.id)"
                    >No asistiré</button>
                    <!-- Input motivo solo para la jugadora seleccionada -->
                    <template v-if="motivoInput[evento.id] && motivoInput[evento.id].jugadoraId === jugadora.id">
                      <input
                        v-model="motivoInput[evento.id].motivo"
                        placeholder="Motivo"
                        class="border p-1 rounded text-xs ml-2"
                        style="width: 120px"
                      />
                      <button
                        class="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-2 py-1 rounded transition ml-1"
                        @click="registrarAsistenciaBoton(evento, jugadora, false, motivoInput[evento.id].motivo)"
                        :disabled="!motivoInput[evento.id].motivo"
                      >Confirmar</button>
                      <button
                        class="text-gray-400 hover:text-gray-700 text-xs ml-1"
                        @click="cerrarMotivo(evento.id)"
                        title="Cancelar"
                      >✕</button>
                    </template>
                  </li>
                </ul>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- MODAL PARA NUEVO ENTRENAMIENTO -->
      <ModalVk :isOpen="isOpenModal" @close="cerrarModal">
        <h2 class="text-xl font-bold mb-4 text-[#07a495]">Nuevo entrenamiento</h2>
        <form @submit.prevent="crearEntrenamiento" class="flex flex-col gap-2">
          <input v-model="nuevoEvento.titulo" placeholder="Título" class="border p-2 rounded w-full" required />
          <input v-model="nuevoEvento.dia" placeholder="Día (ej: Martes 25/06/2025)" class="border p-2 rounded w-full" required />
          <input v-model="nuevoEvento.lugar" placeholder="Lugar" class="border p-2 rounded w-full" required />
          <div class="flex gap-2">
            <input v-model="nuevoEvento.horaInicio" placeholder="Hora inicio (ej: 20:00)" class="border p-2 rounded w-full" required />
            <input v-model="nuevoEvento.horaTermino" placeholder="Hora término (ej: 22:00)" class="border p-2 rounded w-full" required />
          </div>
          <textarea v-model="nuevoEvento.descripcion" placeholder="Descripción" class="border p-2 rounded w-full" />
          <select v-model="nuevoEvento.equipo" class="border p-2 rounded w-full" required>
            <option disabled value="">Selecciona equipo</option>
            <option value="jugadoras-ascenso">Ascenso</option>
            <option value="jugadoras-escuela">Escuela</option>
            <option value="jugadoras-fut11">Fut 11</option>
          </select>
          <button type="submit" class="bg-[#07a495] hover:bg-[#059687] text-white font-bold py-2 rounded mt-2">Guardar</button>
        </form>
        <hr class="my-4" />
        <h3 class="font-bold mb-2 text-[#07a495]">Entrenamientos existentes</h3>
        <ul>
          <li v-for="ev in eventos" :key="ev.id" class="flex justify-between items-center mb-2 bg-gray-50 rounded px-2 py-1">
            <span>{{ ev.titulo }} - {{ ev.dia }} ({{ ev.horaInicio }} a {{ ev.horaTermino }}) - {{ equipoLabel(ev.equipo) }}</span>
            <button
              @click="pedirEliminarEntrenamiento(ev)"
              class="text-red-500 hover:text-red-700 text-xs font-bold px-2 py-1 rounded border border-red-200 bg-red-50"
              title="Eliminar"
            >Eliminar</button>
          </li>
        </ul>
      </ModalVk>

      <!-- MODAL CONFIRMAR ELIMINACIÓN -->
      <ModalVk :isOpen="showDeleteModal" @close="showDeleteModal = false">
        <h2 class="text-lg font-bold mb-2 text-[#07a495]">Confirmar eliminación</h2>
        <p class="mb-2">Para eliminar el entrenamiento <b>{{ entrenamientoAEliminar?.titulo }}</b>, ingresa la clave:</p>
        <input v-model="claveEliminar" type="password" placeholder="Clave" class="border p-2 rounded w-full mb-2" />
        <p v-if="errorEliminar" class="text-red-500 text-sm mb-2">{{ errorEliminar }}</p>
        <div class="flex gap-2">
          <button @click="confirmarEliminarEntrenamiento" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-bold">Eliminar</button>
          <button @click="showDeleteModal = false" class="bg-gray-200 px-4 py-2 rounded font-bold">Cancelar</button>
        </div>
      </ModalVk>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { obtenerDocumentos } from '../helpers/functions'
import ModalVk from '../Componentes/ModalVk.vue'

const clave = ref('')
const error = ref('')
const autenticada = ref(false)
const CLAVE_GLOBAL = 'vikings2024'

const eventos = ref([])
const listado = ref({})
const eventoAbierto = ref(null)
const jugadorasAscenso = ref([])
const jugadorasEscuela = ref([])
const jugadorasFut11 = ref([])
const isOpenModal = ref(false)

const showDeleteModal = ref(false)
const entrenamientoAEliminar = ref(null)
const claveEliminar = ref('')
const errorEliminar = ref('')

const nuevoEvento = reactive({
  titulo: '',
  dia: '',
  lugar: '',
  horaInicio: '',
  horaTermino: '',
  descripcion: '',
  equipo: ''
})

const cerrarModal = () => {
  isOpenModal.value = false
  Object.keys(nuevoEvento).forEach(k => nuevoEvento[k] = '')
}

// Cargar entrenamientos desde Firestore
const cargarEventos = async () => {
  const q = query(collection(db, 'entrenamientos'), orderBy('dia', 'asc'))
  const snap = await getDocs(q)
  eventos.value = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

// Crear nuevo entrenamiento (guarda el equipo)
const crearEntrenamiento = async () => {
  await addDoc(collection(db, 'entrenamientos'), { ...nuevoEvento })
  await cargarEventos()
  cerrarModal()
}

// Eliminar entrenamiento con clave
const pedirEliminarEntrenamiento = (ev) => {
  entrenamientoAEliminar.value = ev
  claveEliminar.value = ''
  errorEliminar.value = ''
  showDeleteModal.value = true
}

const confirmarEliminarEntrenamiento = async () => {
  if (claveEliminar.value !== CLAVE_GLOBAL) {
    errorEliminar.value = 'Clave incorrecta'
    return
  }
  await deleteDoc(doc(db, 'entrenamientos', entrenamientoAEliminar.value.id))
  await cargarEventos()
  await obtenerListados()
  showDeleteModal.value = false
}

// Para controlar input motivo por evento y jugadora
const motivoInput = reactive({})

const toggleEvento = (id) => {
  eventoAbierto.value = eventoAbierto.value === id ? null : id
}

const verificarClave = () => {
  if (clave.value === CLAVE_GLOBAL) {
    autenticada.value = true
    error.value = ''
    cargarEventos()
    cargarJugadoras()
    obtenerListados()
  } else {
    error.value = 'Clave incorrecta'
  }
}

// Cargar jugadoras de cada equipo
const cargarJugadoras = async () => {
  jugadorasAscenso.value = await obtenerDocumentos(db, 'jugadoras-ascenso')
  jugadorasEscuela.value = await obtenerDocumentos(db, 'jugadoras-escuela')
  jugadorasFut11.value = await obtenerDocumentos(db, 'jugadoras-fut11')
}

// Registrar asistencia en la colección del evento
const registrarAsistenciaBoton = async (evento, jugadora, asiste, motivo = '') => {
  try {
    const docData = {
      asiste: asiste,
      motivo: asiste ? "" : motivo,
      nombre: `${jugadora.nombre} ${jugadora.apellido}`,
      timestamp: serverTimestamp()
    }
    await addDoc(collection(db, `asistencias_${evento.id}`), docData)
    cerrarMotivo(evento.id)
    obtenerListados()
  } catch (e) {
    alert('Error al registrar asistencia')
    console.error(e)
  }
}

// Mostrar input motivo solo para la jugadora seleccionada
const abrirMotivo = (eventoId, jugadoraId) => {
  motivoInput[eventoId] = { jugadoraId, motivo: '' }
}
const cerrarMotivo = (eventoId) => {
  motivoInput[eventoId] = null
}

// Dar de baja en la colección del evento
const darDeBaja = async (evento, item) => {
  const motivo = prompt('Motivo de la baja:', '')
  if (motivo !== null) {
    try {
      await updateDoc(doc(db, `asistencias_${evento.id}`, item.id), {
        asiste: false,
        motivo: motivo || 'Sin motivo'
      })
      obtenerListados()
    } catch (e) {
      alert('Error al dar de baja')
      console.error(e)
    }
  }
}

// Obtener listados de asistencia por evento
const obtenerListados = async () => {
  const result = {}
  for (const ev of eventos.value) {
    const q = query(collection(db, `asistencias_${ev.id}`))
    const snap = await getDocs(q)
    result[ev.id] = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  }
  listado.value = result
}

// Porcentaje de asistencia visual
const porcentajeAsistencia = (evento) => {
  const registros = listado.value[evento.id] || []
  const asisten = registros.filter(x => x.asiste).length
  let jugadorasEquipo = 0
  if (evento.equipo === 'jugadoras-ascenso') jugadorasEquipo = jugadorasAscenso.value.length
  if (evento.equipo === 'jugadoras-escuela') jugadorasEquipo = jugadorasEscuela.value.length
  if (evento.equipo === 'jugadoras-fut11') jugadorasEquipo = jugadorasFut11.value.length
  return jugadorasEquipo > 0 ? Math.round((asisten / jugadorasEquipo) * 100) : 0
}

// Coincidencia flexible: prioriza apellido y nombre que empiece igual
const jugadorasPorConfirmar = computed(() => {
  const resultado = {}
  eventos.value.forEach(ev => {
    let jugadorasEquipo = []
    if (ev.equipo === 'jugadoras-ascenso') jugadorasEquipo = jugadorasAscenso.value
    if (ev.equipo === 'jugadoras-escuela') jugadorasEquipo = jugadorasEscuela.value
    if (ev.equipo === 'jugadoras-fut11') jugadorasEquipo = jugadorasFut11.value

    const registros = (listado.value[ev.id] || [])
    resultado[ev.id] = jugadorasEquipo.filter(j => {
      const apellidoJ = (j.apellido || '').trim().toLowerCase()
      const nombreJ = (j.nombre || '').trim().toLowerCase()
      // Busca si hay algún registro con mismo apellido y nombre que empiece igual (mínimo 2 letras)
      const coincide = registros.some(item => {
        const partes = (item.nombre || '').trim().toLowerCase().split(' ')
        const nombreR = partes[0] || ''
        const apellidoR = partes.slice(1).join(' ') || ''
        return (
          apellidoR && apellidoJ && apellidoR === apellidoJ &&
          nombreR && nombreJ && nombreJ.startsWith(nombreR.slice(0, 2))
        )
      })
      return !coincide
    })
  })
  return resultado
})

// Etiqueta legible para el equipo
const equipoLabel = (equipo) => {
  if (equipo === 'jugadoras-ascenso') return 'Ascenso'
  if (equipo === 'jugadoras-escuela') return 'Escuela'
  if (equipo === 'jugadoras-fut11') return 'Fut 11'
  return ''
}

onMounted(() => {
  if (autenticada.value) {
    cargarEventos()
    cargarJugadoras()
    obtenerListados()
  }
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s cubic-bezier(.4,0,.2,1);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>