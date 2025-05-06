<template>
  <button
    :class="computedClasses"
    :type="type"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

// Desestructuramos las props directamente
const { label, type, variant, size, disabled } = defineProps({
  label: {
    type: String,
    default: "Click me",
  },
  type: {
    type: String,
    default: "button",
  },
  variant: {
    type: String,
    default: "primary", // primary, secondary, danger
  },
  size: {
    type: String,
    default: "md", // sm, md, lg
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

// Emitir eventos
const emit = defineEmits(["click"]);

// Clases dinámicas
const computedClasses = computed(() => {
  const baseClasses =
    "px-4 py-2 font-bold font-gobold tracking-widest rounded focus:outline-none focus:ring transition";
  const variantClasses = {
    primary: "bg-[#07a495] text-white hover:bg-[#07a495]/50  cursor-pointer",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 ",
    danger: "bg-red-500 text-white hover:bg-red-600 ",
  };
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return [
    baseClasses,
    variantClasses[variant] || variantClasses.primary,
    sizeClasses[size] || sizeClasses.md,
    disabled ? "opacity-50 cursor-not-allowed" : "",
  ].join(" ");
});

// Manejar clics
const handleClick = (event) => {
  if (!disabled) {
    emit("click", event);
  }
};
</script>

<style scoped>
/* Puedes agregar animaciones u otros estilos aquí si deseas */
</style>
