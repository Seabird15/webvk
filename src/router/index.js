import { createRouter, createWebHistory } from "vue-router";
import Publicaciones from "../Pages/Publicaciones.vue";
import IndumentariaDetalle from "../Pages/IndumentariaDetalle.vue";
import AsistenciaAscenso from "../Secciones/PrivadoJugadoras/AsistenciaAscenso.vue";
import AsistenciaEscuela from "../Secciones/PrivadoJugadoras/AsistenciaEscuela.vue";
import Jugadoras from "../Pages/Jugadoras.vue";
import Galeria from "../Pages/Galeria.vue";

import Entrenamientos from "../Pages/Entrenamientos.vue";
import EntrenamientosEscuela from "../Pages/EntrenamientosEscuela.vue";
import EntrenamientosFut from "../Pages/EntrenamientosFut.vue";

import Admin from "../Pages/Admin.vue";

import FechasImportantes from "../Pages/FechasImportantes.vue";
import EstadisticasEntrenamientos from "../Pages/EstadisticasEntrenamientos.vue";

import objetivosAscenso from "../Secciones/PrivadoJugadoras/objetivosAscenso.vue";
import objetivosEscuela from "../Secciones/PrivadoJugadoras/objetivosEscuela.vue";


//Admin
import ResultadosAdmin from "../admin/ResultadosAdmin.vue";
import Home from "../Pages/Home.vue";
import JugadorasAdmin from "../admin/jugadorasAdmin.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
    {
    path: "/estadisticasentrenamientos",
    name: "Estadisticas Entrenamientos",
    component: EstadisticasEntrenamientos,
  },
     {
    path: "/fechasimportantes",
    name: "Fechas Importantes",
    component: FechasImportantes,
  },


  {
    path: "/indumentaria",
    name: "IndumentariaDetalle",
    component: IndumentariaDetalle, // Página para mostrar más detalles
  },

   {
    path: "/entrenamientosascenso",
    name: "Entrenamientos",
    component: Entrenamientos,
  },
     {
    path: "/entrenamientosescuela",
    name: "EntrenamientosEscuela",
    component: EntrenamientosEscuela,
  },
      {
    path: "/entrenamientosfut",
    name: "EntrenamientosFut",
    component: EntrenamientosFut
    ,
  },
  {
    path: "/publicaciones",
    name: "Publicaciones",
    component: Publicaciones,
  },
    {
    path: "/admin",
    name: "Administrador",
    component: Admin,
  },
    {
    path: "/admin/jugadoras",
    name: "Admin Jugadoras",
    component: JugadorasAdmin,
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
        {
    path: "/objetivosescuela",
    name: "Objetivos Escuela",
    component: objetivosEscuela,
  },
       {
    path: "/resultados-admin",
    name: "Resultados Admin",
    component: ResultadosAdmin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
