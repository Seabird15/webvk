<template>
  <main id="categorias" class="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#e0f7fa] to-white">
    <div class="absolute inset-0 z-0 vignette pointer-events-none"></div>
    <div class="relative z-10 flex flex-col items-center justify-center py-10 px-2 sm:px-6">
      <h2 class="font-gobold tracking-widest text-[#07a495] text-4xl md:text-6xl mb-4 text-center drop-shadow">
        Categorías
      </h2>
      <p class="text-white font-gobold text-xl md:text-3xl tracking-wider py-4 text-center max-w-2xl mb-8 bg-black/30 rounded-xl shadow-lg backdrop-blur-md">
        "Cuando pienses en dejarlo, recuerda el porqué comenzaste"
      </p>
      <!-- Cards -->
      <div
        class="w-full max-w-5xl flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-8"
      >
        <div
          v-for="card in cards"
          :key="card.title"
          class="w-full bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-[#07a495]/10 flex flex-col justify-between transition-transform hover:scale-105 hover:shadow-[#07a495]/30"
        >
          <div>
            <h3 class="text-[#07a495] text-2xl md:text-3xl uppercase font-gobold mb-2 text-center">
              {{ card.title }}
            </h3>
            <p class="text-gray-800 py-2 tracking-wider text-base md:text-lg text-center">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const cards = [
  {
    title: "Equipo Ascenso",
    description:
      "El Equipo Ascenso es nuestra rama más competitiva. Un equipo comprometido con la excelencia, el rendimiento y la pasión por el fútbol. Cada entrenamiento y partido se vive con intensidad, disciplina y espíritu de lucha. Aquí es donde se representa con fuerza el carácter vikinga: garra, juego y mentalidad ganadora ⚔️🔥",
  },
  {
    title: "Escuela Vikingas",
    description:
      "La Escuela Vikingas es donde comienza todo. Un espacio pensado para mujeres de todas las edades descubran el fútbol, aprendan desde cero y desarrollen su pasión en un ambiente de respeto, trabajo en equipo y alegría. La base donde nacen nuestras futuras guerreras 💫⚽",
  },
  {
    title: "Equipo Fut 11",
    description:
      "Estamos dando los primeros pasos con nuestra nueva categoría de Fútbol 11. Un proyecto que nace con ilusión, trabajo y visión de futuro, pensado para llevar el juego a otra escala. Estamos construyendo un equipo con identidad, compromiso y hambre de crecer. Esto recién comienza, pero el sueño ya está en marcha 💥⚔️",
  },
];
</script>

<style scoped>
.vignette {
  background: radial-gradient(
      ellipse at center,
      transparent 60%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2Fbg-categorias.webp?alt=media&token=bff2a04d-e0de-4219-a786-59a9fae18b26") center/cover no-repeat;
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
@media (min-width: 1024px) {
  .vignette {
    background: radial-gradient(
        ellipse at center,
        transparent 60%,
        rgba(0, 0, 0, 0.4) 100%
      ),
      url("https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2Fbg-categorias.webp?alt=media&token=bff2a04d-e0de-4219-a786-59a9fae18b26") center/cover no-repeat;
  }
}
</style>