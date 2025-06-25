<template>
    <section class="container mx-auto my-4 p-4">
        <h1 class="text-xl text-white">Opciones Admin</h1>

        <div v-if="!autenticado" class="bg-white p-6 rounded shadow max-w-sm mx-auto mt-10">
            <input
                v-model="clave"
                type="password"
                placeholder="Ingresa la clave de admin"
                class="border p-2 w-full mb-4 rounded"
            />
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
                <router-link to="/admin/partidos" class="bg-green-500 text-white p-4 rounded hover:bg-green-600">
                    Gestionar Eventos
                </router-link>
                <router-link to="/admin/estadisticas" class="bg-purple-500 text-white p-4 rounded hover:bg-purple-600">
                    Ver Estadísticas
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const clave = ref('')
const autenticado = ref(false)
const error = ref('')
const CLAVE_ADMIN = 'luckylindo'

const verificarClave = () => {
    if (clave.value === CLAVE_ADMIN) {
        autenticado.value = true
        error.value = ''
    } else {
        error.value = 'Clave incorrecta'
    }
}
</script>