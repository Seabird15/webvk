import { createRouter, createWebHistory } from "vue-router";
import Ligas from "../Pages/Ligas.vue";
import Calendario from "../Pages/Calendario.vue";
import Publicaciones from "../Pages/Publicaciones.vue";
import IndumentariaDetalle from "../pages/IndumentariaDetalle.vue";
import Home from "../Pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ligas",
    name: "Ligas",
    component: Ligas,
  },
  {
    path: "/indumentaria",
    name: "IndumentariaDetalle",
    component: IndumentariaDetalle, // Página para mostrar más detalles
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
