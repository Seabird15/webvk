import { createRouter, createWebHistory } from "vue-router";
import Ligas from "../Pages/Ligas.vue";
import Calendario from "../Pages/Calendario.vue";
import Publicaciones from "../Pages/Publicaciones.vue";
import IndumentariaDetalle from "../Pages/IndumentariaDetalle.vue";
import AsistenciaAscenso from "../Secciones/PrivadoJugadoras/AsistenciaAscenso.vue";
import AsistenciaEscuela from "../Secciones/PrivadoJugadoras/AsistenciaEscuela.vue";
import Jugadoras from "../Pages/Jugadoras.vue";
import Galeria from "../Pages/Galeria.vue";
import objetivosAscenso from "../Secciones/PrivadoJugadoras/objetivosAscenso.vue";
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
    {
    path: "/asistenciaascenso",
    name: "Asistencia Ascenso",
    component: AsistenciaAscenso,
  },
    {
    path: "/asistenciaescuela",
    name: "Asistencia Escuela",
    component: AsistenciaEscuela,
  },
      {
    path: "/jugadoras",
    name: "Jugadoras",
    component: Jugadoras,
  },
     {
    path: "/galeria",
    name: "Galeria",
    component: Galeria,
  },
       {
    path: "/objetivosascenso",
    name: "Objetivos Ascenso",
    component: objetivosAscenso,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
