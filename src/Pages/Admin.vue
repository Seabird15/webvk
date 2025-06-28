<template>
    <section class="container mx-auto my-4 p-4">
        <router-link to="/"
            class="bg-[#07a495] text-white px-4 py-2 rounded mb-6 inline-block hover:bg-[#059687] transition">
            &lt; Home
        </router-link>
        <h1 class="text-xl text-white">Opciones Admin</h1>

        <div v-if="!autenticado" class="bg-white p-6 rounded shadow max-w-sm mx-auto mt-10">
    <!-- Agrega esto dentro del <div v-if="!autenticado" ...> en tu template -->
<div class="relative">
  <input
    v-model="clave"
    :type="mostrarClave ? 'text' : 'password'"
    placeholder="Ingresa la clave de admin"
    class="border p-2 w-full mb-4 rounded pr-10"
  />
  <button
    type="button"
    class="absolute right-2 top-2 text-gray-500"
    @click="mostrarClave = !mostrarClave"
    tabindex="-1"
  >
    <span v-if="mostrarClave">🙈</span>
    <span v-else>👁️</span>
  </button>
</div>
<button
  @click="verificarClave"
  class="bg-blue-500 text-white px-4 py-2 rounded w-full"
>
  Ingresar
</button>
<p v-if="error" class="text-red-500 mt-2 text-center">{{ error }}</p>
        </div>

        <div v-else>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <router-link to="/admin/jugadoras" class="bg-blue-500 text-white p-4 rounded hover:bg-blue-600">
                    Gestionar Jugadoras
                </router-link>
              
                <router-link to="/estadisticasentrenamientos"
                    class="bg-purple-500 text-white p-4 rounded hover:bg-purple-600">
                    Ver Estadísticas
                </router-link>
                <router-link to="/fechasimportantes" class="bg-red-800 text-white p-4 rounded hover:bg-purple-600">
                    Fechas Importantes
                </router-link>
                <!-- NUEVOS BOTONES -->
                <button @click="isNoticiasOpen = true" class="bg-yellow-500 text-white p-4 rounded hover:bg-yellow-600">
                    Administrar Gráficas
                </button>
                <button @click="isResultadosOpen = true" class="bg-pink-500 text-white p-4 rounded hover:bg-pink-600">
                    Administrar Resultados
                </button>
                  <button @click="isAnunciosOpen = true" class="bg-green-500 text-white p-4 rounded hover:bg-green-600">
                    Administrar Anuncios
                </button>
            </div>
            <button @click="cerrarSesionAdmin" class="bg-gray-400 text-white px-4 py-2 rounded mt-4">
  Salir del Admin
</button>
        </div>

        <!-- MODAL NOTICIAS -->
        <ModalVk :isOpen="isNoticiasOpen" @close="isNoticiasOpen = false">
            <template #header>
                <h2 class="text-2xl font-bold mb-4 text-[#07a495]">Administrar Noticias</h2>
            </template>
            <div>
                <input v-model="nuevaNoticia.titulo" placeholder="Título" class="border p-2 rounded w-full mb-2" />
