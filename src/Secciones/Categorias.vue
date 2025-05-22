<template>
  <main>
    <div class="relative">
      <div
        class="vignette bg-main bg-cover bg-no-repeat grayscale relative"
      ></div>
      <!-- Columnas contenido -->
      <div class="grid grid-cols-1 lg:grid-cols-2 absolute inset-0">
        <div
          class="z-20 flex flex-col items-start lg:justify-between p-10 lg:p-20 uppercase font-bold"
        >
          <h2
            class="font-gobold tracking-widest text-[#07a495] text-4xl lg:text-7xl"
          >
            Categorias
          </h2>
          <p class="text-white font-gobold text-4xl tracking-wider py-7">
            "Cuando pienses en dejarlo, recuerda el porqué comenzaste"
          </p>
        </div>
        <div
          class="z-30 lg:flex-col pl-4 flex items-start justify-start lg:p-20 uppercase font-bold"
        >
          <!-- Cards -->
          <div class="flex overflow-x-auto gap-6 lg:flex-col relative">
            <div
              v-for="card in cards"
              :key="card.title"
              class="min-w-[80%] md:min-w-[30%] lg:min-w-0 bg-black/30 p-6 rounded-2xl shadow-lg backdrop-blur-md"
            >
              <div>
                <h3
                  class="text-[#07a495] text-2xl lg:text-4xl uppercase font-gobold"
                >
                  {{ card.title }}
                </h3>
                <p
                  class="text-white py-4 font-gobold tracking-wider text-base lg:text-lg"
                >
                  {{ card.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.bg-main {
  background-image: url("../assets/7dcb3f96-80d9-405f-9b51-b90ea4434357.jfif");
  height: 100vh;
  width: 100%;
}

.vignette::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
      ellipse at center,
      transparent 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    rgba(0, 0, 0, 0.4);
}
</style>

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
