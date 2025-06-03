<template>
  <div
    class="relative group w-2/4 rounded-xl shadow-2xl overflow-hidden cursor-pointer transform transition-all duration-500 ease-in-out hover:scale-95"
    :style="{ backgroundImage: `url(${image})` }"
    style="background-size: cover"
  :class="[extraClass, { 'grayscale': !color }]"
    @click="toggleDetails"
  >
    <!-- Overlay oscuro para mejorar legibilidad del texto inicial sobre la imagen -->
    <div
      :class="[
        ' inset-0 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-500 ease-in-out',
        { 'bg-opacity-0': isClicked },
      ]"
    ></div>

    <!-- Contenido Inicial: Título y Precio (visible sobre la imagen) -->
    <div
      :class="[
        ' inset-0 p-6 flex flex-col justify-end text-white transition-opacity duration-300 ease-in-out group-hover:opacity-0 group-hover:pointer-events-none',
        { 'opacity-0 pointer-events-none': isClicked },
      ]"
    >
      <h3 class="text-2xl font-bold mb-1 drop-shadow-md">{{ title }}</h3>
      <p class="text-xl font-semibold drop-shadow-md">{{ price }}</p>
      <p
        class="hidden md:block text-xl lg:hidden font-semibold drop-shadow-md text-amber-300"
      >
        Click para ver más
      </p>
    </div>

    <!-- Contenido Hover: Fondo blanco, Título, Descripción y Precio -->
    <div
      :class="[
        ' inset-0 p-6 bg-white/60 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform scale-95 group-hover:scale-100',
        { 'opacity-100 scale-100': isClicked },
      ]"
    >
      <h3 class="text-xl font-bold text-gray-800 mb-2">{{ title }}</h3>
      <p class="text-lg text-gray-600 mb-3 leading-relaxed">
        {{ description }}
      </p>
      <p class="text-2xl font-semibold text-gray-900">{{ price }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"; // Import ref

defineProps({
  title: {
    type: String,
    required: false,
  },
  price: {
    type: String, // Puedes cambiarlo a Number si prefieres y formatearlo
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  extraClass: {
    type: String,
    default: "",
  },
  color: {
    type: Boolean,
    default: true, // Por defecto la imagen es a color
  },
});

// Reactive state for click
const isClicked = ref(false);

// Function to toggle the click state
const toggleDetails = () => {
  isClicked.value = !isClicked.value;
};
</script>

<style scoped>
/* Opcional: Si quieres evitar que el texto se seleccione durante las transiciones */
.group div {
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10+ */
}

/* Efecto de sombra para el texto sobre la imagen para mejor legibilidad */
.drop-shadow-md {
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.5));
}
.grayscale {
  filter: grayscale(1);
  transition: filter 0.5s;
}
</style>