<input type="file" @change="onFileChange" accept="image/*" class="border p-2 rounded w-full mb-2" />
<img v-if="previewImg" :src="previewImg" class="w-32 h-32 object-cover rounded mb-2 mx-auto" />
<textarea v-model="nuevaNoticia.contenido" placeholder="Contenido" class="border p-2 rounded w-full mb-2"></textarea>
                <button @click="guardarNoticia" class="bg-[#07a495] text-white px-4 py-2 rounded">Guardar
                    Noticia</button>
                <p v-if="error" class="text-red-500 mt-2 text-center">{{ error }}</p>
            </div>
        </ModalVk>

        <!-- MODAL RESULTADOS -->
        <ModalVk :isOpen="isResultadosOpen" @close="isResultadosOpen = false">
            <!-- ...dentro del modal de resultados en Admin.vue... -->
            <select v-model="nuevoResultado.tab" class="border p-2 rounded w-full mb-2">
                <option disabled value="">Selecciona categoría</option>
                <option value="ligaDobleve">Liga Dobleve</option>
                <option value="ligasFemeninas">Ligas Femeninas</option>
                <option value="proxPartido">Prox Partido</option>
            </select>
            <input v-model="nuevoResultado.status" placeholder="Estado (ej: Final)"
                class="border p-2 rounded w-full mb-2" />
            <input v-model="nuevoResultado.team1Name" placeholder="Equipo 1" class="border p-2 rounded w-full mb-2" />
            <input v-model="nuevoResultado.team1Logo" placeholder="Logo Equipo 1 (URL)"
                class="border p-2 rounded w-full mb-2" />
            <input v-model="nuevoResultado.team1Score" placeholder="Goles Equipo 1" type="number"
                class="border p-2 rounded w-full mb-2" />
            <input v-model="nuevoResultado.team2Name" placeholder="Equipo 2" class="border p-2 rounded w-full mb-2" />
            <input v-model="nuevoResultado.team2Logo" placeholder="Logo Equipo 2 (URL)"
                class="border p-2 rounded w-full mb-2" />
            <input v-model="nuevoResultado.team2Score" placeholder="Goles Equipo 2" type="number"
                class="border p-2 rounded w-full mb-2" />
            <textarea v-model="nuevoResultado.golesTexto" placeholder="Goleadoras (separadas por coma)"
                class="border p-2 rounded w-full mb-2"></textarea>
            <button @click="guardarResultado" class="bg-[#07a495] text-white px-4 py-2 rounded">Guardar
                Resultado</button>
        </ModalVk>
        <!-- Agrega esto donde quieras mostrar el botón de salir -->

        <!-- MODAL ANUNCIOS -->
        <ModalVk :isOpen="isAnunciosOpen" @close="isAnunciosOpen = false">
            <template #header>
                <h2 class="text-2xl font-bold mb-4 text-[#07a495]">Administrar Anuncios</h2>
            </template>
            <div>
                <h3>Publicar anuncio</h3>
                <input v-model="nuevoAnuncio.titulo" placeholder="Título del anuncio"
                    class="border p-2 rounded w-full mb-2" />
                <textarea v-model="nuevoAnuncio.detalle" placeholder="Detalle del anuncio"
                    class="border p-2 rounded w-full mb-2"></textarea>
                <button @click="guardarAnuncio" class="bg-[#07a495] text-white px-4 py-2 rounded">Guardar Anuncio</button>
                <p v-if="error" class="text-red-500 mt-2 text-center">{{ error }}</p>

               <div class="mt-6">
                  <h2 class="text-xl font-bold mb-4 text-yellow-700">Anuncios Publicados</h2>
    <ul class="space-y-4">
      <li v-for="anuncio in anuncios" :key="anuncio.id" class="flex justify-between shadow p-2 rounded-md items-center gap-2">
        <span class="text-yellow-500 mt-1">📢</span>
        <div>
          <p class="text-gray-800 font-medium">{{ anuncio.titulo }}</p>
          <p v-if="anuncio.detalle" class="text-gray-600 text-sm">{{ anuncio.detalle }}</p>
          
        </div>
                <button
          class="text-red-500 hover:text-red-700 font-bold px-2"
          @click="eliminarAnuncio(anuncio.id)"
          title="Eliminar"
        >🗑️</button>
        
      </li>
      
    </ul>
               </div>
            </div>
        </ModalVk>

    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ModalVk from '../Componentes/ModalVk.vue'
