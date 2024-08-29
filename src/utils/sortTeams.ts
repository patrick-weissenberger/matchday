import type { Team } from "@/interfaces/interfaces"

function sortTeams(teams: Set<Team>): Set<Team> {
    let unsortedTeamsArray = Array.from(teams)
    
    let sortedTeamsArray = unsortedTeamsArray.sort((t1: Team, t2: Team) => {
        if(typeof t1.name === "string" && typeof t2.name === "string") {
            return t1.name.localeCompare(t2.name)
        } else {
            throw new Error('Team name must be a string')
        }
    })
    
    let sortedTeamsSet = new Set(sortedTeamsArray)
    
    return sortedTeamsSet
}

export default sortTeams