import { defineStore } from "pinia"
import useStoreMatches from "@/stores/useStoreMatches"
import { computed } from "vue"
import type { Match } from "@/databases/supabase/types/supabase.single.types"
import type { Team } from "@/interfaces/interfaces"
import sortTeams from "@/utils/sortTeams"
import { useStorage } from "@vueuse/core"





const useStoreTeams = defineStore("useStoreTeams", () => {

    const storeMatches = useStoreMatches()

    const teams = computed(() => {
        let uniqueTeamNames: Set<Team> = new Set()

        storeMatches.matches.forEach((match: Match) => {
            uniqueTeamNames.add({ name: match.team_home_name })
            uniqueTeamNames.add({ name: match.team_away_name })
        })

        uniqueTeamNames = sortTeams(uniqueTeamNames)

        return uniqueTeamNames
    })

    let favoriteTeam = useStorage("favoriteTeam", "")

    function toggleFavoriteTeam(teamName: string) {
        if(favoriteTeam.value === "") {
            favoriteTeam.value = teamName.toLowerCase()
            useStorage("favoriteTeam", teamName.toLowerCase())
            return
        } else if(favoriteTeam.value === teamName.toLowerCase()) {
            favoriteTeam.value = ""
        } else {
            favoriteTeam.value = ""
            toggleFavoriteTeam(teamName.toLowerCase())
            return
        }
    }

    return {
        teams,
        favoriteTeam,
        toggleFavoriteTeam
    }

})





export default useStoreTeams