import { db, storage } from '../firebase'
import { collection, addDoc, serverTimestamp, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'

import Swal from 'sweetalert2'

const clave = ref('')
const autenticado = ref(false)
const error = ref('')
const mostrarClave = ref(false)
const CLAVE_ADMIN = 'yesiprofe'

const isNoticiasOpen = ref(false)
const isResultadosOpen = ref(false)
const isAnunciosOpen = ref(false)


function mostrarAlerta() {
  Swal.fire({
  title: 'Completado',
  icon: 'success',
  confirmButtonText: 'Ok'
})
}

onMounted(async() => {
    const snap = await getDocs(collection(db, 'anuncios'))
  anuncios.value = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    if (localStorage.getItem('adminAutenticado') === 'true') {
        autenticado.value = true
    }
})
const cerrarSesionAdmin = () => {
  autenticado.value = false
  localStorage.removeItem('adminAutenticado')
}
const verificarClave = () => {
  if (clave.value === CLAVE_ADMIN) {
    autenticado.value = true
    error.value = ''
    localStorage.setItem('adminAutenticado', 'true')
  } else {
    error.value = 'Clave incorrecta'
  }
}

const nuevaNoticia = ref({ titulo: '', contenido: '', imagen: '' })
const imagenFile = ref(null)
const previewImg = ref('')
const onFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
        imagenFile.value = file
        previewImg.value = URL.createObjectURL(file)
    }
}
const guardarNoticia = async () => {
    if (!nuevaNoticia.value.titulo || !nuevaNoticia.value.contenido) {
        error.value = 'Completa todos los campos de la noticia'
        return
    }
    let urlImagen = ''
    try {
        if (imagenFile.value) {
            // Sube la imagen a Firebase Storage
            const fileRef = storageRef(storage, `noticias/${Date.now()}_${imagenFile.value.name}`)
            await uploadBytes(fileRef, imagenFile.value)
            urlImagen = await getDownloadURL(fileRef)
        }
        await addDoc(collection(db, 'noticias'), {
            titulo: nuevaNoticia.value.titulo,
            contenido: nuevaNoticia.value.contenido,
            imagen: urlImagen,
            fecha: serverTimestamp()
        })
        nuevaNoticia.value = { titulo: '', contenido: '', imagen: '' }
        imagenFile.value = null
        previewImg.value = ''
        isNoticiasOpen.value = false
        error.value = ''

        mostrarAlerta()
    } catch (e) {
        error.value = 'Error al guardar la noticia: ' + (e.message || e)
    }
}

// ...en Admin.vue
const nuevoResultado = ref({
    tab: '',
    status: '',
    team1Name: '',
    team1Logo: '',
    team1Score: '',
    team2Name: '',
    team2Logo: '',
    team2Score: '',
    golesTexto: ''
})

const guardarResultado = async () => {
    if (!nuevoResultado.value.tab || !nuevoResultado.value.status || !nuevoResultado.value.team1Name || !nuevoResultado.value.team2Name) {
        error.value = 'Completa todos los campos del resultado'
        return
    }
    try {
        await addDoc(collection(db, 'resultados'), {
            tab: nuevoResultado.value.tab,
            status: nuevoResultado.value.status,
            team1: {
                name: nuevoResultado.value.team1Name,
                logo: nuevoResultado.value.team1Logo || null,
                score: Number(nuevoResultado.value.team1Score) || 0
            },
            team2: {
                name: nuevoResultado.value.team2Name,
                logo: nuevoResultado.value.team2Logo || null,
                score: Number(nuevoResultado.value.team2Score) || 0
            },
            goles: (nuevoResultado.value.golesTexto || '').split(',').map(p => p.trim()).filter(Boolean).map(player => ({ player })),
            fecha: serverTimestamp()
        })
        // Limpia el formulario
        nuevoResultado.value = {
            tab: '',
            status: '',
            team1Name: '',
            team1Logo: '',
            team1Score: '',
            team2Name: '',
            team2Logo: '',
            team2Score: '',
            golesTexto: ''
        }
        isResultadosOpen.value = false
        error.value = ''
         mostrarAlerta()
    } catch (e) {
        error.value = 'Error al guardar el resultado'
    }
}


//Anuncios

const nuevoAnuncio = ref({ titulo: '', detalle: '' })
const anuncios = ref([])

const guardarAnuncio = async () => {
    if (!nuevoAnuncio.value.titulo) {
        error.value = 'Completa el título del anuncio'
        return
    }
    try {
        await addDoc(collection(db, 'anuncios'), {
            titulo: nuevoAnuncio.value.titulo,
            detalle: nuevoAnuncio.value.detalle || '',
            fecha: serverTimestamp()
        })
        nuevoAnuncio.value = { titulo: '', detalle: '' }
        isAnunciosOpen.value = false
        error.value = ''
         mostrarAlerta()
    } catch (e) {
        error.value = 'Error al guardar el anuncio: ' + (e.message || e)
    }
}


const eliminarAnuncio = async (id) => {
  await deleteDoc(doc(db, 'anuncios', id))
  anuncios.value = anuncios.value.filter(a => a.id !== id)
}
</script>