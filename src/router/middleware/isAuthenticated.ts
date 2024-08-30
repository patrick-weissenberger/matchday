import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router"
import supabase from "@/databases/supabase/supabase"





async function isAuthenticated(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    if(to.path.startsWith("/admin")) {
        const { data } = await supabase.auth.getUser()
        if(data.user) {
            next()
        } else {
            next({ name: "auth_index" })
        }
    } else {
        next()
    }
}





export default isAuthenticated