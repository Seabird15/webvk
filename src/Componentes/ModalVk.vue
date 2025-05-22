<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50"
  >
    <div
      class="bg-white p-6 rounded-lg max-w-sm lg:h-[99%] h-full lg:mt-0 mt-48 w-full"
    >
      <slot></slot>
      <button
        @click="close"
        class="absolute top-2 right-2 text-gray-500"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const open = () => {
  isOpen.value = true;
};

const close = () => {
  isOpen.value = false;
};

defineExpose({
  open,
  close,
});
</script>

<style scoped>
/* Asegúrate de que el modal sea responsivo */
@media (max-width: 640px) {
  .modal-content {
    max-width: 90%;
  }
}
</style>
