<template>
    <!-- Sección de Anuncios -->
<section class="my-8 px-4">
  <div class="max-w-3xl mx-auto bg-yellow-50 border-l-4 border-yellow-400 rounded-lg shadow p-6">
    <h2 class="text-2xl font-bold text-yellow-700 mb-4">Anuncios</h2>
    <ul class="space-y-3">
      <li v-for="(anuncio, idx) in anuncios" :key="idx" class="flex items-start gap-2">
        <span class="text-yellow-500 mt-1">📢</span>
        <div>
          <p class="text-gray-800 font-medium">{{ anuncio.titulo }}</p>
          <p v-if="anuncio.detalle" class="text-gray-600 text-sm">{{ anuncio.detalle }}</p>
        </div>
      </li>
    </ul>
  </div>
</section>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore'

const anuncios = ref([
])

onMounted(async () => {
  const snap = await getDocs(collection(db, 'anuncios'))
  anuncios.value = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
})
</script>