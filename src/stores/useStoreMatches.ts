import { defineStore } from "pinia"
import { computed, ref } from "vue"
import supabase from "@/databases/supabase/supabase"
import sortMatches from "@/utils/sortMatches"
import type { Match } from "@/databases/supabase/types/supabase.single.types"
import type { Ref } from "vue"
import type { RealtimeChannel } from "@supabase/supabase-js"





const useStoreMatches = defineStore("useStoreMatches", () => {

    const matches: Ref<Match[]> = ref([])

    const fetchMatches = async() => {
        const { data, error } = await supabase.from("matches").select("*").order("sorting_id", { ascending: true })

        if(error) {
            console.log(error)
        } else {
            matches.value = data
        }
    }

    const nextMatches = computed((): Match[] => {
        let nextMatches: Match[] = []

        if(matches.value.length) {
            matches.value.forEach((match: Match) => {
                if(!match.is_finished) {
                    nextMatches.push(match)
                }
            })
        } else {
            return []
        }

        return nextMatches
    })

    const pastMatches = computed((): Match[] => {
        let pastMatches: Match[] = []

        if(matches.value.length) {
            matches.value.forEach((match: Match) => {
                if(match.is_finished) {
                    pastMatches.push(match)
                }
            })
        } else {
            return []
        }

        return pastMatches
    })

    const currentMatch = computed((): Match => {
        if(nextMatches.value.length > 0) {
            return nextMatches.value[0]
        } else {
            return matches.value[0]
        }
    })

    const nextMatch = computed((): Match => {
        if(nextMatches.value.length > 1) {
            return nextMatches.value[1]
        } else {
            return matches.value[0]
        }
    })

    const realtimeMatches: RealtimeChannel = supabase.channel("realtimeMatches")
    .on<Match>("postgres_changes", {
        event: "*", schema: "public", table: "matches"
    }, payload => {
        // INSERT
        if(payload.eventType === "INSERT") {
            matches.value.push(payload.new)
            sortMatches(matches.value)
        }
        // UPDATE
        else if(payload.eventType === "UPDATE") {
            let matchIndex: number = matches.value.findIndex((match: Match) => match.id === payload.new.id)
            matches.value[matchIndex] = payload.new
            sortMatches(matches.value)
        }
        // DELETE
        else if(payload.eventType === "DELETE") {
            let matchIndex: number = matches.value.findIndex((match: Match) => match.id === payload.old.id)
            matches.value.slice(matchIndex, 1)
            sortMatches(matches.value)
        }
    }).subscribe()

    return {
        matches,
        fetchMatches,
        nextMatches,
        pastMatches,
        currentMatch,
        nextMatch
    }

})





export default useStoreMatches