<template>
  <div class="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-xl">
    <h2 class="text-2xl font-bold text-[#07a495] mb-6">Agregar Resultado</h2>
    <form @submit.prevent="guardarResultado" class="space-y-4">

      <!-- Liga -->
      <label class="block">
        <span class="font-semibold text-gray-700">Liga</span>
        <select v-model="nuevoResultado.liga" class="w-full mt-1 p-2 border rounded">
          <option disabled value="">Selecciona una liga</option>
          <option value="ligaDobleve">Liga Dobleve</option>
          <option value="ligasFemeninas">Ligas Femeninas</option>
          <option value="proxPartido">Próximo Partido</option>
        </select>
      </label>

      <!-- Estado -->
      <label class="block">
        <span class="font-semibold text-gray-700">Estado</span>
        <input v-model="nuevoResultado.status" type="text" class="w-full mt-1 p-2 border rounded" placeholder="Ej: Final Ascenso" />
      </label>

      <!-- Equipo 1 -->
      <div class="grid grid-cols-2 gap-4">
        <label class="block">
          <span class="font-semibold text-gray-700">Equipo 1</span>
          <input v-model="nuevoResultado.team1.name" type="text" class="w-full mt-1 p-2 border rounded" />
        </label>
        <label class="block">
          <span class="font-semibold text-gray-700">Score Equipo 1</span>
          <input v-model.number="nuevoResultado.team1.score" type="number" class="w-full mt-1 p-2 border rounded" />
        </label>
      </div>

      <!-- Equipo 2 -->
      <div class="grid grid-cols-2 gap-4">
        <label class="block">
          <span class="font-semibold text-gray-700">Equipo 2</span>
          <input v-model="nuevoResultado.team2.name" type="text" class="w-full mt-1 p-2 border rounded" />
        </label>
        <label class="block">
          <span class="font-semibold text-gray-700">Score Equipo 2</span>
          <input v-model.number="nuevoResultado.team2.score" type="number" class="w-full mt-1 p-2 border rounded" />
        </label>
      </div>

      <!-- Goleadoras -->
      <label class="block">
        <span class="font-semibold text-gray-700">Goleadoras (separadas por coma)</span>
        <input v-model="goleadorasInput" type="text" class="w-full mt-1 p-2 border rounded" placeholder="Ej: Deni, Mota" />
      </label>

      <!-- Botón -->
      <button type="submit" class="bg-[#07a495] hover:bg-[#059687] text-white font-bold py-2 px-4 rounded transition-all">
        Guardar Resultado
      </button>

      <!-- Mensaje -->
      <p v-if="mensaje" class="text-green-600 mt-3 font-medium">{{ mensaje }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase';

const nuevoResultado = ref({
  liga: '',
  status: '',
  team1: { name: '',  score: 0 },
  team2: { name: '',  score: 0 },
  goles: []
});

const goleadorasInput = ref('');
const mensaje = ref('');

const guardarResultado = async () => {
  if (!nuevoResultado.value.liga || !nuevoResultado.value.status || !nuevoResultado.value.team1.name || !nuevoResultado.value.team2.name) {
    alert('Completa todos los campos obligatorios');
    return;
  }

  try {
    // Procesar goleadoras
    const goleadoras = goleadorasInput.value
      .split(',')
      .map((nombre) => nombre.trim())
      .filter(Boolean)
      .map((nombre) => ({ player: nombre }));

    // Crear objeto limpio
    const resultadoAEnviar = {
      liga: nuevoResultado.value.liga || '',
      status: nuevoResultado.value.status || '',
      team1: {
        name: nuevoResultado.value.team1.name || '',
        score: nuevoResultado.value.team1.score || 0
      },
      team2: {
        name: nuevoResultado.value.team2.name || '',
        score: nuevoResultado.value.team2.score || 0
      },
      goles: goleadoras
    };

    console.log('Enviando a Firestore:', resultadoAEnviar);

    // Guardar con ID automático usando addDoc
    await addDoc(collection(db, 'resultados'), resultadoAEnviar);

    mensaje.value = '✅ Resultado guardado con éxito.';

    // Reiniciar
    nuevoResultado.value = {
      liga: '',
      status: '',
      team1: { name: '',  score: 0 },
      team2: { name: '', score: 0 },
      goles: []
    };
    goleadorasInput.value = '';
  } catch (error) {
    console.error('Error al guardar:', error);
    mensaje.value = '❌ Error al guardar el resultado.';
  }
};
</script>