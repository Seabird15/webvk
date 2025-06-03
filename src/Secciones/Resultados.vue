<template>
  <section>
    <div class="mx-auto py-4 lg:p-20">
      <h2
        class="font-gobold mx-4 tracking-widest text-[#07a495] text-4xl lg:text-7xl"
      >
        Últimos Resultados
      </h2>
      <div class="bg-black py-7 my-2">
        <div class="flex bg-[#07a495] py-4 mt-6 mx-auto justify-center">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            @click="switchTab(tab.value)"
            class="shadow"
            :class="[
              'cursor-pointer p-4 w-full   bg-white',
              activeTab === tab.value ? 'text-[#07a495]' : 'text-black ',
            ]"
          >
            {{ tab.name }}
          </button>
        </div>
        <div class="px-7 py-2 text-black">
          <div
            v-if="currentResults.length > 0"
            class="flex flex-col bg-gradient-to-b from-yellow-400 to-yellow-300 shadow-2xl p-4 rounded-xl items-center gap-4 mx-auto justify-center my-7"
          >
            <div
              v-for="(match, index) in currentResults"
              :key="index"
              class="flex flex-col items-center gap-2 mb-4"
            >
              <div class="flex gap-7 items-center">
                <img
                  :src="match.team1.logo"
                  :alt="match.team1.name"
                  class="object-contain w-20 h-auto"
                />
                <span class="my-auto text-xl font-semibold">vs</span>
                <p class="my-auto text-center min-w-[82px] text-lg">
                  {{ match.team2.name }}
                </p>
              </div>
              <div
                class="flex justify-between items-center w-40 mt-4 font-bold"
              >
                <p class="font-bold text-4xl">{{ match.team1.score }}</p>
                <span>-</span>
                <p class="font-bold text-4xl">{{ match.team2.score }}</p>
              </div>
            </div>
          </div>
          <div v-else class="text-center my-7">
            <p>No hay resultados disponibles para esta liga.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import vkLogo from "../assets/VK LOGO COLOR (3).png";

const activeTab = ref("ligaDobleve");
const tabs = ref([
  { name: "Liga Dobleve", value: "ligaDobleve" },
  { name: "Ligas Femeninas", value: "ligasFemeninas" },
]);

const resultsData = ref({
  ligaDobleve: [
    {
      team1: { name: "VK", logo: vkLogo, score: 5 },
      team2: { name: "WPP", logo: null, score: 2 },
    },
  ],
  ligasFemeninas: [
    {
      team1: { name: "VK", logo: vkLogo, score: 3 },
      team2: { name: "Kenny Bell", logo: null, score: 2 },
    },
  ],
});

const switchTab = (tabValue) => {
  activeTab.value = tabValue;
};

const currentResults = computed(() => {
  return resultsData.value[activeTab.value] || [];
});
</script>
