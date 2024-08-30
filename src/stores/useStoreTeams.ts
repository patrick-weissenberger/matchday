import { defineStore } from "pinia"
import useStoreMatches from "@/stores/useStoreMatches"
import { computed } from "vue"
import type { Match } from "@/databases/supabase/types/supabase.single.types"
import type { Team } from "@/interfaces/interfaces"
import { useStorage } from "@vueuse/core"





const useStoreTeams = defineStore("useStoreTeams", () => {

    const storeMatches = useStoreMatches()

    const teams = computed((): Team[] => {
        let teams: Team[] = []
        let seenTeams: Set<string> = new Set()

        storeMatches.matches.forEach((match: Match) => {
            const teamHomeNameLower = match.team_home_name.toLowerCase()
            const teamAwayNameLower = match.team_away_name.toLowerCase()

            if (!seenTeams.has(teamHomeNameLower)) {
                teams.push({ name: match.team_home_name })
                seenTeams.add(teamHomeNameLower)
            }
            if (!seenTeams.has(teamAwayNameLower)) {
                teams.push({ name: match.team_away_name })
                seenTeams.add(teamAwayNameLower)
            }
        })

        teams.sort((t1: Team, t2: Team) => t1.name.localeCompare(t2.name))

        return teams
    })

    // const teams = computed((): Team[] => {
    //     let uniqueTeamNames: Set<Team> = new Set<Team>()

    //     storeMatches.matches.forEach((match: Match) => {
    //         uniqueTeamNames.add({ name: match.team_home_name.toLowerCase() })
    //         uniqueTeamNames.add({ name: match.team_away_name.toLowerCase() })
    //     })

    //     console.log("Teams:", uniqueTeamNames)

    //     return sortTeams(uniqueTeamNames)
    // })

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