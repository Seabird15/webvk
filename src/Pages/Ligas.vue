<template>
  <section class="bg-gray-800 text-white p-4 rounded-3xl">
    <div>
      <h2 class="text-4xl">Ligas</h2>

      <div class="flex justify-around my-7">
        <div>
          <p>Dobleve Jueves</p>
          <div class="bg-white text-black mx-auto min-w-[400px] my-7">
            <TablaTrotamundos />
          </div>
        </div>

        <div>
          <p>Ligas Femeninas Domingos</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TablaTrotamundos from "../Componentes/TablaTrotamundos.vue";
</script>

<style scoped></style>
