import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "@/App.vue"
import router from "@/router"
import useStoreMatches from "@/stores/useStoreMatches"
import ContainerOut from "@/components/containers/ContainerOut.vue"
import ContainerIn from "@/components/containers/ContainerIn.vue"
import HeaderApp from "@/components/headers/HeaderApp.vue"
import "@/assets/css/main.css"





const pinia = createPinia()

const app = createApp({
    extends: App,
    async beforeCreate() {
        const storeMatches = useStoreMatches()
        await storeMatches.fetchMatches()
        console.log(storeMatches.matches)
    },
})

app.use(pinia)
app.use(router)

app.component("ContainerOut", ContainerOut)
app.component("ContainerIn", ContainerIn)
app.component("HeaderApp", HeaderApp)

app.mount("#app")