<template>
  <section class="relative min-h-screen flex flex-col justify-between vignette bg-cover bg-center">
    <!-- Fondo y overlay -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://res.cloudinary.com/dfr2c9ry2/image/upload/v1750358720/IMG_20250412_131252_1_gsn8vq.webp"
        alt="Fondo Escuela"
        class="w-full h-full object-cover object-center brightness-75"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-[#07a495]/60 via-black/40 to-[#ffde59]/20"></div>
    </div>

    <!-- Encabezado -->
    <div class="relative z-10 flex flex-col items-center pt-10 sm:pt-16">
      <div class="relative">
        <img
          src="https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749668677/6L6A7084_1_xhrywi.webp"
          alt="Profe Yesi"
          class="w-32 h-32 sm:w-44 sm:h-44 rounded-full shadow-2xl object-cover border-4 sm:border-8 border-white ring-2 sm:ring-4 ring-[#07a495] transition-transform duration-300 group-hover:scale-105"
        />
        <div class="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-[#07a495] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-base shadow font-bold opacity-95 border-2 border-white">
          Profe Yesi
        </div>
      </div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-gobold text-[#ffde59] mb-2 text-center mt-6 drop-shadow-lg tracking-wider">
        Escuela Formativa Vikingas
      </h1>
      <div class="w-20 sm:w-32 h-1 bg-gradient-to-r from-[#07a495] via-[#ffde59] to-[#07a495] rounded-full mb-4"></div>
      <p class="max-w-xl text-center text-white/90 font-goboldText text-base sm:text-lg px-4 mb-2">
        Un espacio seguro, alegre y sin prejuicios, donde cada mujer puede descubrir su potencial y disfrutar del fútbol en comunidad.
      </p>
    </div>

    <!-- Objetivos en tarjetas -->
    <div class="relative z-10 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 py-8">
      <div class="bg-white/90 rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-[#07a495]">
        <span class="text-[#07a495] text-3xl mb-2">🎯</span>
        <p class="font-goboldText text-[#07a495] text-center font-bold">
          Como escuela formativa, les compartimos los objetivos y lineamientos de esta categoría.
        </p>
      </div>
      <div class="bg-white/90 rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-[#ffde59]">
        <span class="text-[#ffde59] text-3xl mb-2">🌱</span>
        <p class="font-goboldText text-gray-700 text-center">
          Este espacio es muy especial para nosotras, ya que representa la base y el origen de Vikingas: un lugar creado para mujeres adultas, sin requisitos previos, donde puedan aprender y desarrollarse en este hermoso deporte.
        </p>
      </div>
      <div class="bg-white/90 rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-[#07a495]">
        <span class="text-[#07a495] text-3xl mb-2">🤝</span>
        <p class="font-goboldText text-gray-700 text-center">
          Nuestra propuesta se centra en la recreación y el disfrute, mientras fomentamos la formación de comunidad, la amistad y un profundo trabajo de superación personal y conciencia sobre la importancia de la actividad física.
        </p>
      </div>
      <div class="bg-white/90 rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-[#ffde59]">
        <span class="text-[#ffde59] text-3xl mb-2">🏆</span>
        <p class="font-goboldText text-gray-700 text-center">
          A diferencia de la categoría <span class="text-[#07a495] font-bold">"Ascenso"</span>, aquí la competencia no es el foco principal. Sin embargo, como club también buscamos generar espacios de competencia sana y segura, a través de los torneos que organizamos especialmente para ustedes.
        </p>
      </div>
      <div class="bg-white/90 rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-[#07a495] sm:col-span-2">
        <span class="text-[#07a495] text-3xl mb-2">📅</span>
        <p class="font-goboldText text-gray-700 text-center">
          <span class="text-[#07a495] font-bold">¡De hecho, ya estamos preparando un nuevo campeonato para el segundo semestre de 2025!</span>
        </p>
      </div>
      <div class="bg-white/90 rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-[#ffde59] sm:col-span-2">
        <span class="text-[#ffde59] text-3xl mb-2">💬</span>
        <p class="font-goboldText text-gray-700 text-center">
          Recuerda que a veces los procesos pueden ser frustrantes, nosotras mismas nos ponemos presión en algo que no necesariamente debe ser así, pero este espacio es para aprender, equivocarse y darnos cuenta que siempre se puede mejorar, pero por sobre todo disfrutar con las compañeras.
        </p>
      </div>
    </div>

    <!-- Frase motivacional -->
    <div class="relative z-10 flex flex-col items-center pb-8">
      <blockquote class="italic text-lg sm:text-xl text-white/90 text-center max-w-2xl px-4">
        “Aquí no importa de dónde vienes, sino las ganas que tienes de aprender, compartir y crecer juntas.”
      </blockquote>
      <div class="w-12 h-1 bg-[#ffde59] rounded-full mt-3"></div>
    </div>

    <!-- Botón volver -->
    <div class="relative z-10 mx-auto flex py-4 justify-center">
      <RouterLink
        to="/"
        class="inline-block text-white bg-[#07a495] hover:bg-[#059687] px-6 py-2 rounded-full font-bold shadow-lg transition"
      >
        &lt; Volver atrás
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
section {
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.font-goboldText {
  font-family: "goboldText", sans-serif;
}
@media (max-width: 640px) {
  .font-goboldText {
    font-size: 1rem;
  }
  .rounded-xl {
    border-radius: 1rem;
  }
}
</style>
<script setup>
import { RouterLink } from 'vue-router';
</script>