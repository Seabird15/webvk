<template>
  <section id="resultados">
    <div class="mx-auto py-4 lg:p-20">
      <h2 class="font-gobold mx-4 tracking-widest text-[#07a495] text-4xl lg:text-7xl mb-8 text-center">
       Partidos
      </h2>
      <div class="bg-black/80 py-7 my-2 rounded-2xl shadow-xl">
        <div class="flex  bg-gradient-to-r from-[#07a495] to-[#0b6a60c6] py-2 mt-6 mx-auto justify-center lg:rounded-full max-w-xl">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            @click="switchTab(tab.value)"
            class="transition-all cursor-pointer text-xs lg:text-md duration-200 font-bold px-4 py-2 rounded-full mx-1 shadow"
            :class="[
              activeTab === tab.value
                ? 'bg-white text-[#07a495] scale-90'
                : 'bg-transparent text-white hover:bg-white/20',
            ]"
          >
            {{ tab.name }}
          </button>
        </div>
        <div class="px-2 md:px-7 py-2 text-black">
          <div
            v-if="currentResults.length > 0"
            class="flex flex-col md:flex-row md:flex-wrap gap-8 items-center justify-center my-7"
          >
            <div
              v-for="(match, index) in currentResults"
              :key="index"
              class="w-full max-w-md bg-white backdrop-blur-lg border-2 border-[#07a495] rounded-2xl shadow-2xl p-6 flex flex-col items-center gap-4 animate-fade-in"
            >
              <p class="text-lg font-bold text-[#07a495] tracking-wide mb-2 uppercase">{{ match.status }}</p>
              <div class="flex gap-7 items-center w-full justify-center">
                <div class="flex flex-col items-center">
                  <img
                    src="../assets/vk-logo-normal.png"
                    :alt="match.team1.name"
                    class="object-contain w-16 h-16 rounded-full border-2 border-[#07a495] bg-white shadow"
                  />
                  <span class="text-xs font-bold mt-1 text-[#07a495]">{{ match.team1.name }}</span>
                </div>
                <div class="flex flex-col items-center">
                  <span class="text-4xl font-extrabold text-black leading-none">{{ match.team1.score }}</span>
                  <span class="text-xs text-gray-500 font-bold">VS</span>
                  <span class="text-4xl font-extrabold text-black leading-none">{{ match.team2.score }}</span>
                </div>
                <div class="flex flex-col items-center">
              
                  <span class="text-xs font-bold mt-1 text-gray-700">{{ match.team2.name }}</span>
                </div>
              </div>
              <div class="w-full mt-4">
                <p class="font-semibold text-gray-700 mb-1">Goles:</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(goal, goalIndex) in match.goles || []"
                    :key="goalIndex"
                    class="inline-flex items-center bg-[#07a495]/20 text-[#07a495] rounded-full px-3 py-1 text-sm font-bold"
                  >
                    ⚽ {{ goal.player }}
                  </span>
                  <span v-if="!match.goles || match.goles.length === 0" class="text-gray-400">Sin goles</span>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-center my-7 text-white">
            <p>No hay resultados disponibles para esta liga.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const activeTab = ref("proxPartido");
const tabs = ref([
  { name: "Liga Dobleve", value: "ligaDobleve" },
  { name: "Ligas Femeninas", value: "ligasFemeninas" },
  { name: "Prox Partido", value: "proxPartido" },
]);

const resultsData = ref({
  ligaDobleve: [],
  ligasFemeninas: [],
  proxPartido: [],
});

const switchTab = (tabValue) => {
  activeTab.value = tabValue;
};

const currentResults = computed(() => {
  // Solo el más reciente (primero del array) por categoría
  const arr = resultsData.value[activeTab.value] || [];
  return arr.length > 0 ? [arr[0]] : [];
});

// Cargar resultados desde Firestore
const cargarResultados = async () => {
  const q = query(collection(db, "resultados"), orderBy("fecha", "desc"));
  const snap = await getDocs(q);
  // Limpia los arrays
  resultsData.value = {
    ligaDobleve: [],
    ligasFemeninas: [],
    proxPartido: [],
  };
  snap.forEach(doc => {
    const data = doc.data();
    if (data.tab && resultsData.value[data.tab]) {
      resultsData.value[data.tab].push(data);
    }
  });
};

onMounted(() => {
  cargarResultados();
});
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fade-in {
  animation: fade-in 0.8s cubic-bezier(.4,0,.2,1);
}
</style>