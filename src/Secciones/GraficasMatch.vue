<template>
  <hr class="text-white mx-2" />

  <section class="mb-7 py-20" id="prox-partidos">
    <div class="container px-4 sm:px-7">
      <h2 class="text-white text-center text-4xl sm:text-6xl lg:text-7xl font-gobold mb-10 drop-shadow-lg">
        Próximos Eventos
      </h2>
    </div>

    <div
      v-if="noticias.length"
      class="relative w-full max-w-5xl xl:h-auto mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4"
    >
      <div
        v-for="(noticia, idx) in noticias.slice(0, 2)"
        :key="noticia.id"
        class="relative flex flex-col items-center bg-white rounded-2xl shadow-xl border-2 border-[#07a495] "
      >
        <span
          class="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-base font-bold shadow "
          :class="idx === 0 ? 'bg-red-600 text-white' : 'bg-gray-700 text-white'"
        >
          {{ idx === 0 ? 'Más reciente' : 'Anterior' }}
        </span>
        <img
          :src="noticia.imagen ? noticia.imagen : 'https://dummyimage.com/600x400/000/fff&text=Imagen'"
          alt="Imagen noticia"
          class="w-full h-150 object-cover rounded-t-2xl"
        />
        <div class="p-4 w-full">
          <h3 class="text-xl font-bold text-[#07a495] mb-2">{{ noticia.titulo }}</h3>
          <p class="text-gray-700">{{ noticia.contenido }}</p>
          <p class="text-xs text-gray-400 mt-2">
            {{ noticia.fecha ? new Date(noticia.fecha.seconds * 1000).toLocaleString() : '' }}
          </p>
        </div>
      </div>
    </div>
    <div v-else class="text-white text-center mt-10">No hay eventos.</div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";



const noticias = ref([]);

const cargarNoticias = async () => {
  const q = query(collection(db, "noticias"), orderBy("fecha", "desc"));
  const snap = await getDocs(q);
  noticias.value = snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

onMounted(() => {
  cargarNoticias();
});
</script>

<style scoped>
.font-gobold {
  font-family: "gobold", sans-serif;
}
</style>