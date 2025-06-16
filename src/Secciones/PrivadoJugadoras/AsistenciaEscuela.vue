<template>  
  <section class="bg-[#0d0d0d] text-white min-h-screen p-7">
    <div v-if="!accesoPermitido" class="flex flex-col items-center justify-center min-h-screen">
      <div class="p-7 flex flex-col items-center justify-center"> 
        
        <h2
          class="font-gobold relative tracking-widest text-[#07a495] text-3xl sm:text-4xl lg:text-7xl mb-6"
        >
          % Asistencia Entrenamientos Escuela 
        </h2>
      </div>
      <div>
        <label for="clave">Ingresa la clave</label>
        <input
          id="clave"
          v-model="clave"
          type="text"
          class="border-2 border-[#07a495] rounded-md p-2 w-full max-w-md"
          placeholder="Clave de acceso"
          @keyup.enter="handleClaveInput"
        />
        <button @click="handleClaveInput" class="my-4 bg-[#07a495] p-2">Ingresar</button>
        <p v-if="error" class="text-red-500 mt-2">Clave incorrecta</p>
      </div>
    </div>
    <div v-else>
      <!-- Contenido  -->
            <RouterLink
        to="/"
        class="mt-4 inline-block text-white bg-[#07a495] p-2 rounded-md"
      >
        &lt; Volver atrás
      </RouterLink>
      <div class="p-7 flex flex-col items-center justify-center"> 
        
        <h2
          class="font-gobold relative tracking-widest text-[#07a495] text-3xl sm:text-4xl lg:text-7xl mb-6"
        >
          % Asistencia Entrenamientos Escuela
        </h2>
      </div>
      <div>
        <p class="text-lg text-center">Asistencia periodo 01 Enero 2025 / 03 Junio 2025</p>
        <img class="w-full" src="https://res.cloudinary.com/dfr2c9ry2/image/upload/v1749235901/asistenciaglobalescuela_nysr5j.png" alt="">
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const clave = ref('');
const accesoPermitido = ref(false);
const error = ref(false);

const handleClaveInput = () => {
  if (clave.value === 'Vksescuela2025') {
    accesoPermitido.value = true;
    error.value = false;
  } else {
    error.value = true;
  }
};
</script>