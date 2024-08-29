import type { Match } from "@/databases/supabase/types/supabase.single.types"

function sortMatches(matches: Match[]) {
    matches.sort((a: Match, b: Match) => a.sorting_id - b.sorting_id)
}

export default sortMatches