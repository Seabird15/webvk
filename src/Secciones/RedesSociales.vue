<template>
  <section class="bg-section py-7 min-h-screen flex flex-col items-center justify-center">
    <h2 class="text-white text-center text-5xl md:text-6xl lg:text-7xl pt-16 font-gobold tracking-widest drop-shadow-lg">
      Síguenos en Instagram
    </h2>
    <p class="text-gray-300 text-center mt-4 mb-10 text-lg max-w-xl mx-auto">
      Descubre las últimas novedades, fotos y momentos de nuestro club en <span class="text-[#07a495] font-bold">@cdvikingas</span>
    </p>
    <div class="container mx-auto flex justify-center py-10" id="redes-sociales">
      <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#07a495]/80 to-[#141414]/90 p-2">
        <blockquote
          class="instagram-media rounded-xl"
          data-instgrm-permalink="https://www.instagram.com/p/DKIsFGcgOaW/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style="background:#FFF; border:0; border-radius:1rem; box-shadow:0 0 8px rgba(7,164,149,0.15), 0 2px 24px rgba(0,0,0,0.25); margin: 1px; max-width:540px; min-width:326px; padding:0; width:calc(100% - 2px);"
        ></blockquote>
        <div class="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
      </div>
    </div>
    <div class="flex justify-center gap-6 mt-8">
      <a
        href="https://www.instagram.com/cdvikingas/"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#07a495] hover:bg-[#059485] text-white font-bold text-lg shadow-lg transition"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
        Ver perfil
      </a>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const existingScript = document.querySelector('script[src*="www.instagram.com/embed.js"]')
  if (!existingScript) {
    const script = document.createElement('script')
    script.setAttribute('src', 'https://www.instagram.com/embed.js')
    script.async = true
    script.onload = () => {
      window.instgrm?.Embeds.process()
    }
    document.body.appendChild(script)
  } else {
    window.instgrm?.Embeds.process()
  }
})
</script>

<style>
.bg-section {
  background:
    repeating-linear-gradient(45deg,#0000 calc(-650%/13) calc(50%/13),#000000 0 calc(100%/13),
    #0000 0 calc(150%/13),#000000 0 calc(200%/13),
    #0000 0 calc(250%/13),#000000 0 calc(300%/13)),
    repeating-linear-gradient(45deg,#0000 calc(-650%/13) calc(50%/13),#000000 0 calc(100%/13),
    #0000 0 calc(150%/13),#000000 0 calc(200%/13),
    #0000 0 calc(250%/13),#000000 0 calc(300%/13)) 28px 28px,
    repeating-linear-gradient(-45deg,#0000 calc(-650%/13) calc(50%/13),#000000 0 calc(100%/13),
    #0000 0 calc(150%/13),#000000 0 calc(200%/13),
    #0000 0 calc(250%/13),#000000 0 calc(300%/13)),
    repeating-linear-gradient(-45deg,#0000 calc(-650%/13) calc(50%/13),#000000 0 calc(100%/13),
    #0000 0 calc(150%/13),#000000 0 calc(200%/13),
    #0000 0 calc(250%/13),#000000 0 calc(300%/13)) 28px 28px #141414;
  background-size: 56px 56px;
  min-height: 100vh;
}

.font-gobold {
  font-family: "gobold", sans-serif;
}

.instagram-media {
  min-height: 400px;
}
</style>