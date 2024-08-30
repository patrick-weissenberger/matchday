import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "@/App.vue"
import router from "@/router"
import useStoreMatches from "@/stores/useStoreMatches"
import ContainerOut from "@/components/containers/ContainerOut.vue"
import ContainerIn from "@/components/containers/ContainerIn.vue"
import "@/assets/css/main.css"





const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.component("ContainerOut", ContainerOut)
app.component("ContainerIn", ContainerIn)

// const storeMatches = useStoreMatches()
// await storeMatches.fetchMatches()


app.mount("#app")