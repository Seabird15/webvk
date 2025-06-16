<template>
  <main class="lg:min-h-[700px]">
    <div class="bg-logo flex flex-col items-center justify-center py-10 relative">
      <div class="absolute inset-0 bg-black/60 rounded-2xl"></div>
      <h2
        class="font-gobold p-7 tracking-wider text-[#07a495] text-3xl sm:text-4xl lg:text-7xl text-center z-10 relative drop-shadow-lg"
      >
        Competencias 2025
      </h2>
      <div class="flex flex-col  lg:flex-row items-center mt-7 justify-center gap-10 lg:mt-[5rem] z-10 relative">
        <!-- Liga 1 -->
        <div class="bg-white/90  rounded-2xl shadow-xl p-6 flex flex-col items-center w-72 max-w-full border-2 border-[#07a495] relative">
          <img
            class="object-contain w-24 h-24 mb-4 drop-shadow-lg"
            src="https://trotamundos.cl/wp-content/uploads/2025/04/1-5-768x768.png"
            alt="Copa Dobleve Ascenso"
          />
          <h3 class="text-xl font-bold text-[#07a495] mb-2 text-center">Copa Dobleve Ascenso</h3>
          <span class="inline-block bg-[#ffde59] text-black font-bold px-4 py-1 rounded-full mb-2 text-sm shadow">Finalizada</span>
          <p class="text-gray-700 text-center mb-2">
            ¡El equipo logró el <span class="text-[#07a495] font-bold">2º lugar</span> en la Copa Dobleve Ascenso 2025!
          </p>
          <span class="text-xs text-gray-500">¡Felicitaciones por el esfuerzo y el gran torneo!</span>
        </div>
        <!-- Liga 2 -->
        <div class="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col items-center w-72 max-w-full border-2 border-[#07a495] relative">
          <img
            class="object-contain w-24 h-24 mb-4 drop-shadow-lg"
            src="https://firebasestorage.googleapis.com/v0/b/copafacil-web.appspot.com/o/events%2F-0hvin%2Finfo.png?alt=media&token=1&m=1746036331474"
            alt="Liga Clausura"
          />
          <h3 class="text-xl font-bold text-[#07a495] mb-2 text-center">Liga Clausura 2025</h3>
          <span class="inline-block bg-[#07a495]/10 text-[#07a495] font-bold px-4 py-1 rounded-full mb-2 text-sm shadow">En desarrollo</span>
          <p class="text-gray-700 text-center">
            Fase Liguilla de Oro 
            <br>
            Un partido restante para fase de semifinales
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.bg-logo {
  background-image: url("/src/assets/VK LOGO BLANCO PNG (1).png");
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  min-height: 50vh;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
}
@media (max-width: 1024px) {
  .bg-logo {
    min-height: 0;
    height: auto;
  }
}
</style>