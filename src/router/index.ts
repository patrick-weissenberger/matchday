import { createRouter, createWebHistory } from "vue-router"





const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "index",
            component: () => import("@/views/Index.vue")
        },
        {
            path: "/matches",
            name: "matches_index",
            component: () => import("@/views/matches/Index.vue")
        },
        {
            path: "/teams",
            name: "teams_index",
            component: () => import("@/views/teams/Index.vue")
        }
    ]
})





export default router