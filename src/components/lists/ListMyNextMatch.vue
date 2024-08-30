<template>
    <ul class="list-my-next-match" v-if="hasMatches">
        <ItemListMyNextMatch 
        v-for="match in storeMatches.myNextMatches" 
        :key="match.id"
        :match-stage="match.match_stage" 
        :match-begins-in=getDurationByMatchId(match.id) 
        :team-home-name="match.team_home_name" 
        :team-away-name="match.team_away_name" />
    </ul>
    <ItemListMessage v-else message="Aktuell keine weiteren Spiele" />
</template>





<style>

@media(min-width: 320px) {

    ul.list-my-next-match {
        display: flex;
        flex-direction: column;
        gap: 1.6rem 0;
    }

}

@media(min-width: 768px) {
    
}

@media(min-width: 1200px) {
    
}

</style>





<script lang="ts" setup>
import ItemListMyNextMatch from "@/components/items/ItemListMyNextMatch.vue"
import ItemListMessage from "@/components/items/ItemListMessage.vue"
import useStoreMatches from "@/stores/useStoreMatches"
import { computed } from "vue"
import { calculateBeginsIn } from "@/utils/timeUtils"

const storeMatches = useStoreMatches()

const hasMatches = computed((): boolean => {
    return storeMatches.myNextMatches.length > 0 ? true : false
})

const calculatedBegins = computed((): Map<number, string> => {
    return calculateBeginsIn(storeMatches.nextMatches, storeMatches.currentMatch)
})

function getDurationByMatchId(id: number): string {
    if(calculatedBegins.value.size === 0) {
        return "0"
    } else {
        return calculatedBegins.value.get(id) || "0"
    }
}

</script>