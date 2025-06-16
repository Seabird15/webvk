<template>
  <section class="py-20 " id="sponsors">
    <div
      class="container mx-auto flex flex-col items-start lg:justify-between p-6 sm:p-8 md:p-10 lg:p-20 uppercase font-bold"
    >
      <h2
        class="font-gobold relative tracking-widest text-[#07a495] text-3xl sm:text-4xl lg:text-7xl mb-6"
      >
        Sponsors
      </h2>

      <div class="bg-white lg:bg-white/90 rounded-md lg:grid grid-cols-5 gap-4">
        <div
          v-for="sponsors in sponsors"
          :key="sponsors.name"
          class="mb-6 p-4 rounded-md lg:my-auto lg:w-3/4"
        >
          <img
            loading="lazy"
            class="items-center flex mx-auto"
            :src="sponsors.logo"
            alt=""
          />
        </div>
      </div>
      <div class="flex w-full relative mt-7">
        <h3 class="text-white text-5xl py-7 mt-2">En alianza con:</h3>
        <img class="w-96 lg:absolute -top-[100%] right-1/3" src="../assets/logospiritpng.png" alt="">
      </div>
    </div>
  </section>
</template>

<script setup>
const sponsors = [
  {
    name: "Sponsor 1",
    logo: "https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2FRabiosa%20coffee%20Circular.png?alt=media&token=25f394d9-7ce2-462d-95ab-cb877515a7bb",
  },
  {
    name: "Sponsor 2",
    logo: "https://images.jumpseller.com/store/peregrino-coffee-roasters/store/logo/Logo_Peregrino_Coffee_Roasters_shopping.png?1727281689",
  },
  {
    name: "Sponsor 3",
    logo: "https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2FLogo%20Monster%20box.png?alt=media&token=9c107750-826b-4e6a-a357-8935e30ff255",
  },

  {
    name: "Sponsor 4",
    logo: "https://firebasestorage.googleapis.com/v0/b/sitiovks.firebasestorage.app/o/Fotos%2FLogo%20Bamati.png?alt=media&token=be73ea29-5bd3-4ee7-84b1-0219123ce0d9",
  },
  {
    name: "Sponsor 5",
    logo: "https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749150971/profile-removebg-preview_trwz2f.png",
  },
];
</script>

<style>

</style>