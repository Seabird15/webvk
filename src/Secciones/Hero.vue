<template>
  <header>
    <div class="overflow-hidden relative">
      <div
        class="bg-banner vignette grayscale bg-cover bg-center relative"
      ></div>
      <div
        class="absolute z-20 inset-0 flex items-end justify-start p-10 lg:p-20 uppercase font-bold"
      >
        <h1
          class="font-gobold text-6xl lg:text-8xl primary xl:text-9xl xl:leading-[9rem] tracking-widest lg:tracking-wider font-bold"
        >
          Club deportivo <br />
          social y cultural <br />
          <strong class="text-[#07a495]">vikingas</strong>
        </h1>
      </div>
      <div class="absolute z-10 inset-0 flex justify-center pt-10">
        <img
          src="../assets/VK LOGO COLOR (3).png"
          alt=""
          class="w-2/4 lg:max-w-4/6 object-contain xl:-bottom-[15rem] xl:-right-[15rem] absolute"
        />
      </div>
    </div>
  </header>
</template>
<style scoped>
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
  background-image: url("https://i.ibb.co/fz4QWjs4/banner-1-1.png");
  height: 100vh;
  width: 100%;
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
