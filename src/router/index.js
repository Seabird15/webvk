import { createRouter, createWebHistory } from "vue-router";
import Ligas from "../Pages/Ligas.vue";
import Calendario from "../Pages/Calendario.vue";
import Publicaciones from "../Pages/Publicaciones.vue";

const routes = [
  {
    path: "/",
    redirect: "/calendario", // Redirige a /calendario por defecto
  },
  {
    path: "/ligas",
    name: "Ligas",
    component: Ligas,
  },
  {
    path: "/calendario",
    name: "Calendario",
    component: Calendario,
  },
  {
    path: "/publicaciones",
    name: "Publicaciones",
    component: Publicaciones,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
