import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router"
import VueLazyLoad from "vue3-lazyload"


const app = createApp(App)

app.use(router)
app.use(VueLazyLoad, {
  // Opcional: imágenes por defecto
  loading: "https://placehold.co/600x400?text=Cargando...", // Cambia esto si tienes una imagen de carga
  error: "https://placehold.co/600x400?text=Error+Carga",     // Cambia esto si tienes una imagen de error
})

app.mount("#app")