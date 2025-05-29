<template>
  <section class="bg-gray-800 text-white p-4 rounded-3xl">
    <div>
      <h2 class="text-4xl">Ligas</h2>

      <div class="flex flex-col md:flex-row justify-around my-7">
        <div>
          <p>Dobleve Jueves</p>
          <div class="bg-white text-black mx-auto lg:min-w-[400px] my-7">
            <TablaTrotamundos />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TablaTrotamundos from "../Componentes/TablaTrotamundos.vue";
</script>

<style scoped></style>
