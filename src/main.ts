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
        if(storeMatches.matches.length > 0) {
            console.log("Not fetched!", storeMatches.matches)
        } else {
            await storeMatches.fetchMatches()
            console.log("Fetched!", storeMatches.matches)
        }
    },
})

app.use(pinia)
app.use(router)

app.component("ContainerOut", ContainerOut)
app.component("ContainerIn", ContainerIn)
app.component("HeaderApp", HeaderApp)

app.mount("#app")