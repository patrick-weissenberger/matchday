import { createRouter, createWebHistory } from "vue-router"
import isAuthenticated from "@/router/middleware/isAuthenticated"





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
        },
        {
            path: "/tv",
            name: "tv_index",
            component: () => import("@/views/tv/Index.vue")
        },
        {
            path: "/auth",
            name: "auth_index",
            redirect: { name: 'auth_login_index' },
        },
        {
            path: "/auth/register",
            redirect: { name: 'auth_login_index' }
        },
        {
            path: "/auth/login",
            name: "auth_login_index",
            component: () => import("@/views/auth/Login.vue")
        },
        {
            path: "/admin",
            name: "admin_index",
            component: () => import("@/views/admin/Index.vue")
        },
        {
            path: "*",
            redirect: { name: "index" }
        }
    ]
})





router.beforeEach(isAuthenticated)





export default router