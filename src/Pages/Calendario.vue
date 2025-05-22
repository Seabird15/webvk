<script setup>
import { ref } from "vue";
import { VueCal } from "vue-cal";
import "vue-cal/style";

import ModalVk from "../Componentes/ModalVk.vue";

const modal = ref(null);

// Abrir el modal
const openModalEvento = () => {
  // Limpiar campos del formulario
  eventTitle.value = "";
  eventDescription.value = "";
  eventDate.value = "";
  eventTime.value = "";
  modal.value.open();
};

const showWeekends = ref(true);
const toggleWeekends = () => {
  showWeekends.value = !showWeekends.value;
};

// Campos del formulario
const eventTitle = ref("");
const eventDescription = ref("");
const eventDate = ref("");
const eventTime = ref("");
const eventTimeEnd = ref("");

// Lista de eventos
const events = ref([]);

// Agregar evento al calendario
const agregarEvento = () => {
  if (
    !eventTitle.value ||
    !eventDate.value ||
    !eventTime.value ||
    !eventTimeEnd.value
  ) {
    alert("Por favor, completa todos los campos obligatorios.");
    return;
  }

  const start = `${eventDate.value} ${eventTime.value}`;
  const end = `${eventDate.value} ${eventTimeEnd.value}`; // Puedes ajustar la lógica para calcular la hora de finalización

  events.value.push({
    start,
    end,
    title: eventTitle.value,
    description: eventDescription.value,
  });

  modal.value.close();
};
</script>

<template>
  <section class="w-full bg-white mx-auto p-7">
    <button @click="toggleWeekends">Mostrar/Ocultar fines de semana</button>
    <button
      @click="openModalEvento"
      class="mb-4 cursor-pointer ml-2 px-4 py-2 bg-green-500 text-white rounded"
    >
      Agregar evento
    </button>
    <VueCal
      editable-events
      locale="es"
      :events="events"
      :hide-weekends="!showWeekends"
      default-view="month"
      style="height: 600px"
    />
  </section>

  <ModalVk ref="modal">
    <div class="relative text-black">
      <label for="eventTitle">Nombre del evento</label>
      <input
        id="eventTitle"
        v-model="eventTitle"
        type="text"
        placeholder="Nombre del evento"
        class="border p-2 mb-4 w-full shadow"
      />
      <label for="eventDescription">Descripción</label>
      <input
        id="eventDescription"
        v-model="eventDescription"
        type="text"
        placeholder="Descripción"
        class="border p-2 mb-4 w-full shadow"
      />
      <label for="eventDate">Fecha</label>
      <input
        id="eventDate"
        v-model="eventDate"
        type="date"
        class="border p-2 mb-4 w-full shadow"
      />
      <label for="eventTime">Hora</label>
      <input
        id="eventTime"
        v-model="eventTime"
        type="time"
        class="border p-2 mb-4 w-full shadow"
      />
      <label for="eventTime">Hora Término</label>
      <input
        id="eventTimeEnd"
        v-model="eventTimeEnd"
        type="time"
        class="border p-2 mb-4 w-full shadow"
      />
    </div>
    <button
      @click="agregarEvento"
      class="bg-green-500 p-2 text-white tracking-widest rounded-md"
    >
      Agregar
    </button>
  </ModalVk>
</template>

<style>
/* Override vue-cal height. */
</style>
