<script setup>
import { ref } from "vue";
import { VueCal } from "vue-cal";
import "vue-cal/style";

import ModalVk from "../Componentes/ModalVk.vue";

const modal = ref(null);
const activeView = ref("day");

// Abrir el modal
const openModalEvento = () => {
  // Limpiar campos del formulario
  eventTitle.value = "";
  eventDescription.value = "";
  eventDate.value = "";
  eventTime.value = "";
  modal.value.open();
};

const closeModalEvento = () => {
  modal.value.close();
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
const events = ref([
  {
    start: "2025-05-23 20:00",
    end: "2025-05-23 22:00",
    title: "Entrenamiento Viernes Ascenso",
    description: "Cancha Domingo Tocornal",
  },
  {
    start: "2025-05-25 17:30",
    end: "2025-05-25 20:00",
    title: "Liga Femenina Vks vs Las Colun",
    description: "Fortín Cruzado",
  },
  {
    start: "2025-05-25 10:30",
    end: "2025-05-25 12:00",
    title: "Entrenamiento Escuela y Sesión Fotos Club",
    description: "El Mediero",
  },
]);

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
    <div class="mx-auto flex justify-center">
      <VueCal
        :time-from="10 * 60"
        :time-to="22 * 60"
        :time-step="60"
        :active-view="activeView"
        style="height: 500px; width: 800px"
        locale="es"
        :events="events"
      />
    </div>
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
      class="bg-green-500 p-2 text-white tracking-widest rounded-md cursor-pointer"
    >
      Agregar
    </button>
    <button
      class="float-right p-2 bg-red-700 text-white tracking-widest rounded-md cursor-pointer"
      @click="closeModalEvento"
    >
      Cancelar
    </button>
  </ModalVk>
</template>

<style>
th {
  padding: 5px;
  border: 1px solid #ccc;
}
td {
  margin-bottom: 50px !important;
  padding: 20px;
  border: 1px solid #ccc;
}

.vuecal__views-bar {
  background-color: #07a495;
  color: white;
}
.vuecal__transition-wrap .vuecal__title-bar {
  background-color: black;
  color: white;
}
</style>
