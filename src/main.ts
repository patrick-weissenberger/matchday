import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "@/App.vue"
import router from "@/router"
import ContainerOut from "@/components/containers/ContainerOut.vue"
import ContainerIn from "@/components/containers/ContainerIn.vue"
import HeaderApp from "@/components/headers/HeaderApp.vue"
import "@/assets/css/main.css"





const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.component("ContainerOut", ContainerOut)
app.component("ContainerIn", ContainerIn)
app.component("HeaderApp", HeaderApp)

app.mount("#app")