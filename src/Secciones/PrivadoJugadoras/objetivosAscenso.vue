<template>
  <section class="">

    <div class="w-full flex flex-col items-center justify-center py-10 sm:py-14 bg-gradient-to-b from-[#07a495]/40 to-transparent relative overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <div class="w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-[#07a495]/20 blur-3xl animate-pulse"></div>
      </div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <div class="w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-[#ffde59]/10 blur-2xl"></div>
      </div>
      <div class="relative z-10 group flex flex-col items-center">
        <div class="relative">
          <img
            src="https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749668677/6L6A7084_1_xhrywi.webp"
            alt="Profe Ascenso"
            class="w-40 h-40 sm:w-60 sm:h-60 rounded-full shadow-2xl object-cover border-4 sm:border-8 border-white ring-2 sm:ring-4 ring-[#07a495] transition-transform duration-300 group-hover:scale-105"
          />
          <div class="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-[#07a495] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-base shadow font-bold opacity-95 border-2 border-white">
            Profe Yesi
          </div>
        </div>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-gobold text-[#07a495] mb-2 text-center mt-6 drop-shadow-lg tracking-wider">
          Objetivos Equipo Ascenso
        </h1>
        <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#07a495] to-[#ffde59] rounded-full mb-2"></div>
      </div>
    </div>
    <div class="mx-auto flex justify-center">
               <RouterLink
      to="/"
      class="mt-4 inline-block text-white bg-[#07a495] p-2 rounded-md"
    >
      &lt; Volver atrás
    </RouterLink>
    </div>

    <!-- Objetivos del equipo -->
    <div class="max-w-2xl lg:w-full mx-auto font-goboldText px-4 sm:px-7 py-7 space-y-7 text-base sm:text-lg text-white">
      <p>
        <span class="text-[#07a495] font-bold">Queridas jugadoras:</span>
      </p>
      <p>
        Como equipo que forma parte de la categoría de ascenso,
        <span class="text-[#07a495] font-bold">sabemos que la competencia es una parte esencial de nuestro camino dentro del club.</span>
        Competir implica esfuerzo, crecimiento y también reconocer que existen diferentes momentos, niveles y procesos individuales entre quienes lo integramos.
      </p>
      <p>
        Hoy contamos con <span class="text-[#07a495] font-bold">21 jugadoras</span>, pero para la competencia oficial, la reglamentación permite incluir un
        <span class="text-[#07a495] font-bold">máximo de 15 jugadoras en la nómina</span>. Esto nos plantea una realidad que no siempre es fácil, pero que debemos abordar con claridad y responsabilidad.
      </p>
      <p>
        Desde quienes creamos este espacio, trabajamos cada día con la convicción de que
        <span class="text-[#07a495] font-bold">todas tienen el mismo derecho a formarse, mejorar y sentirse parte de este espacio</span>,
        tanto dentro como fuera de la cancha. Cada entrenamiento está pensado en igualdad de condiciones para todas, pero la competencia requiere tomar decisiones, y esas decisiones se basan en lo futbolístico, también en el compromiso, la actitud, la mentalidad y el proceso de cada una.
      </p>
      <p>
        Es clave que cada jugadora pueda desarrollar una
        <span class="text-[#07a495] font-bold">mirada autocrítica y constructiva sobre su propio momento</span>,
        entender en qué punto del camino se encuentra, y desde ahí proponerse crecer. El lugar dentro del equipo no se define únicamente por estar o no estar en una lista, sino por cómo cada una valora el espacio y se involucra en él.
      </p>
      <p>
        Nuestro objetivo como equipo <span class="text-[#07a495] font-bold">no es dejar a nadie afuera</span> y como entrenadora, creo firmemente que
        <span class="text-[#07a495] font-bold">sentirse parte no significa únicamente estar dentro de la cancha</span>,
        sino también acompañar, observar, aprender, sostener al equipo y aprovechar cada instancia que se presenta como una oportunidad de crecimiento.
      </p>
      <p>
        Sé que, para algunas, esto puede parecer poco y entiendo los distintos puntos de vista que puedan surgir. Justamente por eso, elaboro este documento para dar claridad sobre el contexto en el que estamos y hacia dónde vamos <span class="text-[#07a495] font-bold">COMO CATEGORÍA ASCENSO</span>. Sabemos que el proceso es dinámico, que las oportunidades existen y que también dependen de la mirada con la que cada una elige transitar este camino y el nivel de cada una para la competencia.
      </p>
      <p>
        Me gustaría poder reunirme con algunas de ustedes, como lo he hecho en procesos anteriores, para conversar y llegar a acuerdos sobre su recorrido dentro del equipo y si la visión que tenemos es la que usted también quiere recorrer o buscar otras formas. <span class="text-[#07a495] font-bold">El diálogo sincero siempre abre puertas y fortalece los vínculos.</span>
      </p>

      <!-- NUEVO BLOQUE: PRE-TEMPORADA -->
      <div class="mt-10 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#07a495]/30 to-[#141414]/80 border-l-4 border-[#07a495] shadow-xl">
        <h2 class="text-xl sm:text-2xl font-gobold text-[#07a495] mb-4 tracking-wide">PRE-TEMPORADA SEGUNDO SEMESTRE</h2>
        <ul class="list-disc ml-6 space-y-2 text-white">
          <li><span class="text-[#07a495] font-bold">Martes:</span> Entrenamiento físico</li>
          <li><span class="text-[#07a495] font-bold">Jueves:</span> Amistosos de preparación</li>
          <li><span class="text-[#07a495] font-bold">Viernes:</span> Entrenamiento técnico y táctico</li>
          <li><span class="text-[#07a495] font-bold">Sábados:</span> Entrenamiento integral de fútbol 11 (físico y táctico)</li>
        </ul>
        <p class="mt-4">
          Una vez transcurrido <span class="text-[#07a495] font-bold">4 semanas de entrenamiento físico</span>, se retomarán los amistosos de preparación, los cuales serán con un <span class="text-[#07a495] font-bold">foco competitivo</span>, ya que la categoría de ascenso desde el 2025 apunta a la <span class="text-[#07a495] font-bold">alta competencia y desarrollo de las jugadoras en esta área</span>.
        </p>
        <p class="mt-2">
          Llegado el momento se hará una <span class="text-[#07a495] font-bold">reunión y votación para las competencias del segundo semestre</span> y poder dirigir nuestro trabajo en eso.<br>
          Cualquier información de ligas me puede hablar por interno para ver las posibilidades.
        </p>
        <div class="mt-4">
          <span class="text-[#07a495] font-bold">Días disponibles de ligas:</span>
          <ul class="list-disc ml-6">
            <li>Lunes y domingos</li>
            <li><span>JUEVES LIGA DOBLE V CLAUSURA 2025</span></li>
          </ul>
        </div>
        <p class="mt-4 font-bold text-yellow-400 text-base sm:text-lg tracking-wide">
          SABIENDO ESTA INFORMACIÓN TAMBIÉN NECESITO QUE POR INTERNO ME COMUNIQUEN SU DISPONIBILIDAD CON EL EQUIPO CON RESPECTO A LA INFORMACIÓN ANTERIOR.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-goboldText {
  font-family: "goboldText", sans-serif;
}

@media (max-width: 640px) {
  .container {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
</style>
<script setup>
import { RouterLink } from 'vue-router';


</script>