<template>
<section class="bg-section p-7 rounded-xl">
       <RouterLink
          to="/"
          class="bg-white p-2 rounded-md text-xl text-[#07a495] font-bold hover:bg-[#07a495] hover:text-white transition"
        >
           < Volver atrás 
        </RouterLink>

  <div class="p-4 max-w-screen-lg mt-7 mx-auto ">

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <div
        v-for="(image, index) in visibleImages"
        :key="index"
        class="relative group cursor-pointer"
        @click="showLightbox(index)"
      >
        <img
          v-lazy="image"
          @load="(e) => (e.target.style.opacity = 1)"
          class="w-full h-full object-cover rounded-lg transition-opacity duration-500 opacity-0"
          alt="Imagen de galería"
        />
      </div>
    </div>

    <!-- Botón "Cargar más" -->
    <div class="text-center mt-6" v-if="visibleCount < images.length">
      <button
        @click="loadMore"
        class="bg-[#07a495] text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Cargar más
      </button>
    </div>

    <!-- Lightbox -->
    <vue-easy-lightbox
      :visible="lightboxVisible"
      :imgs="images"
      :index="lightboxIndex"
      @hide="lightboxVisible = false"
    />
  </div>
</section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import VueEasyLightbox from 'vue-easy-lightbox'

const images = ref([
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749670327/6L6A7650_moqesj.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749668678/6L6A7423_1_mjyq3n.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749668680/6L6A7686_1_nfgowo.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749668679/6L6A7157_1_nungdf.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749668679/6L6A7663_1_zkadgp.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749668678/6L6A7267_1_nhewkm.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749668677/6L6A7147_1_rdoiwr.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749668678/6L6A7300_1_v2tcjy.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749668678/6L6A7332_1_htocij.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749668678/6L6A7400_1_bazfud.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749668677/6L6A6878_1_b1t2ce.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749668677/6L6A7084_1_xhrywi.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749668676/6L6A6849_1_zgsvr1.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749668551/6L6A7434_1_rpfwpf.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749670329/6L6A7265_tm1il8.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749670327/6L6A7650_moqesj.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749670327/6L6A7547_kvqqoy.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749670327/6L6A7555_h8meec.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749670327/6L6A7444_bcejxl.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749670327/6L6A7781_gvnggo.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749670326/6L6A7284_b4d7pb.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749670326/6L6A7340_ilklpc.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749670326/6L6A7384_cvfy8r.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749670326/6L6A7296_yojbhf.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749670326/6L6A7329_t6ivtj.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749670325/6L6A7250_qzt2mw.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749670325/6L6A7234_d57zpq.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749670325/6L6A7167_hha6yb.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749670325/6L6A6855_i1ruzc.webp',
  'https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749670325/6L6A7218_rm54fi.webp',
  
  
])

const visibleCount = ref(8)
const increment = 4

const visibleImages = computed(() => images.value.slice(0, visibleCount.value))

const loadMore = () => {
  visibleCount.value += increment
}

const lightboxVisible = ref(false)
const lightboxIndex = ref(0)

const showLightbox = (index) => {
  lightboxIndex.value = index
  lightboxVisible.value = true
}
</script>

<style scoped>
/* Opcional: animación fade-in */
</style>
