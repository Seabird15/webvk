<script setup>
import { ref, onMounted } from "vue";

const bannerLoaded = ref(false);

const bannerUrl = "https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A7167%201.webp?alt=media&token=6d2d8496-2268-43eb-88f5-b397ab3e121b";

onMounted(() => {
  const img = new window.Image();
  img.src = bannerUrl;
  img.onload = () => {
    bannerLoaded.value = true;
  };
});
</script>

<template>
  <header>
    <div class="overflow-hidden relative">
      <div
        class="bg-banner vignette grayscale bg-cover bg-center relative"
        :class="{ 'banner-loaded': bannerLoaded }"
      ></div>
      <div
        class="absolute z-20 inset-0 flex items-end justify-start p-10 lg:p-20 uppercase font-bold"
      >
        <h1
          class="font-gobold leading-16 text-6xl md:text-8xl primary xl:text-9xl lg:leading-[7rem] xl:leading-[9rem] tracking-widest lg:tracking-wider font-bold"
        >
          Club deportivo <br />
          social y cultural <br />
          <strong class="text-[#07a495]">vikingas</strong>
        </h1>
      </div>
      <div class="absolute z-10 inset-0 flex justify-center pt-10">
        <img
          src="../assets/vk-logo-normal.png"
          alt="Logo Vikingas Club Deportivo"
          class="w-2/4 hidden md:block lg:max-w-4/6 object-contain lg:-bottom-[15rem] lg:-right-[15rem] absolute"
        />
      </div>
    </div>
  </header>
</template>

<style >
@font-face {
  font-family: "gobold";
  src: url("/src/assets/Fuentes/GoboldExtra.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}
.primary {
  color: #ffde59;
}

.font-gobold {
  font-family: "gobold", sans-serif;
}

.bg-banner {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2F6L6A7167%201.webp?alt=media&token=6d2d8496-2268-43eb-88f5-b397ab3e121b");
  height: 100vh;
  width: 100%;
  /* Estilos iniciales para la animación */
  opacity: 0;
  transform: scale(1.05);
  /* Transición suave */
  transition: opacity 1.2s ease-out,
    transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.bg-banner.banner-loaded {
  /* Estilos finales de la animación */
  opacity: 1;
  transform: scale(1);
}

.vignette::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    rgba(0, 0, 0, 0.9) 100%
  );
}
</style>
