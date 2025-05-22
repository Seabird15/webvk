<template>
  <section class="p-4">
    <h2 class="text-2xl font-bold mb-4 text-center">Tabla de la Liga</h2>

    <div v-if="loading" class="text-center text-blue-500">
      Cargando tabla...
    </div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>

    <div
      v-else
      v-html="tablaHtml"
      class="overflow-auto border p-7 border-gray-300 rounded"
    ></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const tablaHtml = ref("");
const loading = ref(true);
const error = ref("");

onMounted(async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/tabla");
    tablaHtml.value = data.tabla;
  } catch (err) {
    console.error(err);
    error.value = "No se pudo obtener la tabla.";
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
thead {
  background-color: white;
}
</style>
